import { useState } from "react";
import HangmanGame from "../../components/HangmanGame/HangmanGame";
import styles from "./HangmanView.module.css";
import { AboutYouBackend } from "../../utils/utils";

const HangmanView = () => {
  const [memberId, setMemberId] = useState(0);
  const [opponentName, setOpponentName] = useState(false);
  const [image, setImage] = useState(false);

  const onGameEnd = (hasWon) => {
    alert(hasWon ? "You won!" : "You lost!");
  };


  const isValidImage = async (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true); // Valid image
      img.onerror = () => resolve(false); // Invalid image
      img.src = url;
    });
  };

  
  const changeOpponent = async () => {
    const randInt = Math.floor(Math.random() * 29) + 1;
    const members = await AboutYouBackend.get(`/members/${randInt}`);
    setMemberId(members.data[0].id);
    setOpponentName(members.data[0].memberName.toUpperCase());
    const isImageValid = await isValidImage(members.data[0].imageLink);
  const fallbackImage = "";
  
    setImage(isImageValid ? members.data[0].imageLink : fallbackImage); // Use valid image or fallback
    console.log(image);
  };

  return (
    <div className={styles.hangmanView} style={{
      ...(image && { backgroundImage: `url("${image}")` }), // Only set backgroundImage if valid
      backgroundColor: "var(--default-bg-color)", // Default background color
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <header className={styles.header}>
      <h1 className={styles.title} style={{backgroundColor:"white", borderRadius: "20px", padding: "10px"}}>
        {opponentName ? (
          <>
            Playing Against:<br /><br />{opponentName}
          </>
        ) : (
          "Welcome to Hangman!"
        )}
      </h1>

      </header>
      <div className={styles.buttonContainer}>
        <button className={styles.primaryButton} onClick={changeOpponent}>
          Play Against Someone
        </button>
        <button className={styles.secondaryButton} onClick={() => window.location.reload()}>
          Play Alone
        </button>
      </div>
      <main className={styles.main}>
        <HangmanGame memberId={memberId} onGameEnd={onGameEnd} />
      </main>
    </div>
  );
};

export default HangmanView;
