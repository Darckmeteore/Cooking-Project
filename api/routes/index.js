const router = require('express').Router();
const controller = require('../controllers')

router.post('/api/LoginData',(req,res)=>{
    controller.creatlogindata(req,res);
});


module.exports=router;
