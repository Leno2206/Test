var x = document.getElementById("help").value;
var z =""
function myFunction() {
  if(x ===""){
    z="Please enter a value"
  }
  else if(x!=""){
    x=document.getElementById("help").value
    document.getElementById("deemo").disabled=true
  }
  document.getElementById("deemo").innerHTML = z;
  document.getElementById("demo").innerHTML = x;
}
window.onload = myFunction()

var input = document.getElementById("help");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("dada").click();
 }})





 function CaesarCipher() {
     var str = document.getElementById("help")
     //virus = String(str).toLowerCase();

     var result = '';
     var charcode = 0;

     for (var i = 0; i < virus.length; i++) {
         charcode = (virus[i].charCodeAt()) + 2;
         result += String.fromCharCode(charcode);
     }
     document.getElementById("deeemo").innerHTML = result;

 }
