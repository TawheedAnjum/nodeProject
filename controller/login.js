const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('login');
});

router.post("/", (req, res) => {
  var customer = {
    cu_email: req.body.cu_email,
    cu_pass: req.body.cu_pass,
  };
  

   userModel.validate(customer, function (status) {
    if (status) {
      var cu_email = req.body.cu_email;
      userModel.getCustomerID(cu_email, function (results) {
        
        var customerID = results[0].cu_id;

        res.cookie("customerID", customerID);
        res.redirect("/home");
    });

    } else {
      res.redirect("/login");
      
    }
  });

  
});


module.exports = router;
