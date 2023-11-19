import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import SingleMember from './views/SingleMemberInfo/SingleMember';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/hangman" element={<HangmanView/>}/>
        <Route path="/members/:memberId" element={<SingleMember />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
