import express from  "express"
import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDb')
}).catch((err)=>{
    console.log(err)
})

// ranjit9734
// mongodb+srv://ranjit800:<db_password>@mern-real-estate.wnlinch.mongodb.net/?retryWrites=true&w=majority&appName=mern-real-estate

const app = express();

app.get('/', function(req,res){
    res.send("hey")
})

app.listen(3000, ()=>{
    console.log('Server running on PORT 3000')
})