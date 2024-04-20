"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "retro" ? "dark" : "retro"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};