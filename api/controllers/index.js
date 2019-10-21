function creatlogindata(req,res){
  const LoginData = require('../models');
  const newLoginData = LoginData ({
      pseudo: req.body.pseudo,
      password: req.body.password
  });
  newLoginData.save(function(err) {
    if (err) throw err;
    res.json({info: 'Success'});
  });
}

module.exports.creatlogindata = creatlogindata;
