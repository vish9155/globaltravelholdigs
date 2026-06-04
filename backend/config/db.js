<<<<<<< HEAD

=======
import dotenv from 'dotenv'
dotenv.config()
>>>>>>> d440d1e0a216ffdab56b88f8a6cc7268c5c2d00b
import mongoose from "mongoose";

let dbconnect=async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL)
   //  console.log("Database Connected")
   } catch (error) {
      // console.log("db not connected____",error.message)
   }

}

export default dbconnect