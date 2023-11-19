import {Flex} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AboutYouBackend } from '../../utils/utils';
import RPSMoves from '../../components/RPS/RPSMove';

export default function RPS() {
  const [data, setData] = useState([]);
  console.log(data)
  const [move, setMove] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await AboutYouBackend.get(`/games/rps/${0}`);
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  function handleInput(value) {
    setMove(value);
    console.log(move);
  }

  const values = ['Rock', 'Paper', 'Scissor'];
  const valueList = values.map(item => [<RPSMoves key={item} value={item} handleInput={handleInput} />]);

  return (
    <Flex>
      <Flex>Please make your move:</Flex>
      {valueList}
    </Flex>
  );
}
