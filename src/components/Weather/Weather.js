import React from "react";
import "./weather.css";

const Weather = ({ main, weather }) => {
  const { temp } = main;
  const iconID = weather[0].icon;
  const iconLink = `http://openweathermap.org/img/wn/${iconID}@2x.png`;

  return (
    <section className="section">
      <div className="section-top">
        <div className="temp">{Math.round(temp)}°C</div>
        <div className="icon">
          <img src={iconLink} alt="icon of the current weather" />
          <p>{weather[0].description}</p>
        </div>
      </div>
      <div className="section-bottom"></div>
    </section>
  );
};

export default Weather;
