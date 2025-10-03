const arr = [1, 2, 3, 4, 5, 6];

function isEven(x) {
  return x % 2 === 0;
}

const output = arr.filter(isEven);

console.log(output);
