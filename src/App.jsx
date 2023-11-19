import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HangmanView from './views/HangmanView/HangmanView';
import TruthsLiesView from './views/TruthsLiesView/TruthsLiesView';
import RPSView from './views/RPSView/RPS';
import MemberPage from './views/MemberView/MemberPage'

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
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
