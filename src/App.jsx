import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import RPS from './views/RockPaperScissors/RPS';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/hangman" element={<HangmanView />} />
        <Route exact path="/rps" element={<RPS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
