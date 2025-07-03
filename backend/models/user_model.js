import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
  },
  createdAt: { type: Date, default: Date.now },
  tests_completed: {
    //Number of tests completed by the user
    type: Number,
  },
  totalTestTime: {
    //Total time a user has spent taking tests
    type: Number,
  },
  totalTestCount: {
    type: Number,
  },
  bestSpeeds: {
    words: {
      15: { wpm: Number, accuracy: Number, date: Date },
      30: { wpm: Number, accuracy: Number, date: Date },
      60: { wpm: Number, accuracy: Number, date: Date },
    },
    quotes: {
      wpm: Number, 
      accuracy: Number, 
      date: Date 
    },
  },
});

userSchema.pre("save", async function () {
  this.password = await bcryptjs.hash(this.password, 12);
});

const User = new mongoose.model("User", userSchema);
export default User;
