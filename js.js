window.onload = CaesarCipher()

function CaesarCipher() {
  if (document.getElementById('Encode').checked) {
    var str = document.getElementById("Input").value
    var str_lower = String(str).toLowerCase();
    var error
    RadioEncode()
    if (str === "") {
      error = "Please enter a value..."
      document.getElementById("Message").style.color = "red"
      document.getElementById('Message').value = error
    } else if (str != "") {
      document.getElementById("Message").style.color = "green"
      document.getElementById("Input").value = ""
      var result = '';
      var charcode = 0;

      for (var i = 0; i < str.length; i++) {
        charcode = (str_lower[i].charCodeAt()) + 2;
        result += String.fromCharCode(charcode);
      }
      document.getElementById("Message").value = result;
    }
  }

  if (document.getElementById("Decode").checked) {
    var str = document.getElementById("Input").value
    var str_lower = String(str).toLowerCase();
    var error
    RadioDecode()
    if (str === "") {
      error = "Please enter a value..."
      document.getElementById("Message").style.color = "red"
      document.getElementById('Message').value = error
    } else if (str != "") {
      document.getElementById("Message").style.color = "green"
      document.getElementById("Input").value = ""
      var result = '';
      var charcode = 0;

      for (var i = 0; i < str.length; i++) {
        charcode = (str_lower[i].charCodeAt()) - 2;
        result += String.fromCharCode(charcode);
      }
      document.getElementById("Message").value = result;
    }
  }
}

function ShowPassword() {
  var InputPass = document.getElementById("Input");
  if (InputPass.type === "password") {
    InputPass.type = "text";
  } else {
    InputPass.type = "password";
  }
}


var Enter = document.getElementById("Input");
Enter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});



function RadioEncode() {
  document.getElementById("submit").innerHTML =
    "ENCODE!"
}

function RadioDecode() {
  document.getElementById("submit").innerHTML =
    "DECODE!"
}


function Roll() {
  document.getElementById("Ball").className += " BallAnim"
}