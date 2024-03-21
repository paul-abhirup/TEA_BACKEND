import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,//trims white spaces
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true, 
      //using too much of indexing can slow down the database
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,      
    },
    watchHistory:{
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    password:{
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken:{
      type: String,
    },
  },{
    timestamps: true,  
  }
)

// userSchema.pre("save", () => {}); //dont write arrow function like this because in arrow function there is no context of this
// here the context of the function is imp

userSchema.pre("save",async function (next) {
  if(!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10) // 10 is the no of hashing rounds 
  next()
}) 
//async is used because its a slow process 
//next because the midleware is used 

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = mongoose.model("User", userSchema)












