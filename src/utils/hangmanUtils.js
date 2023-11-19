
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const ALPHABET_SET = new Set(ALPHABET);

export const getHangmanStateFromPhrase = (phrase) => {
  const hangmanArray = [];
  const letterIndices = {};

  phrase = ("" + phrase).toUpperCase();
  for(let i = 0; i < phrase.length; i++){
    const char = phrase.charAt(i);
    if(ALPHABET_SET.has(char)){
      hangmanArray.push(null);
      if(char in letterIndices){
        letterIndices[char].push(i)
      }else {
        letterIndices[char] = [i];
      }
    } else {
      hangmanArray.push(char);
    }
  }

  return {hangmanArray, letterIndices};
}
