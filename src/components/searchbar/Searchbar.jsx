import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './searchbar.css';

const SearchBar = ({ setSearchTerm, searchTerm, handleSubmit }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Pesquisar personagens'
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        <AiOutlineSearch />
      </button>
    </>
  );
};

export default SearchBar;
