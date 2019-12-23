const express = require('express');
const path = require('path');
const app = express();
const APIRoutes = require('./api/routes/');

// TODO Attention pour l'upload des images lors de la création des repas ou des ingredients il vaut mieux que soit mettre une url qui existe déjà soit le faire dans un second temps car sinon la donnée du form est corompue...

//Le parser est nécessaire (cela fait partie des aberrations) car par défaut le serveur Node n'accepte pas les données du client, il faut donc un middleware (body-parser) pour ça.
//On l'oublie => que des None pour les valeurs
//Pour les données de formulaire, IL FAUT LE METTRE AVANT LE APP.USE
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ( {
	extended : true
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public/')));

// view engine setup
app.set('views', path.join(__dirname, 'api/views/'));
app.set('view engine', 'ejs');

// //

app.use(APIRoutes);
app.listen(3000);
console.log("waiting on localhost:3000");



//Pour se connecter à la DB

const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/jcp-diet';
mongoose.connect(database,(err)=> {
	if (err)
		throw err;
	console.log('Connect to the database');
});

module.exports = app;
