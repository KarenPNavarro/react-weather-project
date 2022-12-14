import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This Project was coded by{" "}
          <a href="https://karennavarro.io/" target="_blank" rel="noreferrer">
            Karen Navarro
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/KarenPNavarro/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
