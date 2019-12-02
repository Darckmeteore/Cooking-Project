const router = require('express').Router();
const controller = require('../controllers');

router.get('/api/LoginData/:email', (req, res) => {
    controller.getUser(req, res);
});

router.post('/api/LoginData', (req, res) => {
    controller.creatlogindata(req, res);
});

router.get('/api/meals', (req, res) => {
    controller.getAllMeals(req, res);
});

router.get('/api/meal/:id', (req, res) => {
    controller.getMeal(req, res);
});

router.post('/api/meal', (req, res) => {
    controller.createMeal(req, res);
});

router.get('/api/ingredients', (req, res) => {
    controller.getAllIngredients(req, res);
});

router.get('/api/ingredient/:id', (req, res) => {
    controller.getIngredient(req, res);
});

router.post('/api/ingredient', (req, res) => {
    controller.createIngredient(req, res);
});


module.exports = router;