const express= require("express");
const dotenv= require("dotenv");
const connectDB= require("./config/db");

dotenv.config();
connectDB();

const app=express();

app.get("/",(req,res)=>{
    res.send("hello user priya programmer");
});

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log("server is running");
});