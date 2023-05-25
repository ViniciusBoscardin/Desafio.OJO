import React from 'react';
import { useState, useEffect } from 'react';
import './characters.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeadBodyGrid from '../skeleton/Skeleton';

const Characters = ({ charactersOnMovie }) => {
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

  const [showLoading, setShowLoading] = useState(false);

  const [characterData, setCharacterData] = useState(charactersOnMovie || []);

  useEffect(() => {
    if (!charactersOnMovie) {
      fetchCharacter();
    } else {
      setCharacterData(charactersOnMovie);
    }
  }, [charactersOnMovie]);

  const fetchCharacter = async () => {
    setShowLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      setCharacterData(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setShowLoading(false);
    }
  };

  return (
    <>
      <h1 className='titulo'>Characters</h1>
      <div className='card-wrapper'>
        {showLoading ? (
          <HeadBodyGrid boxSkeleton='170' />
        ) : (
          <Slider {...settings}>
            {characterData.map((character) => (
              <div key={character.url} className='card-container-char'>
                <div className='nomePersonagem'>
                  <span className='card-title-char'>
                    Nome: {character.name}
                  </span>
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
        )}
      </div>
    </>
  );
};

export default Characters;
