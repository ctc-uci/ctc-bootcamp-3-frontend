import { useEffect, useRef, useState } from "react";
import styles from "./HangmanGame.module.css";
import PropTypes from "prop-types";
import { AboutYouBackend } from "../../utils/utils";
import HangmanStateDisplay from "./HangmanStateDisplay/HangmanStateDisplay";
import { getHangmanStateFromPhrase } from "../../utils/hangmanUtils";
import HangmanLetterGuesser from "./HangmanLetterGuesser/HangmanLetterGuesser";
import Loading from "../Loading/Loading";

const HangmanGame = ({ memberId, onGameEnd }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phrase, setPhrase] = useState();
  const [gameState, setGameState] = useState([]);
  const letterIndices = useRef({});
  const [guesses, setGuesses] = useState([]);
  const [numMistakes, setNumMistakes] = useState(0);
  const [ isGameRunning, setIsGameRunning ] = useState(false);

  useEffect(()=>{
    const getHangmanPhrase = async () => {
      setIsLoading(true);
      try{
        const { data } = await AboutYouBackend.get(`/games/hangman/${memberId}`);
        const { phrase } = data;
        const { hangmanArray, letterIndices: phraseLetterIndices } = getHangmanStateFromPhrase(phrase);

        setPhrase(data.phrase);
        setGameState(hangmanArray);
        letterIndices.current = phraseLetterIndices;
        setGuesses([]);
        setNumMistakes(0);
        setIsGameRunning(true);
        setIsLoading(false);
      } catch(e){
        console.log(e);
      }
    }
    getHangmanPhrase();
  }, [memberId]);

  const checkGameEnd = (mistakes) => {
    console.log(letterIndices.current);

    // end game stuff here
    if(mistakes >= 7){
      onGameEnd(false);
      setIsGameRunning(false);
    } else if (Object.keys(letterIndices.current).length === 0){
      onGameEnd(true);
      setIsGameRunning(false);
    }
  }

  const onGuess = (letter) => {
    if(letter in letterIndices.current){
      const newState = gameState;
      letterIndices.current[letter].forEach((index)=>{
        newState[index] = letter;
      })
      delete letterIndices.current[letter];
      setGameState(newState);
    } else {
      setNumMistakes(numMistakes + 1);
    }
    setGuesses(guesses.concat(letter));
    checkGameEnd(numMistakes + 1);
  }

  return<div className={styles['hangman-container']}>
      {
        (isLoading)?
          <Loading/>
        :
          <>
            <HangmanStateDisplay gameState={gameState} guesses={guesses} numMistakes={numMistakes}/>
            <HangmanLetterGuesser guesses={guesses} onGuess={onGuess} disabled={!isGameRunning}/>
          </>
      }
    </div>
}

HangmanGame.propTypes = {
  memberId: PropTypes.number.isRequired,
  onGameEnd: PropTypes.func
}

export default HangmanGame;
