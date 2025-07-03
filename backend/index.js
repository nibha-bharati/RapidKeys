const express = require("express")
const connectDB = require("./config/db")    
require("dotenv").config();


//creating express object

const app = express()


//database conn

connectDB()

//global public api

app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to global public API of RapidType"
    })
})



//server
PORT=process.env.PORT
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });