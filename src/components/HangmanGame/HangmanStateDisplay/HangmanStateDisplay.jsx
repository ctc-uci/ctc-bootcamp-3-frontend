import styles from "./HangmanStateDisplay.module.css";
import PropTypes from "prop-types";

const HangmanStateDisplay = ({ gameState, guesses, numMistakes }) => {

  return <div>
    <p> {gameState.map((char)=>{return char ?? "_"}).join('')} </p>
    <p> <b>Guesses:</b> {guesses.join(', ')} </p>
    <p> <b>Mistakes Made: </b> {numMistakes}</p>
  </div>
}

HangmanStateDisplay.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  guesses: PropTypes.arrayOf(PropTypes.string),
  numMistakes: PropTypes.number
}

export default HangmanStateDisplay;
