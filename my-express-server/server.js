//jshint esversion:6

const express = require("express");

const app = express(); //Represent the express module


app.get("/",function(req,res){

   res.send("hello");

});

app.listen(3000, function(){

    console.log("Server started on port 3000");
}); //listen a specific port