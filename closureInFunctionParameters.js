function outer(b) {
  let a = 10;
  function inner() {
    console.log(a, b);
  }

  inner();
}
let a = 10;
outer("hello");
