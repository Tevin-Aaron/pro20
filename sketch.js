var car1,wall;

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(100,50,30,30);
  wall = createSprite(1500,50,10,70);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}