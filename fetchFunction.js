console.log("Start");

setTimeout(function cbT() {
  console.log("CB settimeout");
}, 5000);

fetch("https://github.com/saivarshithkothwali").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
