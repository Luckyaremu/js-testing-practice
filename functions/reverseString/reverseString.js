function reverseString(s) {
  // let reversedString = Array.from(s).reverse()
  let reversedString = Array.from(s).reverse().join('')
  return String(reversedString)
}

export default reverseString