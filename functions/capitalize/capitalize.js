function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase());
}

module.exports = capitalize;
