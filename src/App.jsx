import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//Componentes
import Card from './components/cards/Card';
import Characters from './components/characters/Characters';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Moviepage from './pages/moviepage/Moviepage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Header />
        <Card />
        <Characters />
        {/* <Moviepage /> */}
        {/* <Routes>
          <Route path='/moviepage' element={<Moviepage />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
