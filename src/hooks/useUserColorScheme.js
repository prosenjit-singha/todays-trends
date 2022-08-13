import { useState, useEffect } from "react";

export default function useUserColorScheme() {
  const [darkMode, setDarkMode] = useState(false);

  function handleChange(event) {
    if (event.matches && !darkMode) {
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    } else if (!event.matches && darkMode) {
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }
  useEffect(() => {
    // console.log("<--- User Color Shceme --->");
    //  initial color scheme
    const isDarkModeEnabled = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    if (localStorage.getItem("theme") === null) {
      console.log("No color scheme set to the browser!");
      const mode = isDarkModeEnabled ? "dark" : "light";
      isDarkModeEnabled && setDarkMode(true);
      localStorage.setItem("theme", mode);
    } else {
      const mode = localStorage.getItem("theme");
      if (mode === "dark" && !darkMode) {
        setDarkMode(true);
      } else if (mode === "light" && darkMode) {
        setDarkMode(false);
      }
    }
    // window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .addEventListener("change", handleChange);

    // return () => {
    //   window
    //     .matchMedia("(prefers-color-scheme: dark)")
    //     .removeEventListener("change", handleChange);
    // };
  }, []);
  return { darkMode, setDarkMode };
}
