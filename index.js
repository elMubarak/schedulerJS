const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/scheduler/add',(req,res)=>{
    res.status(200).json({"message":"Ok"});

});

app.listen( 3000, ()=>{
    console.log("App listening on port 3000")
});