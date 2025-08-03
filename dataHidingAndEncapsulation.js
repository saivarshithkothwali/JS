function counter() {
  var count = 0;
  function incrementCount() {
    count++;
    console.log(count);
  }
  return incrementCount;
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();
