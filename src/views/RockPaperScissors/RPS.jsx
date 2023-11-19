import { useEffect, useState } from 'react';
import styles from './RPS.module.css';
import Loading from '../../components/Loading/Loading';
import { AboutYouBackend } from '../../utils/utils';
import { determineRPSWinner } from '../../utils/rpsUtils';

const RPS = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [playAgainstId, setPlayAgainstId] = useState(null);
  const [playAgainst, setPlayAgainst] = useState('');

  const handleSubmit = async selectedMove => {
    const getMemberMove = async () => {
      try {
        const { data } = await AboutYouBackend.get(`/games/rps/${playAgainstId}`);
        const { move: otherSelectedMove } = data;

        let result = determineRPSWinner(selectedMove, otherSelectedMove);

        if (result == 1) {
          alert('i won');
        } else {
          result = determineRPSWinner(otherSelectedMove, selectedMove);
          if (result == 1) {
            alert('they won');
          } else {
            alert('tie');
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (playAgainstId && selectedMove) {
      getMemberMove();
    } else {
      alert('form is invalid!');
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
                <button
                  key={member.memberId}
                  onClick={() => {
                    setPlayAgainst(member.memberName);
                    setPlayAgainstId(member.id);
                  }}
                >
                  {member.memberName}
                </button>
              );
            })}

            <p>Selected: {playAgainst}</p>
          </div>
          <div className={styles['move-select']}>
            <button
              type="button"
              onClick={() => {
                handleSubmit('Rock');
              }}
            >
              Rock
            </button>
            <button
              type="button"
              onClick={() => {
                handleSubmit('Paper');
              }}
            >
              Paper
            </button>
            <button
              type="button"
              onClick={() => {
                handleSubmit('Scissors');
              }}
            >
              Scissors
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RPS;
