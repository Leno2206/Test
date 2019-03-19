
function myFunction() {
  var x = document.getElementById("help").value;
  var z =""
  if(x ===""){
    z="Please enter a value"
  }
  else if(x!=""){
    x=document.getElementById("help").value
    document.getElementById("deemo").disabled=true
  }
  document.getElementById("deemo").innerHTML = z;
  document.getElementById("demo").innerHTML = x;
  for(let i=0; i<x.length;i++){
    if(x.includes("+")){
      let split = x.split("+")
      console.log(split)
    }}
    for(let i=0; i<x.length;i++){
      if(x.includes("-")){
        let split = x.split("-")
        console.log(split)
      }}
      for(let i=0; i<x.length;i++){
        if(x.includes("*")){
          let split = x.split("*")
          console.log(split)
        }}
        for(let i=0; i<x.length;i++){
          if(x.includes("/")){
            let split = x.split("/")
            console.log(split)
          }
  }

window.onload = myFunction()

var input = document.getElementById("help");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("dada").click();
 }})
