var monkey , monkey_running,ground,invinsibleGround;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var invinsibleground;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_3.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
 monkey = createSprite(30,335,40,10);
 monkey.addAnimation("moving",monkey_running)
 monkey.scale=0.1;
 
 
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-5;
  
  invinsibleground=createSprite(400,360,900,0.001);
  invinsibleground.visibility=false;
 
  score=0;
  
  
  FoodGroup= new Group();
  ObstaclesGroup= new Group();
  
  
}


function draw() {

  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
   SpawnFood();
  SpawnObstacle();
  
  
  monkey.collide(ground);
  monkey.bounce(ground);
  ObstaclesGroup.collide(invinsibleground);
  

    if(keyDown("space")){
       monkey.velocityY = -12;
      
       }
    
    monkey.velocityY = monkey.velocityY+1;
  
  
   
  if(ObstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    ObstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
     ObstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    
  }
  
 
  drawSprites();
  
   textSize(20);
  fill("black");
  text("score:"+score,280,30);
}

function SpawnFood(){
  if(frameCount%80===0){
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    
    banana.addImage(bananaImage);
    banana.scale=0.1;
    
    banana.velocityX = -4;
    banana.lifetime=300;
    monkey.depth =  banana.depth + 1;
    
    FoodGroup.add(banana);   
  } 
}
function SpawnObstacle(){
  if(frameCount%300===0){
    obstacle = createSprite(590,345,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.velocityX=-4;
    obstacle.lifetime=300;
    ObstaclesGroup.add(obstacle);
    
  }
  
  
}



