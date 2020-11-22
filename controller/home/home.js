const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {

//   if(req.cookies['uname'] =! null){
//     var customer = req.cookies["uname"];

//   userModel.getByCustomer(customer, function (result1) {
//     userModel.getAll(function (result2) {
//       userModel.getAllCategory(function (result3) {
//         res.render("home", { customer: result1, product: result2, category: result3 });
//       });
//     });
//   });
// }else{
  userModel.getAll(function (result2) {
      userModel.getAllCategory(function (result3) {
        res.render("home", { product: result2, category: result3 });
      });
    });
// }

  

});

// router.get("/product/:id", (req, res) => {
//   res.send("ok");
// });

module.exports = router;
