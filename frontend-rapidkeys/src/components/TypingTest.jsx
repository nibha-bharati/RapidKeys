import { useEffect, useState } from "react";
import axios from 'axios';

// const sampleText =  "Success is not final, failure is not fatal. It is the courage to continue that counts. Keep moving, even when the road seems unclear or endless.";
// const sampleText="ab";

export default function TypingTest() {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [sampleText, setSampleText]= useState("");

  const getSentence = async()=>{
    let sentence = await axios.get("http://localhost:3000/word/get-random")

    setSampleText(sentence.data.sentence);

  }

  useEffect(()=>{
    getSentence();
  },[])

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Start timer on first keypress
    if (value.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    // Count mistake on the newly typed character
    if (
      value.length > input.length // only forward typing
    ) {
      const newIndex = value.length - 1;
      const newChar = value[newIndex];
      const expectedChar = sampleText[newIndex];

      if (newChar !== expectedChar) {
        setMistakeCount((prev) => prev + 1);
      }
    }

    setInput(value);

    // When test completes
    if (value.length === sampleText.length) {
      const duration = (Date.now() - startTime) / 1000 / 60;
      const words = sampleText.trim().split(/\s+/).length;
      const acc = Math.round(((value.length - mistakeCount) / value.length) * 100);

      setWpm(Math.round(words / duration));
      setAccuracy(acc);
      setShowResult(true);
    }
  };

  const getCharClass = (char, index) => {
    if (index < input.length) {
      return char === input[index] ? "text-[#006500]" : "text-red-500";
    }
    if (index === input.length) {
      return "underline decoration-dashed decoration-2";
    }
    return "text-gray-500";
  };

  // === Typing Screen ===
  if (!showResult) {
    return (
      <div className="bg-black text-white p-6 rounded-lg space-y-8">
        
        <div
          className="text-3xl font-mono leading-relaxed break-words cursor-text"
          onClick={() => document.getElementById("hiddenInput").focus()}
        >
          {sampleText.split("").map((char, idx) => (
            <span key={idx} className={getCharClass(char, idx)}>
              {char}
            </span>
          ))}
        </div>

        <input
          id="hiddenInput"
          type="text"
          autoFocus
          className="absolute opacity-0"
          value={input}
          onChange={handleInputChange}
        />
      </div>
    );
  }

  // === Result Screen ===
  return (
    <div className="bg-black text-white p-6 rounded-lg space-y-6 min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-[#006500] mb-4">Test Completed 🎉</h2>

      <div className="text-xl text-gray-300 space-y-2 text-center">
        <p>
          <strong>WPM:</strong>{" "}
          <span className="text-[#006500]">{wpm}</span>
        </p>
        <p>
          <strong>Accuracy:</strong>{" "}
          <span className="text-[#006500]">{accuracy}%</span>
        </p>
        <p>
          <strong>Total Mistakes:</strong> {mistakeCount}
        </p>
        <p>
          <strong>Characters Typed:</strong> {input.length}
        </p>
      </div>

      <button
        className="mt-6 px-6 py-2 bg-[#006500] hover:bg-green-700 text-white rounded-lg"
        onClick={() => {
          setInput("");
          setStartTime(null);
          setWpm(0);
          setAccuracy(100);
          setMistakeCount(0);
          setShowResult(false);
        }}
      >
        Restart Test
      </button>
    </div>
  );
}

