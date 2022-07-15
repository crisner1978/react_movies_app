import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, createContext, useMemo, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const storeDarkMode = localStorage.getItem('dark_mode')
  const [mode, setMode] = useState(storeDarkMode ? storeDarkMode : "light");

  const toggleDarkMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  useEffect(() => {
    localStorage.setItem('dark_mode', mode)
  }, [mode])

  return (
    <DarkModeContext.Provider value={{mode, setMode, toggleDarkMode}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used with DarkModeProvider.Provider")
  }
  return context
}
