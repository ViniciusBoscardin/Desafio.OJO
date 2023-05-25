import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Characters from '../../components/characters/Characters';
import Review from '../../components/revieww/Review';

import './moviepage.css';

import slide_image_1 from '../../assets/images/episode_1.jpg';
import slide_image_2 from '../../assets/images/episode_2.webp';
import slide_image_3 from '../../assets/images/episode_3.jpg';
import slide_image_4 from '../../assets/images/episode_4.webp';
import slide_image_5 from '../../assets/images/episode_5.jpg';
import slide_image_6 from '../../assets/images/episode_6.jpg';

import { useParams } from 'react-router-dom';

const Moviepage = () => {
  const { movieId } = useParams();

  const [filmData, setFilmData] = useState([]);
  const [charsInfo, setCharsInfo] = useState([]);

  const fetchFilms = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/films/${movieId}`);
      const data = await response.json();
      setFilmData(data);
    } catch (error) {
      console.error(error);
    } finally {
      getAllChar();
    }
  };

  useEffect(() => {
    fetchFilms();
  }, [movieId]);

  const getAllChar = async () => {
    if (!filmData.characters) return;

    let charMovie = [];
    await Promise.all(
      filmData.characters.map(async (item) => {
        try {
          if (item) {
            const response = await fetch(item);
            const data = await response.json();
            charMovie.push(data);
          }
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      })
    );
    setCharsInfo(charMovie);
  };

  useEffect(() => {
    getAllChar();
  }, [filmData]);
  console.log(charsInfo);

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

  return (
    <>
      <h1 className='titulo'>{filmData.title}</h1>
      <div className='movie-container'>
        <div className='movie-description'>
          <div>
            <h2>Descrição</h2>
            <p className='sinopse'>{filmData.opening_crawl}</p>
          </div>
        </div>

        <div>
          <img
            className='movie-image'
            src={getImageForFilm(filmData.episode_id) || <Skeleton />}
            alt={`Imagem ${filmData.episode_id}`}
          />
        </div>
        <div className='data-lancamento'>
          <p style={{ fontWeight: 'bold' }}>Data de Lançamento:</p>
          <span>{filmData.release_date}</span>
        </div>
        <div className='description'>
          <div>
            <p style={{ fontWeight: 'bold' }}>Diretor: </p>
            <span>{filmData.director}</span>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Produtor:</p>
            <span>{filmData.producer} </span>
          </div>
        </div>
      </div>
      {charsInfo && <Characters charactersOnMovie={charsInfo} />}
      <Review filmeId={movieId} />
    </>
  );
};

export default Moviepage;
