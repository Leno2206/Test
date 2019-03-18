function myFunction() {
  var x = document.getElementById("help").value;
  var z =""
  if(x ===""){
    z="Please enter a value"
  }
  else if(x!=""){
    x=document.getElementById("help").value
  }
  document.getElementById("demo").innerHTML = x;
  document.getElementById("deemo").disabled=true
