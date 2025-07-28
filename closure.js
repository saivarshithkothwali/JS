function x() {
  var b = 10;
  function y() {
    var a = 7;
    function z() {
      console.log(a, b);
    }
    z();
  }
  y();
}
x();
