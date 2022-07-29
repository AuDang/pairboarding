/* 
Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet. 
Assume lowercase and no punctuation. Preserve spaces.
*/

function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let encoded = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      encoded += ' ';
      continue;
    }

    const offset = (alphabet.indexOf(str[i]) + shift) % 26;
    encoded += alphabet[offset];
  }

  return encoded;
}

console.log(caesarCipher('hello its me', 4))