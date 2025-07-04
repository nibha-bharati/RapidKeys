import { useState, useEffect } from "react";

const sampleText = "The quick brown fox jumps over the lazy dog.";

export default function TypingTest() {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (input === sampleText) {
      const duration = (Date.now() - startTime) / 1000 / 60;
      const words = sampleText.split(" ").length;
      setWpm(Math.round(words / duration));
    }
  }, [input]);

  const getCharClass = (char, index) => {
    if (index < input.length) {
      return char === input[index]
        ? "text-[#006500]"
        : "text-red-500";
    }
    if (index === input.length) {
      return "underline decoration-dashed decoration-2";
    }
    return "text-gray-500";
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg space-y-6">
      <div
        className="text-2xl font-mono leading-relaxed break-words"
        onClick={() => document.getElementById("hiddenInput").focus()}
      >
        {sampleText.split("").map((char, idx) => (
          <span key={idx} className={getCharClass(char, idx)}>
            {char}
          </span>
        ))}
      </div>

      {/* Hidden input captures real keystrokes */}
      <input
        id="hiddenInput"
        type="text"
        autoFocus
        className="absolute opacity-0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="text-sm text-gray-400 flex gap-4">
        <span>WPM: {wpm}</span>
        <span>Characters: {input.length}</span>
      </div>
    </div>
  );
}
