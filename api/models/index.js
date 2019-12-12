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
    },
    leveluser: {
        type: Number,
        default: 0
    },
    leveluser: {
        type: Object,
        default: {}
    }
});

const MealSchema = new Schema({
    name: String,
    ingredients: [{quantity: String, ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'}}],
    realisation: String,
    steps: [{step: Number, instruction: String}],
    level: {
        type: Number,
        default: 0
    },
    exp: {
        type: Number,
        default: 0
    }
});

const IngredientSchema = new Schema({
    name: String,
    benefits: String,
    things_to_know: String
});

module.exports = {
    LoginData: mongoose.model('LoginData', LoginDataSchema),
    Meal: mongoose.model('Meal', MealSchema),
    Ingredient: mongoose.model('Ingredient', IngredientSchema)
};