import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  testTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TestType",
    required: true,
  },
  speed: {
    //In words per minute
    type: Number,
    required: true,
  },
  accuracy: {
    //In percentage
    type: Number,
    required: true,
  },
});
const Test = new mongoose.model("Test", testSchema);
export default Test;
