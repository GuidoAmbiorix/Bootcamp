const express = require("express"); 
const bodyParser = require( "body-parser");

const app = express();

let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];


app.use(bodyParser.urlencoded({extended:true}));
app.use('*/css',express.static('public/css'));


app.set('view engine', 'ejs'); //Use EJS as is View Engine, below app const


app.get("/",function(req,res){

    var today = new Date();
  
    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    var day = today.toLocaleDateString("en-US",options);

   res.render("List",{ListTitle: day, newListItems: items }); //List is the ejs file, kindOfDay the variable we're gonna pass day variable

});

app.post("/",function(req,res){

  item = req.body.newItem;

  items.push(item);

  res.redirect("/"); //Send information to the home route
  
  console.log(newItem);

});



app.get("/work",function(req,res){
  
  res.render("List",{ListTitle:"Work List", newListItems:workItems });

});

app.post("/work",function(req,res){

  let item = req.body.newItem;

  if(req.body.List == "Work"){

    workItems.push(item);
    res.redirect("/work");
    
  } else{

  items.push(item);
  res.redirect("/");
 
  }

  
})


app.get("/about",function(req,res){

res.render("about");


});

app.listen(3000,function(){
    console.log("Server started on port 3000");
})


