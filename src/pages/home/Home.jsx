import React from 'react';
import Characters from '../../components/characters/Characters';
import Card from '../../components/cards/Card';
import Header from '../../components/header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Card />
      <Characters />
    </div>
  );
};

export default Home;
