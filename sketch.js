var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor("brown");

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor("grey");
}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.widht)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor(255);
    }
    
    if(deformation<180 && defromation>100)
    {
      car.shapeColor(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor(0,255,0);
    }
  }
  
  drawSprites();
}