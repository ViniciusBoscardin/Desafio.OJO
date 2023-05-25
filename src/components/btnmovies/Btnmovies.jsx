import React from 'react';
import './btnmovies.css';

const Btnmovies = ({ film, onMovieClick }) => {
  const handleClick = () => {
    onMovieClick(film.episode_id);
  };

  return (
    <div>
      <button className='ver-mais'>Ver mais</button>
    </div>
  );
};

export default Btnmovies;
