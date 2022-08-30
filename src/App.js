import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          {" "}
          This Project was coded by{" "}
          <a href="https://karennavarro.io/" target="_blank">
            Karen Navarro
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/KarenPNavarro/react-weather-project"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}