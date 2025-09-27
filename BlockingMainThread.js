console.log("Start");
setTimeout(function cb() {
  console.log("setTimeout callback");
}, 5000);

let startTime = new Date().getTime();
let endTime = startTime;

while (startTime < endTime + 10000) {
  startTime = new Date().getTime();
}
console.log("While ends after 10 seconds");

let startTime1 = new Date().getTime();
let endTime1 = startTime;

while (startTime1 < endTime1 + 10000) {
  startTime1 = new Date().getTime();
}
console.log("While1 ends after 10 seconds");
