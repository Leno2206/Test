function preload() {}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
  background(0)
  if (mousePressed()) {
    ellipse(mouseX, mouseY, 16)
  }
}