import React from "react";
import SearchBar from './SearchBar.jsx';
import "./Cards.modules.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose, onSearch }) {
  let content;

  if (cities.length > 0) {
    content = (
      <div className="cards">
        {cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />
        ))}
      </div>
    );
  } else {
    content = (
      <div className="noCards">
        <h1 className="noCities">Aún no tienes ciudades cargadas!</h1>
        <h2 className="noCities">
          Agrega una para ver las condiciones climáticas de la ciudad
        </h2>
        <SearchBar
          onSearch={ onSearch }
        />
      </div>
    );
  }

  return content;
}
