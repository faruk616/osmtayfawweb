//İmports
const express = require("express") ;
const connectDB = require("./config/db.js");
const registerroutes = require("./routes/registerroute.js");
const loginroutes = require("./routes/loginroute.js");
const profileroute = require("./routes/profileroute.js");
const cookieParser = require("cookie-parser");
const {checkUser} = require("./authMiddleware/authMiddleware.js")
require("dotenv").config() ;


const app = express();
PORT = process.env.PORT ;
connectDB() ;


//middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("*" , checkUser);
app.use("/register" , registerroutes);
app.use("/login" , loginroutes);
app.use("/profile" , profileroute);






app.listen(PORT , ()=>{console.log(`port listening on ${PORT}`)});