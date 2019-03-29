var RectX
var RectY
var Time = 10
var Dif = 0.1
var GameOver = 0
var hit = 0
var Class

function Restart() {
  Time = 10
  Dif = 0.1
  GameOver = 0
  Class = document.getElementById("Restart")
  Class.className = "Off"
  console.log(GameOver)
  RectX = random(0, window.innerWidth - 100)
  RectY = random(0, window.innerHeight - 100)
  points = 0
  document.getElementById("Points").value = points
}

function preload() {

}
var points = 0

function setup() {
  RectX = random(0, window.innerWidth - 100)
  RectY = random(0, window.innerHeight - 100)
  RectW = 99
  RectH = 99
  document.getElementById("Points").value = points
}
/*var x = random(0, 1000);
var y = random(0, 1000);
var w = 99
var h = 99*/


function draw() {
  createCanvas(window.innerWidth, window.innerHeight - 1)
  background(0)
  //console.log(Time)
  //console.log(Dif)
  if (GameOver == 0) {
    Time = Time - Dif
    rect(RectX, RectY, RectW, RectH)


  }
  if (mouseIsPressed && GameOver <= 0) {
    ellipse(mouseX, mouseY, 100)
  }
  //console.log(GameOver)
  //RectX+RectW=499
  if (RectX + RectW > mouseX - 50 && RectX < mouseX + 50 && RectY + RectH > mouseY - 50 && RectY < mouseY + 50 && mouseIsPressed) {
    RectX = random(0, window.innerWidth - 100)
    RectY = random(0, window.innerHeight - 100)
    points++
    document.getElementById("Points").value = points
    Dif = Dif * 1.01



    Time = 10

  }
  if (Time < 0) {
    //console.log(mouseX, RectW, RectX)
    GameOver = 1
  }
  if (GameOver == 1) {
    var Class = document.getElementById("Restart")
    Class.className = "On"
    GameOver = 2
    //console.log(Class.classList)
  }
  if (GameOver == 2) {
    RectX = -100
    RectY = -100
    Time = 100
    //console.log(Time)
  }
  console.log(Class.classList)

}