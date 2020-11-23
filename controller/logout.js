const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.clearCookie("cu_email");
  res.redirect("/login");
});


module.exports = router;
