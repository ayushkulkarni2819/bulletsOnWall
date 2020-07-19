var bullet,wall;
var weight,speed;
var thickness,bulletsRight,wallsLeft;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(0,200,200,20);
  bullet . velocityX =speed;
  wall =createSprite(1200, 200, thickness, height/2);
  weight = random(30,52);
  speed = random(223,321);
  thickness=random(22,83);
}

function draw() {
  background("black");
 if (collided(bullet,wall)) {
   speed=0
   var damage = 0.5  *weight *speed *speed/(thickness *thickness *thickness);
 
  if (damage> 10) {
    wall . shapeColor=color(255,0,0);
  }
  
  if (damage< 10) {
    wall . shapeColor=color(0,255,0);
  }

}    
   
drawSprites();
collided();
  }

  function collided (any1,any2)
  {
   bulletsRight=any1.x+any1.width;
   wallsLeft=any2.x;
   if (bulletsRight>=wallsleft) {
     return true
   }
   return false
  }
  
  
  
