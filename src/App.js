import React, { useEffect } from "react";
import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY, warsawLat, warsawLon } from "./api";

function App() {
  useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/weather?lat=${warsawLat}&lon=${warsawLon}&appid=${WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Warsaw</h1>
    </div>
  );
}

export default App;
