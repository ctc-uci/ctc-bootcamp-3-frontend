import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import TruthLies from './components/TruthLies/TruthLies';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/Navbar/NavBar';
import RPSMovesPage from './components/Rps';
import Member from './components/Member/Member';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/hangman" element={<HangmanView/>}/>
        <Route exact path="/truthslies" element={<TruthLies/>}/>
        <Route exact path="/members/:member_id" element={<Member />}/>
        <Route exact path="/rps" element={<RPSMovesPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
