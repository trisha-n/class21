var fixedRect, movingRect , movingRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect1 = createSprite(400,200,50,50);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);  
movingRect1.y = World.mouseY;
movingRect1.x = World.mouseX;
 bounceOff(movingRect,fixedRect);
 if(isTouching(movingRect1,movingRect)){
    movingRect1.shapeColor = "red";
    movingRect.shapeColor = "red";
 }else{
   movingRect1.shapeColor = "green";
   movingRect.shapeColor = "green";
 }
  drawSprites();
}
