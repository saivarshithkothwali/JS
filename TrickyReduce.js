const users = [
  { firstName: "Varshith", lastName: "Kothwali", age: "23" },
  { firstName: "Elon", lastName: "Musk", age: "50" },
  { firstName: "putin", lastName: "Vladimar", age: "75" },
  { firstName: "Donald", lastName: "Trump", age: "70" },
];

const output = users.reduce(function (acc, curr) {
  if (curr.age < 60) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
