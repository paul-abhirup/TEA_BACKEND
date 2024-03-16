import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"



const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    // try console.log(connectionInstance)

  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1); 
    // exit is a method
    //learn more about exit codes

  }
}

export default connectDB














