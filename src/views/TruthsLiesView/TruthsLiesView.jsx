import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AboutYouBackend } from '../../utils/utils';
import TruthsLiesContainer from '../../components/TruthsLies/TruthsLiesContainer';

export default function TruthsLiesView() {
  const [data, setData] = useState([]);
  const [chosen, setChosen] = useState('');
  const [lie, setLie] = useState('');
  console.log(chosen);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await AboutYouBackend.get(`/games/truthslies/${0}`);
      setData(data);
      console.log(data);
      setLie(data.lie);
    };

    fetchData();
  }, []);

  function handleInput(value) {
    setChosen(value);
  }
  console.log(handleInput)
  console.log(lie);
  return (
    <Flex flexDir={'column'} justify={'center'} align={'center'}>
      <Flex>Which is the lie?</Flex>
      <TruthsLiesContainer lie={data.lie} truths={data.truths} />
    </Flex>
  );
}
