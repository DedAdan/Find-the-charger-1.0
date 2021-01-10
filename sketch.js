var apple
var ground
function setup() {
  createCanvas(1200,400);
  apple=createSprite(100, 350, 50, 50);
  ground=createSprite(90, 380, 2800, 20);
}
function draw() {
  background(255,255,255);
  if(keyDown("a")){
  apple.x=apple.x-5
  }  
  if(keyDown("d")){
    apple.x=apple.x+5
    }  
    if(keyWentDown("SPACE")&& apple.y >= 320){
      apple.velocityY= -10
   }  
   apple.velocityY = apple.velocityY + 0.8
   apple.collide(ground);
  drawSprites();
}