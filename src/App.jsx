import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import MembersPage from './components/MembersPage/MembersPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MembersPage />} />
        <Route exact path="/hangman" element={<HangmanView/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
