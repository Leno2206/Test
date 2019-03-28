var x;
var y;
var xspeed;
var yspeed;
var hit;
var hits = 0;
var dvd;
var theta = 0.0
var wall = false

function preload() {
  dvd = loadImage("Ball.png")
}

function amk() {
  x = 0
  y = 0
  xspeed = -1
  yspeed = -1
}

function setup() {
  x = random(0, 800);
  y = random(0, 600);
  xspeed = 7.5;
  yspeed = 7.5;
  //imageMode(CENTER)
}

function draw() {
  document.getElementById("test12").value = hits
  createCanvas(window.innerWidth, window.innerHeight)
  background(0);
  image(dvd, x, y, dvd.width / 2, dvd.height / 2)
  //rect(x, y, 80, 60);
  x = x + xspeed;
  y = y + yspeed;
  if (wall) {
    theta += PI / 2
  }
  rotate(theta)
  if (x + dvd.width / 2 >= width) {
    xspeed = -xspeed;
    tint(random(0, 256), random(0, 256), random(0, 256), 100)
    x = width - dvd.width / 2
    background(0, 0, 0, 0)
    hit = 0
    hits++
    wall = true
  } else if (x <= 0) {
    xspeed = -xspeed;
    tint(random(0, 256), random(0, 256), random(0, 256), 100)
    x = 0
    background(0, 0, 0, 0)
    hit = 0
    hits++
    wall = true
  }
  if (y + dvd.height / 2 >= height) {
    yspeed = -yspeed;
    tint(random(0, 256), random(0, 256), random(0, 256), 100)
    y = height - dvd.height / 2
    background(0, 0, 0, 0)
    hit = 0
    hits++
    wall = true
  } else if (y <= 0) {
    yspeed = -yspeed;
    tint(random(0, 256), random(0, 256), random(0, 256), 100)
    y = 0
    background(0, 0, 0, 0)
    hit = 0
    hits++
    wall = true
  }

  if (hits % 100 === 0 && hits != 0) {
    hit = 0
    background(random(0, 256), random(0, 256), random(0, 256), 100)

  }








  if (x == 0 && y == 0) {
    console.log(x, y);

    hit = 1
  }
  if (x == width - dvd.width && y == height - dvd.height) {
    console.log(x, y)

    hit = 1
  }
  if (x == width - dvd.width && y == 0) {
    console.log(x, y)

    hit = 1
  }
  if (x == 0 && y == height - dvd.height) {
    console.log(x, y)

    hit = 1
  }
  if (hit == 1) {
    background(random(0, 256), random(0, 256), random(0, 256), 100)
    xspeed = 7.5
    yspeed = 7.5

  }
}