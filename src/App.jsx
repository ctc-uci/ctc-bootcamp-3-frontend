import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import HangmanView from './views/HangmanView/HangmanView';
import HomeView from './views/HomeView/HomeView';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView/>}/>
        <Route exact path="/hangman" element={<HangmanView/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
