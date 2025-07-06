import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useTypingContext } from "../context/typingContext";

export default function TypingTest() {
  const { mode, selectedOption } = useTypingContext();

  const [input, setInput] = useState("");
  const inputRef = useRef("");

  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [sampleText, setSampleText] = useState("");

  const [timeLeft, setTimeLeft] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [duration, setDuration] = useState(0);

  const getSentence = async () => {
    try {
      let response;

      if (mode === "time") {
        response = await axios.get(`http://localhost:3000/word/get-random`);
        setSampleText(response.data.sentence);
      } else if (mode === "words") {
        response = await axios.get(`http://localhost:3000/word/get-random-${selectedOption}`);
        setSampleText(response.data.sentence);
      } else if (mode === "quote") {
        response = await axios.get("http://localhost:3000/quotes/get");
        setSampleText(response.data.quote);
      }
    } catch (err) {
      console.error("Error fetching sentence:", err);
      setSampleText("Error loading content...");
    }
  };

  useEffect(() => {
    if (mode === "time") {
      const timeMap = {
        "15": 15,
        "30": 30,
        "60": 60,
      };
      setDuration(timeMap[selectedOption] || 60);
    }

    getSentence();
    resetTestState();
  }, [mode, selectedOption]);

  const resetTestState = () => {
    setInput("");
    inputRef.current = "";
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setMistakeCount(0);
    setShowResult(false);
    setTimeLeft(0);

    if (timerId) clearInterval(timerId);
  };

  const calculateResults = (typed, expected, durationMin,mistakeCount) => {
    let correct = 0;

    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === expected[i]) {
        correct++;
      }
    }

    const acc = typed.length > 0 ? Math.round(((typed.length-mistakeCount) / typed.length) * 100) : 0;
    const grossWpm = (correct / 5) / durationMin;

    return { acc, grossWpm };
  };
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    inputRef.current = value;
    
    if (value.length === 1 && !startTime) {
      const now = Date.now();
      setStartTime(now);
      
      if (mode === "time") {
        setTimeLeft(duration);
        const intervalId = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev === 1) {
              clearInterval(intervalId);
              handleAutoSubmit();
            }
            return prev - 1;
          });
        }, 1000);
        setTimerId(intervalId);
      }
    }
    
    // Track real-time mistakes
    if (value.length > input.length) {
      const newIndex = value.length - 1;
      const newChar = value[newIndex];
      const expectedChar = sampleText[newIndex];
      if (newChar !== expectedChar) {
        setMistakeCount((prev) => prev + 1);
      }
    }
    
    setInput(value);
    
    if (mode !== "time" && value.length === sampleText.length) {
      const durationMin = (Date.now() - startTime) / 1000 / 60;
      const { acc, grossWpm } = calculateResults(value, sampleText, durationMin,mistakeCount);
      
      setWpm(Math.round(grossWpm));
      setAccuracy(acc);
      setShowResult(true);
    }
  };
  
  
    const handleAutoSubmit = () => {
      const typedValue = inputRef.current;
      const elapsed = duration / 60;
  
      const { acc, grossWpm } = calculateResults(typedValue, sampleText, elapsed, mistakeCount);
  
      setInput(typedValue);
      setWpm(Math.round(grossWpm));
      setAccuracy(isNaN(acc) ? 0 : acc);
      setShowResult(true);
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

  if (!showResult) {
    return (
      <div className="bg-black text-white p-6 rounded-lg space-y-8">
        {mode === "time" && startTime && (
          <div className="text-yellow-400 font-bold text-xl">
            ⏱️ Time Left: {timeLeft}s
          </div>
        )}

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

  return (
    <div className="bg-black text-white p-6 rounded-lg space-y-6 min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-[#006500] mb-4">
        Test Completed 🎉
      </h2>

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
          getSentence();
          resetTestState();
        }}
      >
        Restart Test
      </button>
    </div>
  );
}
