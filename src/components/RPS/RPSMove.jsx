import { Button, Flex } from "@chakra-ui/react";

import PropTypes from 'prop-types';

export default function RPSMoves({ value, handleInput }) {
    return (
        <Flex>
            <Button onClick={handleInput}>{value}</Button>
        </Flex>
    );
}

RPSMoves.propTypes = {
    value: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
};

RPSMoves.propTypes = {
    value: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
};

