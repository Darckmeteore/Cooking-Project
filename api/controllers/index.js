function creatlogindata(req,res){
  const Models = require('../models');
  const newLoginData = Models.LoginData ({
      pseudo: req.body.pseudo,
      password: req.body.password
  });
  newLoginData.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});
  });
}

function getMeal(req, res) {
  const Models = require('../models');
  Models.Meal.find({_id : req.params.id}, function(err, meal) {
    if (err) throw err;
    res.json(meal);
  });
}

function createMeal(req, res) {
  const Models = require('../models');

  const newMeal = Models.Meal ({
    name: req.body.name,
    description : req.body.description
  });

  newMeal.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});
  });
}

function getAllMeals(req, res) {
  const Models = require('../models');

  Models.Meal.find({}, function(err, meals) {
    if (err) throw err;
    res.json(meals);
  });
}

module.exports.creatlogindata = creatlogindata;
module.exports.getMeal = getMeal;
module.exports.createMeal = createMeal;
module.exports.getAllMeals = getAllMeals;
