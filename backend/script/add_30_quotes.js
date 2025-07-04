import mongoose from "mongoose";
import dotenv from "dotenv";
import Quote from "../models/quote_model.js";

dotenv.config({ path: '../.env' });

const quotes = [
  "Success is not final, failure is not fatal. It is the courage to continue that counts. Keep moving, even when the road seems unclear or endless.",
  "I never dreamed about success. I worked for it. You must rise above the storm to find the sunshine. There’s no shortcut to any place worth going.",
  "She looked at the stars, whispered her wishes, and smiled. Hope wasn’t just a word—it was everything she carried inside, no matter how hard life became.",
  "You don’t have to see the whole staircase. Just take the first step. Every journey starts with a decision to move forward despite fear, doubt, or delay.",
  "The mind is everything. What you think, you become. Guard your thoughts like treasures—they can build empires or destroy dreams within the silence of your soul.",
  "The world breaks everyone, and afterward, many are strong at the broken places. Scars tell stories of survival, not defeat. Wear them proudly, not shamefully.",
  "Life isn’t about waiting for the storm to pass. It’s about learning to dance in the rain. Embrace chaos; beauty often hides in the most unexpected places.",
  "He paused, looked up at the sky, and whispered, 'Maybe tomorrow will be better.' In that moment, hope was enough to keep his tired feet moving forward.",
  "In three words I can sum up everything I’ve learned about life: it goes on. You can cry, scream, or fall—but eventually, you must rise again.",
  "Time moves slowly when you’re waiting, yet too fast when you’re living. That’s the paradox of life—it never fits quite right, but it always moves forward.",
  "She knew her worth, even when others didn’t. Confidence isn’t loud; it’s quiet, steady, and rooted deep in knowing who you are beyond the noise.",
  "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. Look for stars when skies turn black.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. Strength is measured in how many times you stand back up.",
  "Don’t walk in front of me; I may not follow. Don’t walk behind me; I may not lead. Just walk beside me, and be my friend.",
  "We are all in the gutter, but some of us are looking at the stars. Even in despair, there is beauty, and in ruin, there is hope.",
  "Sometimes, the smallest step in the right direction ends up being the biggest step of your life. Tiptoe if you must, but take the step.",
  "He didn’t say much, but his silence echoed louder than any words could. Sometimes, silence is not empty—it’s full of meaning, memory, and unspoken emotion.",
  "You may encounter many defeats, but you must not be defeated. Each failure teaches you something you needed to learn before you could truly succeed.",
  "Dreams don’t work unless you do. You can hope, wish, and wait—but effort is the only key that unlocks the future you’re imagining in your heart.",
  "She walked into the room like a quiet storm—calm on the surface, but powerful underneath. Confidence doesn’t scream; it whispers, and the world listens.",
  "A ship is safe in harbor, but that’s not what ships are built for. You must venture into the unknown to discover the true strength within.",
  "Let go of who you think you’re supposed to be; embrace who you are. The only person you need to impress is the one in the mirror.",
  "They told her she couldn’t, so she did. Not out of spite, but because she believed in herself when nobody else dared to. That was enough.",
  "He carried his burdens like armor. You’d never guess he was struggling, because strength isn’t always loud—it’s often found in quiet resilience and everyday endurance.",
  "It’s okay to be scared. Being scared means you’re about to do something really brave. Courage isn’t the absence of fear—it’s the decision to act anyway.",
  "The universe doesn’t give you what you ask for with your thoughts. It gives you what you demand with your actions. Show up, every single day.",
  "Not all storms come to disrupt your life. Some come to clear your path. Don’t fear the chaos—it might be the start of something better.",
  "She wasn’t searching for a hero. She became one. In a world that told her to shrink, she chose to expand, to speak, and to rise.",
  "When everything feels like it’s falling apart, remember that seeds must first crack open before they can grow. Destruction often precedes transformation and new beginnings.",
  "Sometimes, you win. Sometimes, you learn. Failure isn’t the opposite of success—it’s part of it. Every stumble is a step toward becoming something stronger, wiser, better."
];


const seedQuotes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // await Word.deleteMany({});
    // console.log("🧹 Cleared existing words");

    const result = await Quote.insertMany(quotes.map((quote) => ({ quote })));
    console.log(`✅ Inserted ${result.length} quotes`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding quotes:", err);
    process.exit(1);
  }
};

seedQuotes();
