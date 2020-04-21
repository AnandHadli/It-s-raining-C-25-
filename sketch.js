var rain ;


function setup() {
  var canvas = createCanvas(1200,400);

}

function draw() {
  background(0);  
  drop();
  drawSprites();
}

function drop() {
rain = createSprite(200,-10,random(0,3),random(30,40));
rain.x = Math.round(random(0,1200));
rain.velocityY = random(5,25) ;
rain.shapeColor = "cyan";
}