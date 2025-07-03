import mongoose from "mongoose";
import dotenv from "dotenv";
import Word from "../models/word_model.js";

dotenv.config();

const words = [
  "at", "is", "the", "a", "an", "he", "she", "it", "we", "they",
  "you", "me", "him", "her", "this", "that", "these", "those", "in", "on",
  "by", "for", "with", "to", "from", "up", "down", "out", "about", "of",
  "and", "but", "or", "so", "yet", "as", "if", "than", "then", "because",
  "while", "during", "before", "after", "when", "where", "who", "what", "why", "how",
  "can", "could", "shall", "should", "will", "would", "may", "might", "must", "do",
  "does", "did", "done", "has", "have", "had", "be", "being", "been", "am",
  "are", "was", "were", "say", "says", "said", "go", "goes", "went", "gone",
  "make", "makes", "made", "know", "knows", "knew", "see", "saw", "seen", "think",
  "thought", "take", "took", "taken", "come", "came", "get", "got", "gotten", "give",
  "gave", "given", "find", "found", "tell", "told", "work", "works", "worked", "call",
  "calls", "called", "try", "tried", "ask", "asked", "need", "needed", "feel", "felt",
  "leave", "left", "put", "kept", "let", "help", "helped", "talk", "talked", "turn",
  "turned", "start", "started", "show", "showed", "hear", "heard", "play", "played", "run",
  "ran", "move", "moved", "live", "lived", "believe", "believed", "bring", "brought", "write",
  "wrote", "written", "sit", "sat", "stand", "stood", "lose", "lost", "pay", "paid",
  "meet", "met", "include", "included", "continue", "continued", "set", "learn", "learned", "change",
  "changed", "lead", "led", "watch", "watched", "follow", "followed", "stop", "stopped", "create",
  "created", "open", "opened", "walk", "walked", "win", "won", "offer", "offered", "remember",
  "remembered", "love", "loved", "consider", "considered", "appear", "appeared", "buy", "bought", "wait"
];

const seedWords = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    await Word.deleteMany({});
    console.log("🧹 Cleared existing words");

    const result = await Word.insertMany(words.map((word) => ({ word })));
    console.log(`✅ Inserted ${result.length} words`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding words:", err);
    process.exit(1);
  }
};

seedWords();
