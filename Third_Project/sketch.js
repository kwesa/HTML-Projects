function setup() {
  createCanvas(700, 700, WEBGL);
}

let sphereX = 100;
let sphereY = 100;

function draw() {
  background(220);
  ellipse(sphereX, sphereY, 50, 50);
  mousePressed();
}

function mousePressed() {
  sphereX = mouseX;
  sphereY = mouseY;
}

