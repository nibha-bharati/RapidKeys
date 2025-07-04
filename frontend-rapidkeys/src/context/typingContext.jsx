// TypingContext.js
import React, { createContext, useContext, useState } from 'react';

const TypingContext = createContext();

export const TypingProvider = ({ children }) => {
  const [mode, setMode] = useState("time");
  const [selectedOption, setSelectedOption] = useState("15");

  return (
    <TypingContext.Provider value={{ mode, setMode, selectedOption, setSelectedOption }}>
      {children}
    </TypingContext.Provider>
  );
};

// Custom hook for easy usage
export const useTypingContext = () => useContext(TypingContext);
