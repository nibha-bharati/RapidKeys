import mongoose from "mongoose";

const testTypeSchema = new mongoose.Schema({
  testType:{
    type: String,
    required: true
  }
});
const TestType = new mongoose.model("Test", testTypeSchema);
export default TestType;
