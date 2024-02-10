import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
      }}
      onClick={handleClick}
    >
      Toggle
    </button>
  );
}

export default ToggleButton;
