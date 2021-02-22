import React from "react";
import "./City.modules.css";

export default function Ciudad({ city }) {
  let night = false;
  let rain = false;
  console.log(city);
  const whatTimeIsIt = () => {
    var d = new Date(new Date().getTime() + city.timezone * 1000);
    return d.toISOString();
  };

  let hour = whatTimeIsIt().slice(11, 13);

  if (hour >= 19 || hour <= 7) {
    night = true;
  }

  if (city.weather === "Rain") {
    rain = true;
  }

  if (city) {
    return (
      <div
        className={
          (night
            ? rain
              ? "rainyNight"
              : "clearNight"
            : rain
            ? "rainyDay"
            : "sunnyDay") + " ciudad"
        }
      >
        <div className="container">
          <div className="cityName">
            <h1>{city.name}</h1>
            <img
              className="iconWeather"
              src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
          <div className="infoCity">
            <p>Temperatura actual:</p>
            <p className="infoValue">{Math.round(city.temp - 273.15)} ºC</p>
            <p>Viento:</p>
            <p className="infoValue">{city.wind} km/h</p>
            <p>Cantidad de nubes:</p>
            <p className="infoValue">{city.clouds}</p>
            <p>Latitud:</p>
            <p className="infoValue">{city.latitud}º</p>
            <p>Longitud:</p>
            <p className="infoValue">{city.longitud}º</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Ciudad no encontrada</div>;
  }
}
