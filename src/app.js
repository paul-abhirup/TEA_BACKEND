import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cross orign resource pairing 
app.use(cors({
  orgin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}))
// this limit the json file // mane 16kb obdhi json file nebe

// when data coming from url it creates an issue
// url have its own encoder : like for space it is %20
// here extended is used because it helps in giving nested objects
app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}))

// sometimes u want to store files, folders in the server 
// like here "public" folder is stored in the server 
app.use(express.static("public"))

// cookierParser is used to access and set the cookies of the clients browser
// so u can do crud operations on them
// sometimes its important to access the secure tokens
app.use(cookieParser())
// it do have options too but its not needed now




export { app }

