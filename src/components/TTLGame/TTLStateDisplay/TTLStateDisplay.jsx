import PropTypes from "prop-types";
import styles from "./TTLStateDisplay.module.css";

const TTLStateDisplay = ({ gameState, checkGameEnd, memberData, truths, lie }) => {
  const shuffleOptions = (options) => {
    return options.sort( ()=>Math.random()-0.5 );
 }
  const name = memberData["memberName"];
  const id = memberData["id"]

  const options = shuffleOptions([truths[0], truths[1], lie]);

  return <div>
    <a className={styles['name']} href={`/members/${id}`}> {name} </a>
    <div className={styles["lie-guesser"]}>
    {options.map((option)=>{
      const onClick = () => {checkGameEnd(option); };
      return <button
        className={styles['lie-button']}
        key={option}
        type="button"
        onClick={onClick}
      >
        {option}
      </button>
    })}
    </div>
  </div>
}

TTLStateDisplay.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  truths: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  lies: PropTypes.string
}

export default TTLStateDisplay;
