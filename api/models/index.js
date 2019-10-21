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


const MealSchema = new Schema (
{
	name : String,
	description : String,
	level : {
		type : Number,
		default : 0
	},
	createdAt : {
		type : Date,
		default : Date.now
	}
});

module.exports = {
	LoginData : mongoose.model('LoginData',LoginDataSchema),
	Meal : mongoose.model('Meal',MealSchema)
};
