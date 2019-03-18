function myFunction() {
  var x = document.getElementById("help").value;
  console.log(x)

  document.getElementById("demo").innerHTML = x;}

var y = document.getElementById("help").value;

 y.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("demo").innerHTML = x;
  }
});
