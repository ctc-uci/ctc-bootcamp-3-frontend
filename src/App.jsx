import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import HomeView from './views/HomeView/HomeView';
import Navbar from './views/HomeView/NavBar';


const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeView/>}/>
          <Route exact path="/hangman" element={<HangmanView/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
