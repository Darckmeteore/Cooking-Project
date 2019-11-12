function creatlogindata(req,res){
  const Models = require('../models');
  const newLoginData = Models.LoginData ({
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: req.body.password
  });
  newLoginData.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});
  });
}

function getUser(req,res){
  const Models = require('../models');
  // pseudo: req.query.pseudo ,
  Models.LoginData.find({ email: req.query.email}, function (err, logindatas){
    if (err) throw err;
    res.json(logindatas);
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
    description : req.body.description,
    level : req.body.level

  });

  newMeal.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});
  });
}

function getAllMeals(req, res) {
  const Models = require('../models');

  Models.Meal.find({}).sort({level: 1}).exec(function(err, meals) {
    if (err) throw err;
    res.json(meals);
  });

  /*

  Models.Meal.find({}, function(err, meals) {
    if (err) throw err;
    res.json(meals);
  });

  */
}
module.exports.getUser = getUser;
module.exports.creatlogindata = creatlogindata;
module.exports.getMeal = getMeal;
module.exports.createMeal = createMeal;
module.exports.getAllMeals = getAllMeals;
