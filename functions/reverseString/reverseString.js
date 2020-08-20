const reverseString = (s) => {
  const reversedString = Array.from(s).reverse().join('');
  return String(reversedString);
};

export default reverseString;