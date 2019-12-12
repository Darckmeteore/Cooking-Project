function goToCreateIngredient(req, res) {
    res.render('addingredient.ejs');
}

function goToCreateMeal(req, res) {

    const Models = require('../models');

    Models.Ingredient.find({}).exec(function (err, ingredients) {
        if (err) throw err;
        res.render('addmeal.ejs', {ingredients: ingredients});
    });
}

function creatlogindata(req, res) {
    const Models = require('../models');
    const newLoginData = Models.LoginData({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: req.body.password
    });
    newLoginData.save(function (err) {
        if (err) throw err;
        res.json({
            info: 'Success'
        });
    });
}

function getUser(req, res) {
    const Models = require('../models');
    Models.LoginData.find({
        email: req.params.email
    }, function (err, logindatas) {
        if (err) throw err;
        res.json(logindatas);
    });
}


function getAllMeals(req, res) {
    const Models = require('../models');

    Models.Meal.find({}).sort({
        level: 1
    }).exec(function (err, meals) {
        if (err) throw err;
        res.json(meals);
    });
}

function getMealWithIngredients(req, res) {
    const Models = require('../models');

    Models.Meal.find({_id: req.params.id}).populate('ingredients.ingredient').exec(function (err, meal) {
        if (err) throw err;
        res.json(meal);
    });

}

function getMeal(req, res) {
    const Models = require('../models');

    Models.Meal.find({
        _id: req.params.id
    }, function (err, meal) {
        if (err) throw err;
        res.json(meal);
    });


}


function createDummy(req, res) {
    const Models = require('../models');

    var ObjectID = require('mongodb').ObjectID;

    let theIngredients = [{quantity: 1, ingredient: ObjectID("5de522e14a4a1c02a00b3d16")}, {
        quantity: 2,
        ingredient: ObjectID("5de523004a4a1c02a00b3d17")
    }];

    const newMeal = Models.Meal({
        mealid: req.body.mealId,
        name: req.body.name,
        ingredients: theIngredients,
        realisation: req.body.realisation,
        steps: req.body.steps,
        exp: req.body.exp,
        level: req.body.level
    });

    newMeal.save(function (err) {
        if (err) throw err;
        res.json({
            info: 'Success'
        });
    });
}


function createMeal(req, res) {
    const Models = require('../models');

    var ObjectID = require('mongodb').ObjectID;

    // let theIngredients = [{quantity:1, ingredient:ObjectID("5de522e14a4a1c02a00b3d16")}, {quantity:2, ingredient:ObjectID("5de523004a4a1c02a00b3d17")}];

    let theIngredients = [];

    for (var i = 0; i < req.body.quantities.length; i++) {
        theIngredients.push({quantity: req.body.quantities[i], ingredient: ObjectID(req.body.ingredients[i])});
    }

    let steps = [];

    for (var i = 0; i < req.body.steps.length; i++) {
        steps.push({step: i + 1, instruction: req.body.steps[i]});
    }

    const newMeal = Models.Meal({
        name: req.body.name,
        ingredients: theIngredients,
        realisation: req.body.realisation,
        steps: steps,
        exp: req.body.exp,
        level: req.body.level
    });


    newMeal.save(function (err) {
        if (err) throw err;
        res.json({
            info: 'Success'
        });
    });

    /*

    const newMeal = Models.Meal({
        mealid: req.body.mealId,
        name: req.body.name,
        ingredients: req.body.ingredients,
        realisation: req.body.realisation,
        steps: req.body.steps,
        exp: req.body.exp,
        level: req.body.level

    });

    newMeal.save(function(err) {
        if (err) throw err;
        res.json({
            info: 'Success'
        });
    });

     */
}


function getAllIngredients(req, res) {
    const Models = require('../models');

    Models.Ingredient.find({}).exec(function (err, ingredients) {
        if (err) throw err;
        res.json(ingredients);
    });
}

function getIngredient(req, res) {
    const Models = require('../models');

    Models.Ingredient.find({_id: req.params.id}, function (err, ingredient) {
        if (err) throw err;
        res.json(ingredient);
    });


}

function createIngredient(req, res) {
    const Models = require('../models');

    const newIngredient = Models.Ingredient({
        name: req.body.name,
        benefits: req.body.benefits,
        things_to_know: req.body.things_to_know
    });

    newIngredient.save(function (err) {
        if (err) throw err;
        res.json({
            info: 'Success'
        });
    });

}

module.exports.getUser = getUser;
module.exports.creatlogindata = creatlogindata;
module.exports.getMeal = getMeal;
module.exports.getMealWithIngredient = getMealWithIngredients;
module.exports.createMeal = createMeal;
module.exports.getAllMeals = getAllMeals;
module.exports.getIngredient = getIngredient;
module.exports.createIngredient = createIngredient;
module.exports.getAllIngredients = getAllIngredients;

module.exports.goToCreateIngredient = goToCreateIngredient;
module.exports.goToCreateMeal = goToCreateMeal;

module.exports.createDummy = createDummy;