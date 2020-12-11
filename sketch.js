
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x<450){
    ground.x = ground.width/2;
  }
  
  stroke("black");
  textSize(20);
  score = Math.round(frameCount/25);
  fill("black");
  text("Survival time " + score,100,50);
  fruitFunc();

  enemyFunc();
  
  drawSprites();
}

function fruitFunc(){
  if(frameCount%80 == 0){
    banana = createSprite(200,Math.round(random(120,200)), 20,20);
    banana.addImage(bananaImage);
    banana.scale =  0.05;
    banana.velocityX = -4;
    banana.lifetime = 50;
    foodGroup.add(banana);
  }
}
 
function enemyFunc(){
  if(frameCount%300 == 0){
    obstacle = createSprite(350,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.20;
    obstacle.velocityX = -6;
    obstacle.lifetime = 53;
    obstacleGroup.add(obstacle);
 }
}




