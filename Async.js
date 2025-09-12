setTimeout(function () {
  console.log("Asynchronous Callback");
}, 5000);

function x(y) {
  console.log("HigherOrder function");
  y();
}
x(function y() {
  console.log("Synchronous Callback");
});
