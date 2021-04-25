import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Nav from './Components/Nav.jsx';
import Cards from './Components/Cards.jsx';
import Ciudad from './Components/City.jsx';

import './App.modules.css';

function App() {
  const [cities, setCities] = useState([]);  

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          console.log(recurso)
          const ciudad = {
            min: Math.round(recurso.main.temp_min - 273.15),
            max: Math.round(recurso.main.temp_max - 273.15),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            timezone: recurso.timezone,
          };
          for(var i = 0; i < cities.length; i ++) {
            if(cities[i].name === ciudad.name) {  // Para evitar que se dupliquen ciudades
              return;
            }
          }
          setCities(oldCities => [...oldCities, ciudad]); // Si se trata de una nueva ciudad se agrega al estado de ciudades "activas"
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route path='/' render={() => <Nav onSearch={ onSearch } cities={ cities.length > 0 ? true : false  }/>} />
      <Route exact path='/' render={() => <Cards cities={ cities } onClose={ onClose } onSearch={ onSearch } />} />
      <Route path='/ciudad/:ciudadId' render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
    </div>
  );
}

export default App;