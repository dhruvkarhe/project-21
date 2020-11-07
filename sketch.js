var bullet,wall
var speed,weight,thickness


function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,50,10);
  wall=createSprite(1200,200,thickness,height/2)

  speed = random(223, 321)
  weight=random(32,52)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255); 
  
  bullet.velocityX=speed;
  
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deormation=0.5>180)
    {
      bullet.shapeColor=color(255,0,0);
     }
  
  if(deformation<180 && deformation >100)
  
  {
    bullet.shapeColor=color (230,230,0)     	
  }
  
  if(deformation<100)
  {
    bullet.shapeColor=color("red") 
  }
  
  }
  
  drawSprites();
}