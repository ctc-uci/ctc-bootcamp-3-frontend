import { useState } from "react";
import HangmanGame from "../../components/HangmanGame/HangmanGame";
import styles from "./HangmanView.module.css";

const HangmanView = () => {
  const [memberId, setMemberId] = useState(0)

  const onGameEnd = (hasWon) => {

  }

  return <main>
    <HangmanGame memberId={memberId} onGameEnd={onGameEnd}/>
  </main>
}

export default HangmanView;
