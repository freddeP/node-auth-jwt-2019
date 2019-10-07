// hantering av miljövariabler
require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));

// extern router-fil
require("./routes/authRoutes")(app);


app.listen(3000, function(){console.log("port 3000")});