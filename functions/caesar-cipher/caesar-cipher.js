const mod26 = (num) => num % 26;

const checkUpperCase = (char) => char === char.toUpperCase();

const caesarCipher = (str, key) => {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

  const encoded = Array.from(str).map((char) => {
    const isUpperCase = checkUpperCase(char);
    const normalizedChar = char.toLowerCase();

    if (alphabet.indexOf(normalizedChar) === -1) {
      return char;
    }

    const shiftedCharIndex = alphabet.indexOf(normalizedChar) + key;
    const shiftedChar = alphabet[mod26(shiftedCharIndex)];

    return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
  });

  return encoded.join('');
};


export default caesarCipher;