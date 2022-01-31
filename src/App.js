import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        This project was coded by Fei Xing and is{" "}
        <a
          href="https://github.com/fxing11/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open sourced
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}
