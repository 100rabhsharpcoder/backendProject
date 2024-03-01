import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB =  async()=>{
    try {
      const connectionInstance = await mongoose.connect(`mongodb+srv://techicioustobe:15BMmVozppWXQtV8@cluster0.nghr6cw.mongodb.net/${DB_NAME}`)
       console.log(`\n MongoDB connected mongo db ${connectionInstance.connection.host}`)
    } catch (error) {
         console.log("mongoDB connection error", error);
         process.exit(1)
    }
}

export default connectDB;