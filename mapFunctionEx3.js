const arr = [5, 1, 3, 2, 6];
function binary(x) {
  return x.toString(2);
}
const output = arr.map(binary);
console.log(output);

//Other ways of writing
const output1 = arr.map(function binary(x) {
  return x.toString(2);
});
console.log(output1);

const output2 = arr.map((x) => {
  return x.toString(2);
});
console.log(output2);

const output3 = arr.map((x) => x.toString(2));
console.log(output3);

const output4 = arr.map((x) => {
  x = x * 2;
  return x * 3;
});
console.log(output4);
