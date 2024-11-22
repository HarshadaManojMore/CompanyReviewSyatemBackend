import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL|| "mongodb+srv://harshada:Harshu%4006@cluster0.nim10.mongodb.net/ReviewSystem")
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;