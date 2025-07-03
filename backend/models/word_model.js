import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
  word:{
    type: String,
    required: true
  }
});
const Word = new mongoose.model("Word", wordSchema);
export default Word;
