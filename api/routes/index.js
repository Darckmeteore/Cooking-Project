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

router.get('/api/mealwithingredient/:id', (req, res) => {
    controller.getMealWithIngredient(req, res);
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

router.get('/api/createdummy', (req, res) => {
    controller.createDummy(req, res);
});

// Pages

// Page to create an Ingredient
router.get('/page/createingredient', (req, res) => {
    controller.goToCreateIngredient(req, res);
});

// Page to create a meal
router.get('/page/createmeal', (req, res) => {
    controller.goToCreateMeal(req, res);
});

// Page to create an Ingredient
router.get('/page/addimagetoingredient', (req, res) => {
    controller.goToAddImageToIngredient(req, res);
});

// Page to create a meal
router.get('/page/addimagetomeal', (req, res) => {
    controller.goToAddImageToMeal(req, res);
});

// Page to create an Ingredient
router.post('/page/addimagetoingredient', (req, res) => {
    controller.addImageToIngredient(req, res);
});

// Page to create a meal
router.post('/page/addimagetomeal', (req, res) => {
    controller.addImageToMeal(req, res);
});


module.exports = router;