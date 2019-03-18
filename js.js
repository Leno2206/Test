function myFunction() {
  var x = document.getElementById("help").value;
  if(x ===""){
    x="Please enter a value"
  }
  else if(x!=""){
    x=document.getElementById("help").value
  }

  document.getElementById("demo").innerHTML = x;}
