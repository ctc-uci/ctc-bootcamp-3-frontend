import { useState } from "react";
import TTLGame from "../../components/TTLGame/TTLGame";

const TTL = () => {
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
    <TTLGame memberId={memberId} onGameEnd={onGameEnd}/>
  </main>
}

export default TTL;
