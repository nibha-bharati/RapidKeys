import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected sucessfully!! ");
  } catch (error) {
    console.log(`error in DB ${error}`);
  }
};

export default connectDB;