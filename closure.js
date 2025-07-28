function a() {
  var x = 10;
  function b() {
    console.log(x);
  }
  var x = 700;
  return b;
}
var c = a();
console.log(c);
c();
