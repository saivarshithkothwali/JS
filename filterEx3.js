const arr = [1, 2, 3, 4, 5, 6];
function isGreaterThan4(x) {
  return x > 4;
}
const output = arr.filter(isGreaterThan4);
console.log(output);

//Other ways of writing

const output1 = arr.filter(function isGreaterThan4(x) {
  return x > 4;
});
console.log(output);

const output2 = arr.filter((x) => {
  return x > 4;
});
console.log(output);

const output3 = arr.filter((x) => x > 4);
console.log(output);
