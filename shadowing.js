function a() {
  console.log(y);
}
var y = function b() {
  console.log(x);
};

a();
