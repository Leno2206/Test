function myFunction() {
  var x = document.getElementById("help").value;
  var z =""
  if(x ===""){
    z="Please enter a value"
    document.getElementById("demo").innerHTML = z;
  }
  else if(x!=""){
    x=document.getElementById("help").value
    document.getElementById("demo").innerHTML = x;
  }


}
window.onload = myFunction()

var input = document.getElementById("help");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("dada").click();
 }})





 function CaesarCipher() {
      var str = document.getElementById("help").value
      var virus = String(str).toLowerCase();
      var amk
     if(str===""){
       amk ="Please enter a value"
       document.getElementById('demo').innerHTML=amk}
       else if (str!=""){

     var result = '';
     var charcode = 0;

     for (var i = 0; i < str.length; i++) {
         charcode = (virus[i].charCodeAt()) + 2;
         result += String.fromCharCode(charcode);
     }
     document.getElementById("demo").innerHTML = result;
}}
