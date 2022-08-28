import React from "react";
import "./weather.css";

const Weather = ({ main, weather, wind }) => {
  const { temp } = main;
  const iconLink = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <section className="section">
      <div className="section-top">
        <div className="temp">{Math.round(temp)}°C</div>
        <div className="icon">
          <img src={iconLink} alt="icon of the current weather" />
          <p>{weather[0].description}</p>
        </div>
      </div>
      <div className="section-bottom">
        <h1>More infos:</h1>
        <div className="info">
          <div className="info-name">Humidity:</div>
          <div className="info-value">{main.humidity} %</div>
        </div>
        <div className="info">
          <div className="info-name">Pressure:</div>
          <div className="info-value">{main.pressure} hPa</div>
        </div>
        <div className="info">
          <div className="info-name">Wind:</div>
          <div className="info-value">{wind.speed} m/s</div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
