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





 function CaesarCipher(str, num) {
     // you can comment this line
     str = str.toLowerCase();

     var result = '';
     var charcode = 0;
 
     for (var i = 0; i < str.length; i++) {
         charcode = (str[i].charCodeAt()) + num;
         result += String.fromCharCode(charcode);
     }
     return result;

 }
 console.log(CaesarCipher(x, 2));
