import mongoose from "mongoose";

const testTypeSchema = new mongoose.Schema({
  testType:{
    type: String,
    required: true
  }
});
const TestType = new mongoose.model("TestType", testTypeSchema);
export default TestType;
