// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// Approach - 1
// function connectDB(){}
// connectDB()

// Approach - 2
// using iife in js
// its a GOOD PRACTICE to start iife with ;
// ;()()


/*
  // Noob Approach
  // this is a bad approach because the index.js got polluted 


;( async () => {
  try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error", (error) => {
    console.log("ERRR: ", error);
    throw error
   })
   app.listen(process.env.PORT, ()=>{
    console.log(`APP is listening to PORT ${process.env.PORT}`)
   })

  }catch(error){
    console.error("ERROR: ",error)
    throw err

  }
})()

*/




// require('dotenv').config({path: './env'})

// for more improved version // this is better because it creates concistency in code 

import dotenv from "dotenv"


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: './env' 
})



connectDB();













