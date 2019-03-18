function myFunction() {
  var x = document.getElementById("help").value;
  console.log(x)

  document.getElementById("demo").innerHTML = x;}

  // Execute a function when the user releases a key on the keyboard
 x.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("demo").innerHTML = x;
  }
});