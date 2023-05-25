import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Characters from '../../components/characters/Characters';
import Review from '../../components/revieww/Review';

import './moviepage.css';

import slide_image_1 from '../../assets/images/episode_1.jpg';

const Moviepage = () => {
  return (
    <>
      <Navbar />
      <h1 className='titulo'>movie title</h1>;
      <div className='movie-container'>
        <div className='movie-description'>
          <h2>Descrição</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            nulla, dignissimos nisi, laudantium itaque, amet quasi et accusamus
            quas fugit porro fugiat. Quis nisi officiis doloremque fuga omnis
            perspiciatis unde expedita consectetur fugit consequuntur,
            laboriosam repellendus sit soluta, delectus ipsa aliquam, architecto
            porro commodi necessitatibus optio illo? Nam, nobis praesentium.
          </h3>
          <p>Data de Lançamento: </p>
          <div className='description'>
            <p>Diretor: </p>

            <p>Produtor: </p>
          </div>
        </div>
        <div className='movie-image'>
          <img src={slide_image_1} alt='Imagem do Produto' />
        </div>
      </div>
      <Characters />
      <Review />
    </>
  );
};

export default Moviepage;
