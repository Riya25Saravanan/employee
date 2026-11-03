// package install 

const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");
const cors = require ("cors");

// import file
const employee = require ("./routes/employee.route");

// express app 
const app = express();

// mongoose connection setup
let dev_mongodb_url = "mongodb+srv://riyajasmin2506_db_user:riya_25@cluster1.98klxvl.mongodb.net/";
const mongoDB = process.env.mongoDB_URI || dev_mongodb_url
mongoose.connect(mongoDB);
mongoose.Promise= global.Promise;
const db= mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb connection error:"));


app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());


app.all ("/", function(req,res,next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Orgin , X-Requested-with, Content-type , Accept");
next();
});

// Route initialize

app.use("/employees", employee);

app.get("/", (req, res)=>{
    res.send ("Employee list backend server")
})
// port 
app.listen(4000, ()=>{
    console.log("my server is running on the port 4000");
});