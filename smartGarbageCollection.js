function a() {
  var x = 10;
  var y = 20;
  function b() {
    console.log(x);
  }
  return b;
}
var c = a();

c();
