import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  quote:{
    type: String,
    required: true
  }
});
const Quote = new mongoose.model("Quote", quoteSchema);
export default Quote;
