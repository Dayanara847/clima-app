import React, { useState } from "react";
import './SearchBar.modules.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="buttonSearch" type="submit" value="Buscar" />
    </form>
  );
}