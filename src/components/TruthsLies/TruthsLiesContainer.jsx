import { Flex, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function TruthsLiesContainer({ text }) {
  return (
    <Flex flexDir={'column'} backgroundColor={'pink'} justify={'center'} align={'center'}>
      <Text>{text}</Text>
    </Flex>
  );
}

TruthsLiesContainer.propTypes = {
  text: PropTypes.string.isRequired,
};
