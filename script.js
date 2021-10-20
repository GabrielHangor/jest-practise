const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

const caesar = (string, shift) => {
  if (shift < 0) return caesar(string, shift + 26);

  let result = '';

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (letter.match(/[a-z]/i)) {
      let position = string.charCodeAt(i);

      if (position >= 65 && position <= 90) {
        letter = String.fromCharCode(((position - 65 + shift) % 26) + 65);
      } else if (position >= 97 && position <= 122) {
        letter = String.fromCharCode(((position - 97 + shift) % 26) + 97);
      }
    }

    result += letter;
  }

  return result;
};

const analyze = (arr) => {
  const average = Math.floor(
    arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  );

  const min = arr.sort((a, b) => a - b)[0];
  const max = arr.sort((a, b) => a - b)[arr.length - 1];

  return { average: average, min: min, max: max, length: arr.length };
};

module.exports = { capitalize, reverseString, calculator, caesar, analyze };
