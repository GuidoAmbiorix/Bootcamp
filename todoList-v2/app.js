const express = require("express");
const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.use('*/css',express.static('public/css'));

app.set('view engine', 'ejs'); //Use EJS as is View Engine, below app const


app.get("/",function(req,res){

    var today = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    var day = today.toLocaleDateString("en-US",options);


});


app.post("/",function(req,res){

});



app.listen(3000,function(){
    console.log("Server running on port 3000");
});