import React, { useEffect, useState } from 'react';
import './card.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import slide_image_1 from '../../assets/images/episode_1.jpg';
import slide_image_2 from '../../assets/images/episode_2.webp';
import slide_image_3 from '../../assets/images/episode_3.jpg';
import slide_image_4 from '../../assets/images/episode_4.webp';
import slide_image_5 from '../../assets/images/episode_5.jpg';
import slide_image_6 from '../../assets/images/episode_6.jpg';
import Btnmovies from '../btnmovies/Btnmovies';

const Card = ({ title, data, body }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
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

  const getImageForFilm = (episodeId) => {
    switch (episodeId) {
      case 1:
        return slide_image_1;
      case 2:
        return slide_image_2;
      case 3:
        return slide_image_3;
      case 4:
        return slide_image_4;
      case 5:
        return slide_image_5;
      case 6:
        return slide_image_6;
      default:
        return null;
    }
  };

  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      setFilmData(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='wrapper'>
      <Slider {...settings}>
        {filmData.map((film) => (
          <div key={film.url} className='card-container'>
            <img
              className='img-container'
              src={getImageForFilm(film.episode_id)}
              alt={`Imagem ${film.episode_id}`}
            />
            <div className='nomeFilme'>
              <span className='card-title'>{film.title}</span>
            </div>
            <div className='cardBox'>
              <span>Data de Lançamento: {film.release_date}</span>
              <span>Diretor: {film.director}</span>
              <Btnmovies />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
