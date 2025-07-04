import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/user_route.js';
import testTypeRoutes from './routes/test_type_route.js'

import testRoutes from './routes/test_route.js';
import quoteRoutes from './routes/quote_route.js';
import wordRoutes from "./routes/word_route.js"
import cors from 'cors'

//creating express object


const app = express()

app.use(cors({ origin: "*", credentials: true }));

//database conn

connectDB()

//global public api

app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to global public API of RapidType"
    })
})
app.use(bodyParser.json())
app.use('/users',userRoutes);
app.use('/test-type',testTypeRoutes);
app.use('/tests',testRoutes);
app.use('/quotes',quoteRoutes);
app.use('/word',wordRoutes)



//server
const PORT=process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });