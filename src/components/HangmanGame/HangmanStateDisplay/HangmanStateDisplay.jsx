import styles from "./HangmanStateDisplay.module.css";
import PropTypes from "prop-types";

const HangmanStateDisplay = ({ gameState, guesses, numMistakes }) => {

  return <div>
    <p className={[styles['phrase-to-guess']]}>
      {gameState.map((char)=>{return <span className={styles['hangman-letter']}>{char ?? "_"}</span>})}
    </p>

    <p> <b>Mistakes Made: </b> {numMistakes}</p>
    <div className={styles['guess-box']}>
      <b>Guessed Letters:</b>
      <p>{(guesses.length)? guesses.join(', ') : "(None)"} </p>
    </div>
  </div>
}

HangmanStateDisplay.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  guesses: PropTypes.arrayOf(PropTypes.string),
  numMistakes: PropTypes.number
}

export default HangmanStateDisplay;
