function preload() {}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
  background(0)
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 100)
  }
}