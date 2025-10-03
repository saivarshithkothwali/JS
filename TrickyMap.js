const users = [
  { firstName: "Varshith", lastName: "Kothwali", age: "23" },
  { firstName: "Elon", lastName: "Musk", age: "50" },
  { firstName: "putin", lastName: "Vladimar", age: "75" },
  { firstName: "Donald", lastName: "Trump", age: "70" },
];

const output = users.map((x) => x.firstName + " " + x.lastName);

console.log(output);
