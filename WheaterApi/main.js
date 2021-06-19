const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

   
    const query = req.body.CityName;
    const appid = "852c34bfec008cfc1b14469d3757cc64";
    const units = "metric";

    
    URL = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid+"&units="+units+"";

    https.get(URL,function(response){
    
    
        response.on('data', function(data){
    
            const wheaterData = JSON.parse(data);
    
            const temp = wheaterData.main.temp;
            const wheatherDescription = wheaterData.weather[0].description;
            const icon = wheaterData.weather[0].icon;
            const IMGURL = " http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write('<h1>The temperature in '+query+' is: '+temp+'</h1>');
            res.write("<p>The wheater is currently: "+wheatherDescription+"</p>");
            res.write("<img src = "+IMGURL+">");
            res.send();
    
        });
    
    });
    

});


app.listen(3000,function(){
    console.log("Server running on port 3000");
})