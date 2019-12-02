//Ce fichier contient le schéma des LoginData


const mongoose = require('mongoose');
const Schema = mongoose.Schema; //majuscule car instance d'un objet (tester si ça marche avec une minuscule)


// LOGIN AND SUBSCRIBE SCHEMA
const LoginDataSchema = new Schema({
    pseudo: String,
    email: String,
    password: String,
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


// USER SCHEMA
const user = new Schema(

)

const MealSchema = new Schema({
    mealId: Number,
    name: String,
    ingredients: any,
    realisation: String,
    steps: any,
    level: {
        type: Number,
        default: 0
    },
    exp: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const IngredientSchema = new Schema({
    ingredientId: Number,
    name: String,
    benefits: String,
    things_to_know: String
});

module.exports = {
    LoginData: mongoose.model('LoginData', LoginDataSchema),
    Meal: mongoose.model('Meal', MealSchema),
    Ingredient: mongoose.model('Ingredient', IngredientSchema)
};