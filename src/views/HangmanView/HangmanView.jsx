import { useState } from "react";
import HangmanGame from "../../components/HangmanGame/HangmanGame";
import styles from "./HangmanView.module.css";

const HangmanView = () => {
  const [memberId, setMemberId] = useState(0)

  const onGameEnd = (hasWon) => {
    if(hasWon){
      // TODO: in general, don't use alert: this is just for illustrative purposes
      alert("You won!");
    } else {
      // TODO: in general, don't use alert: this is just for illustrative purposes
      alert("You lost!")
    }
  }

  return <main>
    <HangmanGame memberId={memberId} onGameEnd={onGameEnd}/>
  </main>
}

export default HangmanView;
