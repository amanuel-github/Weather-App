import React from "react";
import { Weather } from "./components/weather/Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>
        <Weather />
      </header>
    </div>
  );
}

export default App;
