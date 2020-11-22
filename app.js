const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const registration = require("./controller/registration");
const login = require("./controller/login");
const home = require("./controller/home/home");
const category = require("./controller/category");
const product = require("./controller/product");
const cart = require("./controller/cart");

//config
app.set('view engine', 'ejs');

//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/registration", registration);
app.use("/login", login);
app.use("/home", home);
app.use("/category", category);
app.use("/product", product);
app.use("/cart", cart);


app.get('/', (req, res) => {
    res.send("running");
});


app.listen('3000', (error) => {
  console.log(`Listening`);
});
