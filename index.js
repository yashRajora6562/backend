require("dotenv").config()
const express=require ('express');
const app=express();
const port=3005;
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.get("/twitter",(req,res)=>{
    res.send("<h1>twitter</h1>");
})
app.listen(process.env.PORT,()=>{
    console.log('app is listening at ${port}');
})