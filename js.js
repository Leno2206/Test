window.onload = CaesarCipher()
 function CaesarCipher() {
   if(document.getElementById('Encode').checked){
      var str = document.getElementById("Input").value
      var str.lower = String(str).toLowerCase();
      var error
     if(str===""){
       error ="Please enter a value"
       document.getElementById("Message").style.color =  "red"
       document.getElementById('Message').innerHTML=error}
       else if (str!=""){
         document.getElementById("Message").style.color =  "green"
         document.getElementById("Input").value=""
     var result = '';
     var charcode = 0;

     for (var i = 0; i < str.length; i++) {
         charcode = (str.lower[i].charCodeAt()) + 2;
         result += String.fromCharCode(charcode);
     }
     document.getElementById("Message").innerHTML = result;
}}

if(document.getElementById("Decode").checked){
   var str = document.getElementById("Input").value
   var str.lower = String(str).toLowerCase();
   var error
  if(str===""){
    error ="Please enter a value"
    document.getElementById("Message").style.color =  "red"
    document.getElementById('Message').innerHTML=error}
    else if (str!=""){
      document.getElementById("Message").style.color =  "green"
  var result = '';
  var charcode = 0;

  for (var i = 0; i < str.length; i++) {
      charcode = (str.lower[i].charCodeAt()) - 2;
      result += String.fromCharCode(charcode);
  }
  document.getElementById("Message").innerHTML = result;
}}}
