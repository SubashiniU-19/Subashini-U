const express = require("express");
const bodyParser=require("body-Parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/INDEX.html");
});

app.post("/",function(req,res)
{ var H=Number(req.body.Height);
  var W=Number(req.body.Weight);
  var result=(W/(H*H))*10000;
  res.send("The answer is  :" +result);
});

app.listen(3000,function(){
  console.log("Server has started on port 3000");
});
