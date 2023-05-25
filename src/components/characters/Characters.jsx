import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import './characters.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Characters = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      setCharacterData(data.results);
      // console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className='titulo'>Characters</h1>
      <div className='card-wrapper'>
        <Slider {...settings}>
          {characterData.map((character) => (
            <div key={character.url} className='card-container-char'>
              <div className='nomePersonagem'>
                <span className='card-title-char'>Nome: {character.name}</span>
              </div>
              <div className='cardBox'>
                <span>
                  Data de Nascimento: <br /> {character.birth_year}
                </span>
                <span>Altura: {character.height}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Characters;
