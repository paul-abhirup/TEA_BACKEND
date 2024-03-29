// import mongoose from "mongoose";


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

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express();

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
    throw error

  }
})()

*/




// require('dotenv').config({path: './env'})
// its a async await code so it will also return a promise 
// for more improved version // this is better because it creates concistency in code 

import dotenv from "dotenv"

import connectDB from "./db/index.js";

import { app } from "./app.js";

dotenv.config({
  path: './env' 
})



connectDB()
.then(() => {
  // sometimes its better to listen to app.error before app.listen
  // add a app.error here 
  app.on("error", (error) => {
    console.log("ERRR: ", error);
    throw error
  })
  app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running at ${process.env.PORT}`);
  } )
})
.catch((err) => {
  console.log("MongoDB connection failed !!! ", err);
})













