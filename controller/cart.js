const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.post("/:id", (req, res) => {
    var customerID = req.params.id;

    var cart = {
      cu_id: req.body.cu_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity
    };

    // userModel.cartInsert(cart, function (status) {
    //   if (status) {
    //     res.send("ok");
    //   } else {
    //     res.send("no");
    //   }
    // });
    

    res.send(cart);

    // userModel.getCartList(customerID, function (results1) {
    //    userModel.getByProduct(cart.product_id, function (result2) {
    //       res.render("cart", { customerID: results1, product_id: result2, quantity: cart.quantity });
    //    });
      
    // });

   
  });

  router.get("/:id", (req, res) => {
    var customerID = req.params.id;

    // userModel.getCartList(customerID, function (results1) {
    //    userModel.getByProduct(cart.product_id, function (result2) {
    //       res.render("cart", { customerID: results1, product_id: result2, quantity: cart.quantity });
    //    });
    // });

    // userModel.getCartList(customerID, function (cartList) {
    //    res.send(cartList);
    // });

  });


module.exports = router;
