import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './searchbar.css';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchCharacters = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      const data = await response.json();
      setSearchResult(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchCharacters();
  };

  return (
    <>
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Pesquisar'
      />
      <button onSubmit={handleSearchSubmit}>
        <AiOutlineSearch />
      </button>
      {searchResult.map((character) => (
        <div key={character.name}>
          <h2>{character.name}</h2>
          <p>Data de Nascimento: {character.birth_year}</p>
          <p>Altura: {character.height}</p>
        </div>
      ))}
    </>
  );
};

export default Searchbar;
