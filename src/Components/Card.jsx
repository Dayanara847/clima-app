import React from "react";
import "./Card.modules.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="closeIconTitle">
          <Link className="title" to={`/ciudad/${id}`}>
            <h5 className="card-title">{name}</h5>
          </Link>
          <button onClick={onClose} className="btn">
            X
          </button>
        </div>
        <div className="info">
          <div className="text">
            <div className="minTemp">
              <p className="temp">Min</p>
              <p className="temp">{min}°C</p>
            </div>
            <div className="maxTemp">
              <p className="temp">Max</p>
              <p className="temp">{max}°C</p>
            </div>
          </div>
          <div className="iconoClima">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
