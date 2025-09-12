function addEventListenerWithClosure() {
  let count = 0;

  document
    .getElementById("clickMe")
    .addEventListener("click", function clicked() {
      console.log("Button Clicked", ++count);
    });
}
