function caesarCipher(str, key) {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz')

  const encoded = Array.from(str).map(char => {
    const isUpperCase = checkUpperCase(char);
    const normalizedChar = char.toLowerCase();

    if (alphabet.indexOf(normalizedChar) === -1) {
      return char
    }

    const shiftedCharIndex = alphabet.indexOf(normalizedChar) + key;
    const shiftedChar = alphabet[mod26(shiftedCharIndex)]

    return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar
  })

  return encoded.join('')
}

function mod26(num) {
  return num % 26
}

function checkUpperCase(char) {
  return char === char.toUpperCase()
}

export default caesarCipher