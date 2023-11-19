import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/hangman" element={<HangmanView/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
