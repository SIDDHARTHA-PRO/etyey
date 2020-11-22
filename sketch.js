var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 80, 50);

  wall=createSprite(900, 200, thickness, height);
wall.shapeColor=(20,20,20)
  speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)
bullet.velocityX=speed;
}
console.log(wall.x-car.x)
function draw() {
  background("blue"); 
  
  if(hasCollided(bullet,wall)){

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10){
      wall.shapeColor="green" 
    }
    if(damage>10){
      wall.shapeColor="red" 
    }
  }


  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lbullet.x
if(bulletRightEdge>=wallLeftEdge)
{
  
  return true
  
}else{
  return false
}



}

