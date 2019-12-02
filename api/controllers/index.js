function creatlogindata(req, res) {
    const Models = require('../models');
    const newLoginData = Models.LoginData({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: req.body.password
    });
    newLoginData.save(function(err) {
        if (err) throw err;
        res.json({ info: 'Success' });
    });
}

function getUser(req, res) {
    const Models = require('../models');
    Models.LoginData.find({ email: req.params.email }, function(err, logindatas) {
        if (err) throw err;
        res.json(logindatas);
    });
}









function getAllMeals(req, res) {
    const Models = require('../models');

    Models.Meal.find({}).sort({ level: 1 }).exec(function(err, meals) {
        if (err) throw err;
        res.json(meals);
    });
}

function getMeal(req, res) {
    const Models = require('../models');
    Models.Meal.find({ _id: req.params.id }, function(err, meal) {
        if (err) throw err;
        res.json(meal);
    });
}

function createMeal(req, res) {
    const Models = require('../models');

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
        res.json({ info: 'Success' });
    });
}


function getAllIngredients(req, res) {
    const Models = require('../models');

    Models.Ingredient.find({}).exec(function(err, ingredients) {
        if (err) throw err;
        res.json(ingredients);
    });
}

function getIngredient(req, res) {
    const Models = require('../models');
    Models.Ingredient.find({ _id: req.params.id }, function(err, ingredient) {
        if (err) throw err;
        res.json(ingredient);
    });
}

function createIngredient(req, res) {
    const Models = require('../models');

    const newIngredient = Models.Ingredient({
        ingredientId: req.body.ingredientId,
        name: req.body.name,
        benefits: req.body.benefits,
        things_to_know: req.body.things_to_know

    });

    newIngredient.save(function(err) {
        if (err) throw err;
        res.json({ info: 'Success' });
    });
}



/*

Models.Meal.find({}, function(err, meals) {
  if (err) throw err;
  res.json(meals);
});

*/

module.exports.getUser = getUser;
module.exports.creatlogindata = creatlogindata;
module.exports.getMeal = getMeal;
module.exports.createMeal = createMeal;
module.exports.getAllMeals = getAllMeals;
module.exports.getIngredient = getIngredient;
module.exports.createIngredient = createIngredient;
module.exports.getAllIngredients = getAllIngredients;