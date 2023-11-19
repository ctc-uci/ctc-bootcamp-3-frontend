import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AboutYouBackend } from "../../utils/utils";
import Loading from "../Loading/Loading";
import styles from "./TTLGame.module.css";
import TTLStateDisplay from "./TTLStateDisplay/TTLStateDisplay";


const TTLGame = ({ memberId, onGameEnd }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isGameRunning, setisGameRunning] = useState(false);
  const [gameState, setGameState] = useState([]);
  const [truths, setTruths] = useState([]);
  const [lie, setLie] = useState("");
  const [member, setMember] = useState({});
  console.log(memberId);

  useEffect(() => {
    // get the data from backend
    const getTTLData = async () => {
      console.log("getting data");
      setIsLoading(true);
      try {
        const {data} = await AboutYouBackend.get(`/games/truthslies/${memberId}`);
        const { truths, lie } = data;
        const memberData = await AboutYouBackend.get(`/members/${memberId}`)
        setTruths(truths);
        setLie(lie);
        setMember(memberData.data[0]);
        setIsLoading(false);
        setisGameRunning(true);
        console.log("got data");

        // Create component display??
      } catch(e) {
      console.log(e);
      }
    }
    getTTLData();
  }, [memberId]);

  const checkGameEnd = (selectedStatement) => {
    // check if user picked correct lie
    // end game stuff here
    if(selectedStatement == lie){
      onGameEnd(true);
      setisGameRunning(false);
    } else {
      onGameEnd(false);
      setisGameRunning(false);
    }
  }


  return<div className={styles['ttl-container']}>
      {
        (isLoading)?
          <Loading/>
        :
          <>
            <TTLStateDisplay gameState={gameState} checkGameEnd={checkGameEnd} memberData={member} truths={truths} lie={lie}/>
          </>
      }
    </div>
}

TTLGame.propTypes = {
  memberId: PropTypes.number.isRequired,
  onGameEnd: PropTypes.func
}

export default TTLGame;
