import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HangmanView from './views/HangmanView/HangmanView';
import MemberPage from './views/MemberView/MemberPage'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/hangman" element={<HangmanView/>}/>
          <Route exact path="/member" element={<MemberPage/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  );
};

export default App;
