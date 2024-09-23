"use client";
import React, { FC, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ToggleTheme.module.css";

interface ToggleThemeProps {}

const ToggleTheme: FC<ToggleThemeProps> = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggleButton} ${
        isDarkMode ? styles.toggleOn : styles.toggleOff
      }`}
      aria-pressed={isDarkMode}
      aria-label="Toggle Theme"
    >
      <span
        className={`${styles.toggleCircle} ${
          isDarkMode ? styles.circleOn : styles.circleOff
        }`}
      >
        {isDarkMode ? (
          <FaMoon className="text-slate-300" />
        ) : (
          <FaSun className="text-slate-900" />
        )}
      </span>
    </button>
  );
};

export default ToggleTheme;
