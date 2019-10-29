const router = require('express').Router();
const controller = require('../controllers');

router.get('/api/LoginData',(req,res)=>{
    controller.getUser(req,res);
});

router.post('/api/LoginData',(req,res)=>{
    controller.creatlogindata(req,res);
});

router.get('/api/meals',(req,res)=>{
    controller.getAllMeals(req,res);
});

router.get('/api/meal/:id',(req,res)=>{
    controller.getMeal(req,res);
});

router.post('/api/meal',(req,res)=>{
    controller.createMeal(req,res);
});


module.exports=router;
