const express = require('express');
const app= express();
const cors = require('cors');
require("dotenv").config();
const {dbconnect} =require("./config/database")
const userRouter = require('./routes/user.route')
const productRouter = require('./routes/product.route');




const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`app running  port ${PORT}`);
});

app.use(express.json());
app.use(cors());
//database call
dbconnect();



app.get("/", (req,res)=>{
    return res.status(200).json({
        success: true,
        message:" hello dashboard"
    })
});

app.use("/api/v1",userRouter);
app.use("/api/product",productRouter);
