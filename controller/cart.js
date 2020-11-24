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
    //   var product=[];
    //   for(i=0; i<results1.length; i++){
    //     product.push(results1[i].id)
    //   }
    //   console.log(product);
    // });

    // userModel.getCartList(customerID, function (results2){
    // userModel.getByCart(customerID, function (results1) {
    //   res.send(results1);
    // });
    // });

    userModel.getByCustomer(customerID, function (results2) {
      userModel.getByCart(customerID, function (results1) {
        res.render("cart", {
          info: results1,
          customerID: results2,
        });
      });

      // res.render("cart", {
      //   customerID: results2,
      // });
    });
  });

  router.get("/delete/:id", (req, res) => {
    var customer = req.cookies["customerID"];
    var cart_id = req.params.id;
    userModel.deleteCart(cart_id, function (results2) {
      res.redirect("/cart/" + customer);
    });

  });


module.exports = router;
