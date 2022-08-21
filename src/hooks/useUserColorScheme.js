import { useState, useEffect, useCallback } from "react";
import { COMMANDS } from "../utils/commands";

export default function useUserColorScheme() {
  let isDark;
  if (localStorage.getItem("theme") === "dark") isDark = true;
  else isDark = false;
  const [darkMode, setDarkMode] = useState(isDark);
  console.log("DARK MODE: ", darkMode);

  //
  const setTheme = useCallback(({ detail }) => {
    if (detail.themeName === "dark") {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    setDarkMode((prev) => !prev);
  }, []);
  useEffect(() => {
    window.addEventListener(COMMANDS.SET_THEME, setTheme);
    window.addEventListener(COMMANDS.TOGGLE_THEME, toggleTheme);
    return () => {};
  }, []);

  return { darkMode, setDarkMode };
}
