import { useState } from "react";

export default function useUserColorScheme() {
  let isDark;
  if (localStorage.getItem("theme") === "dark") isDark = true;
  else isDark = false;
  const [darkMode, setDarkMode] = useState(isDark);
  console.log("DARK MODE: ", darkMode);
  return { darkMode, setDarkMode };
}
