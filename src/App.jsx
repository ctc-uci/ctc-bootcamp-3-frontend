import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HangmanView from './views/HangmanView/HangmanView';
import SingleMember from './views/SingleMemberInfo/SingleMember';

import NavBar from './components/NavBar/NavBar.jsx';
import TTL from './views/TwoTruthsOneLie/TTL';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/hangman" element={<HangmanView/>}/>
        <Route path="/members/:memberId" element={<SingleMember />} />
        <Route exact path="/truthslies" element={<TTL/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
