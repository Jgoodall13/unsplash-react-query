import React from "react";
import { useGlobalContext } from "../context/context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {!isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  );
}

export default ThemeToggle;
