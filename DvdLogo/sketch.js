var x;
var y;
var xspeed;
var yspeed;
var hit;

function preload() {
  dvd = loadImage("dvd1.jpg")
}

function amk() {
  x = 0
  y = 0
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  x = random(0, 800);
  y = random(0, 600);
  xspeed = 7.5;
  yspeed = 7.5;
}

function draw() {
  // put drawing code here
  background(0);
  image(dvd, x, y, dvd.width, dvd.height)
  //rect(x, y, 80, 60);
  x = x + xspeed;
  y = y + yspeed;
  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    tint(random(0, 255), random(0, 255), random(0, 255), 100)
    x = width - dvd.width
    background(0, 0, 0, 0)
    hit = 0
  } else if (x <= 0) {
    xspeed = -xspeed;
    tint(random(0, 255), random(0, 255), random(0, 255), 100)
    x = 0
    background(0, 0, 0, 0)
    hit = 0
  }
  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    tint(random(0, 255), random(0, 255), random(0, 255), 100)
    y = height - dvd.height
    background(0, 0, 0, 0)
    hit = 0
  } else if (y <= 0) {
    yspeed = -yspeed;
    tint(random(0, 255), random(0, 255), random(0, 255), 100)
    y = 0
    background(0, 0, 0, 0)
    hit = 0
  }









  if (x == 0 && y == 0) {
    console.log(x, y);
    alert("It hit the corner!")
    hit = 1
  }
  if (x == width - dvd.width && y == height - dvd.height) {
    console.log(x, y)
    alert("It hit the corner!")
    hit = 1
  }
  if (x == width - dvd.width && y == 0) {
    console.log(x, y)
    alert("It hit the corner!")
    hit = 1
  }
  if (x == 0 && y == height - dvd.height) {
    console.log(x, y)
    alert("It hit the corner!")
    hit = 1
  }
  if (hit == 1) {
    background(random(0, 255), random(0, 255), random(0, 255), 100)
  }
}