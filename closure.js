function x() {
  var a = 7;

  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
//1000's of lines of code ........
z();
