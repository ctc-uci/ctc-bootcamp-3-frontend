import React, { useEffect, useState } from 'react';
import styles from './RPS.module.css';
import Loading from '../../components/Loading/Loading';
import { AboutYouBackend } from '../../utils/utils';
import { determineRPSWinner } from '../../utils/rpsUtils';

const RPS = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [playAgainstId, setPlayAgainstId] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async selectedMove => {
    const getMemberMove = async () => {
      try {
        const { data } = await AboutYouBackend.get(`/games/rps/${playAgainstId}`);
        const { move: otherSelectedMove } = data;

        let result = determineRPSWinner(selectedMove, otherSelectedMove);

        if (result) {
          console.log('i won');
        } else {
          console.log('they won');
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (playAgainstId && selectedMove) {
      getMemberMove();
    } else {
      console.log('form is invalid!');
    }
  };

  useEffect(() => {
    const getMemberList = async () => {
      try {
        const { data } = await AboutYouBackend.get(`/members`);
        setMembers(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getMemberList();
  }, []);

  return (
    <div className={styles['rps-container']}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles['rps-select']}>
          <div className={styles['player-select']}>
            {/* code for dropdown */}
            <label>Choose a Player:</label>
            {members.map(member => {
              return (
                <label key={member.memberId}>
                  {member.memberName}
                  <input
                    type="radio"
                    key={member.id}
                    value={member.memberName}
                    onClick={() => {
                      setPlayAgainstId(member.id);
                    }}
                  />
                </label>
              );
            })}
          </div>
          <div className={styles['move-select']}>
            <button type="button" onClick={handleSubmit('Rock')}>
              Rock
            </button>
            <button type="button" onClick={handleSubmit('Paper')}>
              Paper
            </button>
            <button type="button" onClick={handleSubmit('Scissors')}>
              Scissors
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RPS;
