import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HangmanView from './views/HangmanView/HangmanView';
<<<<<<< HEAD
import TruthsLiesView from './views/TruthsLiesView/TruthsLiesView';
import RPSView from './views/RPSView/RPS';
=======
import MemberPage from './views/MemberView/MemberPage'
import { ChakraProvider } from '@chakra-ui/react'
>>>>>>> 7e4e54462287ec55100046781880c476cce59da1

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/hangman" element={<HangmanView />} />
          <Route exact path="/truthslies" element={<TruthsLiesView />} />
          <Route exact path="/rps" element={<RPSView/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
=======
          <Route exact path="/hangman" element={<HangmanView/>}/>
          <Route exact path="/member" element={<MemberPage/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

>>>>>>> 7e4e54462287ec55100046781880c476cce59da1
  );
};

export default App;
