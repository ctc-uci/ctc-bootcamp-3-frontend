import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import SingleMember from './views/SingleMemberInfo/SingleMember';

import NavBar from './components/NavBar/NavBar.jsx';
import RPS from './views/RockPaperScissors/RPS.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/hangman" element={<HangmanView />} />
        <Route path="/members/:memberId" element={<SingleMember />} />
        <Route path="/rps" element={<RPS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
