import React, { useEffect, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const scTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SCThemeProvider theme={scTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}
