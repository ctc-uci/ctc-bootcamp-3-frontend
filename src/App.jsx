import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HangmanView from './views/HangmanView/HangmanView';
import TTL from './views/TwoTruthsOneLie/TTL';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/hangman" element={<HangmanView/>}/>
        <Route exact path="/truthslies" element={<TTL/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
