var x = ""
let vowels = ["a","e","i","o","u"]
let result= []
function myFunction() {
  x = document.getElementById("help").value;
  var z =""
  if(x ===""){
    z="Please enter a value"
  }
  else if(x!=""){
    x=document.getElementById("help").value
    document.getElementById("deemo").disabled=true
  }
  document.getElementById("deemo").innerHTML = z;
  document.getElementById("demo").innerHTML = result;
}

window.onload = myFunction()

var input = document.getElementById("help");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("dada").click();
}})

for (let i=0; i<x.length; x++){
  for(let o=0; o<vowels.length; o++){
  if(x[i]===vowels[o]){
    result.push(x[i]);
  }
}

if (x[i]==="e"||x[i]==="u"){
  result.push(x[i])
  }
}
console.log(result)
