import reverseString from './reverseString'

test('Single, all lowercase word', () => {
  expect(reverseString('pretty')).toBe('ytterp')
})

test('Multiple words, all lower case', () => {
  expect(reverseString('pretty woman')).toBe('namow ytterp')
})

test('Multiple words, upper and lower case', () => {
  expect(reverseString('HeLLo WorlD')).toBe('DlroW oLLeH')
})

test('Pontuation', () => {
  expect(reverseString('Hello!')).toBe('!olleH')
})