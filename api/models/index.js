//Ce fichier contient le schéma des LoginData


const mongoose = require('mongoose');
const Schema = mongoose.Schema; //majuscule car instance d'un objet (tester si ça marche avec une minuscule)
const LoginDataSchema = new Schema (
{
	pseudo : String,
	password : String,
	done : {
		type : Boolean,
		default : false
	},
	createdAt : {
		type : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('LoginData',LoginDataSchema);
