/* function myFunction() {
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


}*/
//window.onload = CaesarCipher()
 function CaesarCipher() {
   if(document.getElementById('Encode').checked = "true"){
      var str = document.getElementById("help").value
      var virus = String(str).toLowerCase();
      var amk
     if(str===""){
       amk ="Please enter a value"
       document.getElementById("demo").style.color =  "red"
       document.getElementById('demo').innerHTML=amk}
       else if (str!=""){
         document.getElementById("demo").style.color =  "green"
     var result = '';
     var charcode = 0;

     for (var i = 0; i < str.length; i++) {
         charcode = (virus[i].charCodeAt()) + 2;
         result += String.fromCharCode(charcode);
     }
     document.getElementById("demo").innerHTML = result;
}}

if(document.getElementById("Decode").checked="true"){
   var str = document.getElementById("help").value
   var virus = String(str).toLowerCase();
   var amk
  if(str===""){
    amk ="Please enter a value"
    document.getElementById("demo").style.color =  "red"
    document.getElementById('demo').innerHTML=amk}
    else if (str!=""){
      document.getElementById("demo").style.color =  "green"
  var result = '';
  var charcode = 0;

  for (var i = 0; i < str.length; i++) {
      charcode = (virus[i].charCodeAt()) - 2;
      result += String.fromCharCode(charcode);
  }
  document.getElementById("demo").innerHTML = result;
}}}
/*function CaesarDecipher() {
  if(document.getElementById("Decode").checked="true"){
     var str = document.getElementById("help").value
     var virus = String(str).toLowerCase();
     var amk
    if(str===""){
      amk ="Please enter a value"
      document.getElementById("demo").style.color =  "red"
      document.getElementById('demo').innerHTML=amk}
      else if (str!=""){
        document.getElementById("demo").style.color =  "green"
    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (virus[i].charCodeAt()) - 2;
        result += String.fromCharCode(charcode);
    }
    document.getElementById("demo").innerHTML = result;
}}}*/
