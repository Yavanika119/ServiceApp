import React, { createContext, useEffect, useState } from "react";
import api from "../api/axiosConfig";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    colors: {
      primary: "#3B82F6",
      background: "#FFFFFF",
      text: "#000000",
      inputBg: "#F3F4F6",
    },
    fonts: {
      regular: "System",
      bold: "System",
    },
  });

  // ✅ Fetch theme from backend
  const loadTheme = async () => {
    try {
      const res = await api.get("/theme");
      setTheme(res.data);
    } catch {
      console.log("Using default theme");
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
