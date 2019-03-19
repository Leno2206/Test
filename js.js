
function myFunction() {
  var x = document.getElementById("help").value;
  var z =""
  if(x ===""){
    z="Please enter a value"
  }
  else if(x!=""){
    x=document.getElementById("help").value
    document.getElementById("deeemo").innerHTML=""
  }
  document.getElementById("deemo").innerHTML = z;
  document.getElementById("demo").innerHTML = x;
}
window.onload = myFunction()
window.onload = CaesarCipher()

var input = document.getElementById("help");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("dada").click();
 }})





 function CaesarCipher() {
     var str = document.getElementById("help").value
     virus = String(str).toLowerCase();
     if(str!=""){
       document.getElementById("demo").innerHTML=""
     }
     var result = '';
     var charcode = 0;

     for (var i = 0; i < str.length; i++) {
         charcode = (virus[i].charCodeAt()) + 2;
         result += String.fromCharCode(charcode);
     }
     document.getElementById("deeemo").innerHTML = result;

 }
