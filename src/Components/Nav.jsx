import React from 'react';
import './Nav.modules.css';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav({ onSearch, cities }) {

  return  (
    <nav className="navbar">
      <Link className="linkNav" to='/'>
        <span className="navbar-brand">
          Clima App
        </span>
      </Link>
      { cities ?
        <SearchBar
          onSearch={ onSearch }
        />
        :
        null
      }
    </nav>
  );
};

export default Nav;