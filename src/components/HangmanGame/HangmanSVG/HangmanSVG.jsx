import styles from "./HangmanSVG.module.css";

const HangmanSVG = ({numMistakes}) => {
  return <div className={styles["hanged-man-container"]}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style={{"enable-background":"new 0 0 100 100"}} xmlSpace="preserve">
      <path d="M20 80 L80 80 Z"/>


      <path id="post" d="M 0 95 L 50 95 M 25 95 L 25 5 L 75 5 L 75 15" stroke="black" stroke-width="2" fill="none" />
      {(numMistakes >= 1) && <circle id="head" cx="75" cy="25" r="10" stroke="black" stroke-width="2" fill="none" />}
      {(numMistakes >= 2) && <path id="body" d="M 75 35 L 75 65" stroke="black" stroke-width="2" fill="none" />}
      {(numMistakes >= 3) && <path id="left-arm" d="M 75 40 L 65 50" stroke="black" stroke-width="2" fill="none" />}
      {(numMistakes >= 4) && <path id="right-arm" d="M 75 40 L 85 50" stroke="black" stroke-width="2" fill="none" />}
      {(numMistakes >= 5) && <path id="left-leg" d="M 75 65 L 65 75" stroke="black" stroke-width="2" fill="none" />}
      {(numMistakes >= 6) && <path id="right-leg" d="M 75 65 L 85 75" stroke="black" stroke-width="2" fill="none" />}
      {(numMistakes >= 7) && <>
        <path id="left-eye" d="M 70 20 L 74 25 M 70 25 L 74 20" stroke="black" stroke-width="1" fill="none" />
        <path id="right-eye" d="M 77 20 L 81 25 M 77 25 L 81 20" stroke="black" stroke-width="1" fill="none" />
        <path id="frown" d="M 70 30 Q75 25 80 30" stroke="black" stroke-width="1" fill="none" />
      </>}



    </svg>
  </div>
}

export default HangmanSVG;
