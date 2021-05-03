//import the modules
//require() functions, used to import the modules
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");

//create the rest object
// rest object is used to develop the rest service
let app = express();

//MIME type
app.use(bodyParser.json);

//enable the cors policy
app.use(cors());

//accept the json data from client application and parse it
app.use(bodyparser.urlencoded({extended:false}));

//connect to mongodb
//mongodb+srv://admin:admin@cluster0.7kgng.mongodb.net/ng9pm?retryWrites=true&w=majority
let ashokIT = mongodb.MongoClient;

//Create the GET request
app.get("/api/products", (req,res)=>{
ashokIT.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ng7pm?retryWrites=true&w=majority`, 
                (err,connection)=>{
    if(err){ console.log("-----"); throw err;}
    else{
        const db = connection.db("ng7pm");
        db.collection("products").find().toArray((err, array)=>{
            if(err) throw err;
            else{
                res.send(array);
            }
        });
    }
})
});


//allot port number to node server
let port =  7777;
app.listen(port, ()=>{
    console.log("Server Started............");
});