import { ALPHABET } from '../../../utils/hangmanUtils';
import styles from './HangmanLetterGuesser.module.css';
import PropTypes from 'prop-types';

const HangmanLetterGuesser = ({ guesses, onGuess, disabled }) => {
  return (
    <div className={styles['letter-guesser']}>
      {ALPHABET.map(letter => {
        const isDisabled = guesses.includes(letter) || disabled;
        const onClick = () => {
          onGuess(letter);
        };

        return (
          <button
            className={isDisabled ? styles['letter-button-disabled'] : styles['letter-button']}
            key={letter}
            type="button"
            onClick={isDisabled ? null : onClick}
            disabled={isDisabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

HangmanLetterGuesser.propTypes = {
  guesses: PropTypes.arrayOf(PropTypes.string),
  onGuess: PropTypes.func,
  disabled: PropTypes.bool,
};

export default HangmanLetterGuesser;
