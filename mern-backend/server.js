const express= require("express");
const dotenv= require("dotenv");
const connectDB= require("./config/db");
const authRoutes= require("./routes/authRoutes");
const cors=require("cors");

dotenv.config();
connectDB();

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);

app.get("/",(req,res)=>{
    res.send("hello user priya programmer");
});

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log("server is running");
});