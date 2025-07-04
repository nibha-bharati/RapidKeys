import React from "react";
import { useTypingContext } from "../context/typingContext"; // Adjust the path as needed

export default function SettingsPanel() {
  const { mode, setMode, selectedOption, setSelectedOption } = useTypingContext();

  const modeClasses = (value) =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition ${
      mode === value
        ? "text-white font-bold"
        : "text-zinc-400 hover:bg-white hover:text-[#006500]"
    }`;

  const optionClasses = (value) =>
    `px-2 py-1 rounded-md text-sm transition ${
      selectedOption === value
        ? "text-white font-bold"
        : "text-zinc-300 hover:bg-white hover:text-[#006500]"
    }`;
    
  const renderOptions = () => {
    if (mode === "time") {
      return ["15", "30", "60"].map((opt) => (
        <button
          key={opt}
          onClick={() => setSelectedOption(opt)}
          className={optionClasses(opt)}
        >
          {opt}s
        </button>
      ));
    }

    if (mode === "words") {
      return ["10", "25", "50", "100"].map((opt) => (
        <button
          key={opt}
          onClick={() => setSelectedOption(opt)}
          className={optionClasses(opt)}
        >
          {opt}
        </button>
      ));
    }

    return null; // quote has no options
  };

  return (
    <div className="bg-[#006500] text-white p-2 rounded-lg flex justify-center opacity-80">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        {/* Modes */}
        {["time", "words", "quote"].map((m) => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              if (m === "time") setSelectedOption("15");
              else if (m === "words") setSelectedOption("10");
              else setSelectedOption("");
            }}
            className={modeClasses(m)}
          >
            {m}
          </button>
        ))}

        {/* Pipe Separator */}
        {mode !== "quote" && <span className="text-zinc-500">|</span>}

        {/* Mode-Specific Options */}
        {mode !== "quote" && renderOptions()}
      </div>
    </div>
  );
}
