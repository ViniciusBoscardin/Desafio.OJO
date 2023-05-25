import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//Componentes
import Card from './components/cards/Card';
import Characters from './components/characters/Characters';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Moviepage from './pages/moviepage/Moviepage';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':movieId' element={<Moviepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
