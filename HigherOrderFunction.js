function x() {
  function y() {
    console.log("y function");
  }
  return y;
}
console.log(x());
