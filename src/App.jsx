import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import TruthsLiesView from './views/TruthsLiesView/TruthsLiesView';
import RPSView from './views/RPSView/RPS';
import MemberPage from './views/MemberView/MemberPage'
import AllMembers from './views/AllMembers.jsx';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/hangman" element={<HangmanView />} />
          <Route exact path="/truthslies" element={<TruthsLiesView />} />
          <Route exact path="/rps" element={<RPSView/>}/>
          <Route exact path="/hangman" element={<HangmanView/>}/>
          <Route exact path="/member" element={<MemberPage/>}/>
          <Route exact path="/" element={<AllMembers />} />
          <Route exact path="/hangman" element={<HangmanView />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
