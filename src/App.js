import React, { useEffect, useState } from "react";
import "./App.css";
import { WEATHER_API_URL, warsawLat, warsawLon } from "./api";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [warsawWeather, setWarsawWeather] = useState({});
  const date = new Date();
  const { name, main, weather, wind } = warsawWeather;

  useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/weather?lat=${warsawLat}&lon=${warsawLon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWarsawWeather(data))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
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
      <Header name={name} date={date} />
      <Weather weather={weather} main={main} wind={wind} />
    </main>
  );
}
export default App;
