import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitailDarkMode = () => {
  const perfersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return perfersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitailDarkMode);
  const [searchTerm, setSearchTerm] = useState("dog");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkTheme) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]); //This is important to add isDarkTheme as a dependency
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
