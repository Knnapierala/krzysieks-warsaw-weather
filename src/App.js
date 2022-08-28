import React, { useEffect, useState } from "react";
import "./App.css";
import { WEATHER_API_URL, warsawLat, warsawLon } from "./api";
import Weather from "./components/Weather/Weather";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [warsawWeather, setWarsawWeather] = useState({});
  const date = new Date();
  console.log(warsawWeather);
  const { name, main, weather, wind } = warsawWeather;

  useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/weather?lat=${warsawLat}&lon=${warsawLon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWarsawWeather(data))
      .then(() => setIsLoading(false));
  }, []);
  // useEffect(async () => {
  //   const response = await fetch(
  //     `${WEATHER_API_URL}/weather?lat=${warsawLat}&lon=${warsawLon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setWarsawWeather(data);
  // }, []);
  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <main className="container">
      <h1 className="main-title">{name}</h1>
      <h2>Today is: {date.toString().slice(0, 15)}</h2>
      <Weather weather={weather} main={main} wind={wind} />
    </main>
  );
}
export default App;
