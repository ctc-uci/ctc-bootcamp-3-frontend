import { useState, useEffect } from "react";
import HangmanGame from "../../components/HangmanGame/HangmanGame";
import { AboutYouBackend } from "../../utils/utils";
import styles from "./HangmanView.module.css";

const HangmanView = () => {
  const [memberId, setMemberId] = useState(0);
  const [memberName, setMemberName] = useState('');

  useEffect(() => {
    const randomizeId = async () => {
      try{
        const ids = await AboutYouBackend.get(`/members/ids`);
        const length = ids.data.length;

        const newRandomId = Math.floor(Math.random() * length);
        setMemberId(newRandomId);
        console.log(memberId);

        const name = await AboutYouBackend.get(`/members/${newRandomId}`);
        setMemberName(name.data[0].memberName);
        console.log(memberName);
        
      } catch(e) {
        console.log(e);
      }
    }
    randomizeId();
  }, []);

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
    <center><h1>Your Opponent: {memberName}</h1></center>
    <HangmanGame memberId={memberId} onGameEnd={onGameEnd}/>
  </main>
}

export default HangmanView;
