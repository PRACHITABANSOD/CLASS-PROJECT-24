var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, carAnimation2, logAnimation, playerAnimation , city1Animation , city2Animation;
var car , log , player ;
var school;
var bottomGrass1 , bottomGrass2 ;
var city1 , city2 ; 
var gameState = "PLAY" ;
var WIN ;
var END ; 

function preload()
{
 carAnimation=loadAnimation("images/car1.png" );
 carAnimation2=loadAnimation("images/car2.png"); 
 logAnimation=loadAnimation("images/log1.png");
 playerAnimation=loadAnimation("images/Player-03.png");
 city1Animation=loadAnimation("images/city1.png");
 city2Animation=loadAnimation("images/city2.png");

}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //Grasses where player can rest
 
    var bottomGrass1 = createSprite(683,250,width,100);
    var bottomGrass2 = createSprite(683,650,width,100);
    
    bottomGrass1.shapeColor = "green";
    bottomGrass2.shapeColor = "green";
  
     var road= createSprite(683,450,width,300,)
      road.shapeColor="black";

    //To create rows of car
   for(var i = 0; i < 10; i++){
     car = new Car(2);
     carGroup1.add(car.spt);

   }
  //To create rows of Logs
    for(var i = 0; i < 40; i++){
      log = new Log(-3);
      logGroup1.add(log.spt);
    }

   //create player
   player = new Player(width/2,height-75);
   
   city1 = createSprite (0,0,width/2, 200 );
   city1.addAnimation("city1 ", city1Animation );
   city1.scale = 0.5; 
 

   city2 = createSprite (0 , 900 , width/2, 200);
   city2.addAnimation("city2" , city2Animation );
   city2.scale = 1;

 }


function draw() {
  background("skyblue");
  //move the screen to location of player.
  translate(0,-player.spt.y+height-150);

  //Making the cars re-apper
  for(i=1;i<carGroup1.length;i++) {
    if(carGroup1[i].x>width)
    {
     carGroup1[i].x=0;
    }
    if(carGroup1[i].x<0)
    {
      carGroup1[i].x=width;
    }
  }

  //making the logs re-apper
  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0)
    {
    logGroup1[i].x=width;
    }
  }
 
if (carGroup1.isTouching(player.spt)) {
  player.spt.y = height-75 ;
  player.spt.x = width/2 ;  
}

if (city1.isTouching(player.spt)){
gameState = WIN ; 
}

if (gameState === WIN ){
stroke = "white";
fill = " white"
textSize (40);
text ("KUDOS" ,width/2,700);
carGroup.velocityX = 0 ;
logGroup.velocityX = 0 ;  
//player.spt.y = height-75 ;
//player.spt.x = width/2 ;  
}

  drawSprites();

}

function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
}
