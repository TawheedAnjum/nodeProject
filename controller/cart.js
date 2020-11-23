const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.post("/:id", (req, res) => {
    var product_id = req.params.id;

    var cart = {
      cu_id: req.body.cu_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity
    };

    // res.send(cart);

    userModel.getByProduct(product_id, function (result1) {
      res.render("cart", { product_id: result1, quantity: cart.quantity });
    });
  });

// router.get("/product/:id", (req, res) => {
//   res.send("ok");
// });

module.exports = router;
