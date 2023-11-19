export const determineRPSWinner = (move1, move2) => {
    if (move1 === 'Rock' && move2 === 'Scissors') {
        return true
    } else if (move1 === 'Scissors' && move2 === 'Paper') {
        return true
    } else if (move1 === 'Paper' && move2 === 'Rock')  {
        return true
    }
    return false;
}