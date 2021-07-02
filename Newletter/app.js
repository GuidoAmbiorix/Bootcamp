const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();


app.use('*/css',express.static('public/css'));
app.use('*/images',express.static('public/images'));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/singUp.html");
});

app.post("/",function(req,res){

   const firstName = req.body.inputFirstName;
   const LastName = req.body.inputLastName;
   const Email = req.body.inputEmail;

  const data = {
      members:[
          {
            email_address: Email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: LastName,
            }
          }
        ]
  };

  const jsonData = JSON.stringify(data);


  const url = "https://us6.api.mailchimp.com/3.0/lists/312cdeb61a";

  const options = {
    method: "POST",
    auth:"Guido:9af7ff5009b7e6031e94f5b3d6e1bbfa-us6"
  }
  
  
 const request = https.request(url,options, function(response){

    if(response.statusCode == 200){
        res.sendFile(__dirname+"/success.html");
    }else{
        res.sendFile(__dirname+"/failure.html");
    }

    response.on('data',function(data){

        console.log(JSON.parse(data));
    });
    
  });

  request.write(jsonData);
  request.end(); 
  

});


app.listen(3000,function(){
    console.log("Server running on port 3000");
});


/**
 *APPKEY 
 *9af7ff5009b7e6031e94f5b3d6e1bbfa-us6 
 *
 * ListId
 * 312cdeb61a
 * */