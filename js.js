window.onload = CaesarCipher()
 function CaesarCipher() {
   if(document.getElementById('Encode').checked){
      var str = document.getElementById("Input").value
      var str_lower = String(str).toLowerCase();
      var error
     if(str===""){
       error ="Please enter a value"
       document.getElementById("Message").style.color =  "red"
       document.getElementById('Message').value=error}
       else if (str!=""){
         document.getElementById("Message").style.color =  "green"
         document.getElementById("Input").value=""
     var result = '';
     var charcode = 0;

     for (var i = 0; i < str.length; i++) {
         charcode = (str_lower[i].charCodeAt()) + 2;
         result += String.fromCharCode(charcode);
     }
     document.getElementById("Message").value = result;
}}

if(document.getElementById("Decode").checked){
   var str = document.getElementById("Input").value
   var str_lower = String(str).toLowerCase();
   var error
  if(str===""){
    error ="Please enter a value"
    document.getElementById("Message").style.color =  "red"
    document.getElementById('Message').value=error}
    else if (str!=""){
      document.getElementById("Message").style.color =  "green"
      document.getElementById("Input").value=""
  var result = '';
  var charcode = 0;

  for (var i = 0; i < str.length; i++) {
      charcode = (str_lower[i].charCodeAt()) - 2;
      result += String.fromCharCode(charcode);
  }
  document.getElementById("Message").value = result;
}}}
