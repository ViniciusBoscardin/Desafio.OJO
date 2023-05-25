import React, { useState } from 'react';
import './navbar.css';
import Searchbar from '../searchbar/Searchbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCharacters(searchTerm);
  };

  const fetchCharacters = (search) => {
    const url = `https://swapi.dev/api/people/?search=${search}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.error('Error ', error);
      });
  };

  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <h1>
          <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>
            Star Wars Universe{' '}
          </Link>
        </h1>
      </div>
      <div className='rightSide'>
        <Searchbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
        />
        <ul>
          {characters.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
