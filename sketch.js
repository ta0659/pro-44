
var bgImg, block, box;
var b1Img, b2Img, b3Img, b4Img, b5Img;
var b1, b2, b3, b4, b5;
var wall1,wall2,wall3,wall4;
var fish1, fish2, f1Img, f2Img;
var boy, bl;
var left, right;
var fishingScore=0;
var s1, s1Img;
var h1Img, h2Img, h3Img;
var candy1, candy2, mush1, mush2;
var house, houseImg;
var gameover, gameoverImg;
var lvUp, lvUpImg;

var END =0;
var PLAY =1;
var LEVELUP = 2;
var gameState = PLAY;

function preload(){
  bgImg = loadImage("bg.png");

  b1Img = loadImage("w1.png");
  b2Img = loadImage("w2.png");
  b3Img = loadImage("w7.png");
  b4Img = loadImage("w6.png");
  b5Img = loadImage("w5.png");

  f1Img = loadImage("f1.png");
  f2Img = loadImage("f2.png");
  s1Img=loadImage("f1.png");
  bl=loadImage("b2.png");

  h1Img=loadImage("h.png");
  h2Img=loadImage("h.png");
  h3Img=loadImage("h.png");

 candyImg=loadImage("c1.png");
 mushImg=loadImage("m1.png");

 houseImg=loadImage("h1.png");
 gameoverImg=loadImage("textGameOver.png")

 lvUpImg=loadImage("lu.jpg");
}

function setup() {
  createCanvas(700,500);

  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,35, 20, 20);
    block.shapeColor = color(83,255,189);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,60, 20, 20);
    box.shapeColor = color(83,255,189);
  }

  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,85, 20, 20);
    block.shapeColor = color(65,255,212);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,110, 20, 20);
    box.shapeColor = color(65,255,212);
  }
  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,135, 20, 20);
    block.shapeColor = color(75,255,233);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,160, 20, 20);
    box.shapeColor = color(75,255,233);
  }
    
  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,185, 20, 20);
    block.shapeColor = color(73,255,233);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,210, 20, 20);
    box.shapeColor = color(73,255,233);
  }

  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,235, 20, 20);
    block.shapeColor = color(69,212,255);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,260, 20, 20);
    box.shapeColor = color(69,212,255);
  }
  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,285, 20, 20);
    block.shapeColor = color(62,189,255);
  
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,310, 20, 20);
    box.shapeColor = color(62,189,255);
  }

  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,335, 20, 20);
    block.shapeColor = color(53,166,255);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,360, 20, 20);
    box.shapeColor = color(53,166,255);
  }
  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,385, 20, 20);
    block.shapeColor = color(42,142,255);
  
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,410, 20, 20);
    box.shapeColor = color(30,116,255);
  }

  for (var i = 12; i < 700; i=i+25) {
    var block = createSprite(i,435, 20, 20);
    block.shapeColor = color(15,91,255);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,460, 20, 20);
    box.shapeColor = color(0,64,255);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i, 10, 20, 20);
    box.shapeColor = color(104,255,188);
  }

  for (var i = 12; i < 700; i=i+25) {
    var box = createSprite(i,490, 20, 20);
    box.shapeColor = color("blue");
  }
  
  wall1=createSprite(1,250,2,500);
  wall2=createSprite(699,250,2,500);
  wall3=createSprite(350,1,700,2);
  wall4=createSprite(350,499,700,2);

  b1=createSprite(100,250,10,10);
  b1.addImage(b1Img);
  b1.scale=0.1;
  b1.velocityX = 3;
  b1.velocityY = -3;

  b2=createSprite(150,270,10,10);
  b2.addImage(b2Img);
  b2.scale=0.1;
  b2.velocityX = -3;
  b2.velocityY = -3;

  b3=createSprite(190,290,10,10);
  b3.addImage(b3Img);
  b3.scale=0.1;
  b3.velocityX = -3;
  b3.velocityY = 3;

  b4=createSprite(240,300,10,10);
  b4.addImage(b4Img);
  b4.scale=0.1;
  b4.velocityX = 3;
  b4.velocityY = 3;

  b5=createSprite(590,350,10,10);
  b5.addImage(b5Img);
  b5.scale=0.1;
  b5.velocityX = 3;
  b5.velocityY = -3;

  fish1=createSprite(100,200,10,10);
  fish2=createSprite(190,300,10,10);
  fish3=createSprite(300,350,10,10);
  fish4=createSprite(80,390,10,10);
  fish5=createSprite(550,450,10,10);
  fish6=createSprite(50,300,10,10);
  fish7=createSprite(600,400,10,10);
  fish8=createSprite(190,430,10,10);
  fish9=createSprite(490,200,10,10);
  fish10=createSprite(680,300,10,10);
  fish11=createSprite(50,80,10,10);
  fish12=createSprite(400,50,10,10);
  fish13=createSprite(650,200,10,10);

  fish1.addImage(f1Img);
  fish1.scale=0.1;

  fish2.addImage(f2Img);
  fish2.scale=0.1;

  fish3.addImage(f1Img);
  fish3.scale=0.1;

  fish4.addImage(f2Img);
  fish4.scale=0.1;

  fish5.addImage(f1Img);
  fish5.scale=0.1;

  fish6.addImage(f2Img);
  fish6.scale=0.1;

  fish7.addImage(f1Img);
  fish7.scale=0.1;

  fish8.addImage(f2Img);
  fish8.scale=0.1;

  fish9.addImage(f1Img);
  fish9.scale=0.1;

  fish10.addImage(f2Img);
  fish10.scale=0.1;

  fish11.addImage(f1Img);
  fish11.scale=0.1;

  fish12.addImage(f2Img);
  fish12.scale=0.1;

  fish13.addImage(f1Img);
  fish13.scale=0.1;

  mush1=createSprite(450,350,10,10);
  candy1=createSprite(100,130,10,10);

  mush1.addImage(mushImg);
  mush1.scale=0.1;

  candy1.addImage(candyImg);
  candy1.scale=0.1;

  boy=createSprite(10,50,10,10);
  boy.addImage(bl);
  boy.scale=0.2;

  s1=createSprite(600,50,10,10);
  s1.addImage(s1Img);
  s1.scale=0.1;

  w1=createSprite(630,35,100,3);
  w2=createSprite(630,65,100,3);
  w3=createSprite(580,50,3,33);
  w4=createSprite(680,50,3,33);

  h1=createSprite(600,20,10,10);
  h1.addImage(h1Img);
  h1.scale=0.05;

  h2=createSprite(625,20,10,10);
  h2.addImage(h2Img);
  h2.scale=0.05;

  h3=createSprite(650,20,10,10);
  h3.addImage(h3Img);
  h3.scale=0.05;

  house=createSprite(545,45,50,50);
  house.addImage(houseImg);
  house.scale=0.2;

  gameover=createSprite(350,250,10,10);
  gameover.addImage(gameoverImg);

  lvUp=createSprite(350,250,700,500);
  lvUp.addImage(lvUpImg);
  lvUp.scale=0.2;

  fishingScore=0;

}

function draw() {
  background(bgImg);

  textSize(20);
  fill(0)
  text(":",+ fishingScore, 600,55);

  if(gameState===PLAY){

  gameover.visible=false;
  lvUp.visible=false;

  boy.bounceOff(wall1);
  boy.bounceOff(wall2);
  boy.bounceOff(wall3);
  boy.bounceOff(wall4);

  b1.bounceOff(wall1);
  b2.bounceOff(wall1);
  b3.bounceOff(wall1);
  b4.bounceOff(wall1);
  b5.bounceOff(wall1);

  b1.bounceOff(wall2);
  b2.bounceOff(wall2);
  b3.bounceOff(wall2);
  b4.bounceOff(wall2);
  b5.bounceOff(wall2);

  b1.bounceOff(wall3);
  b2.bounceOff(wall3);
  b3.bounceOff(wall3);
  b4.bounceOff(wall3);
  b5.bounceOff(wall3);

  b1.bounceOff(wall4);
  b2.bounceOff(wall4);
  b3.bounceOff(wall4);
  b4.bounceOff(wall4);
  b5.bounceOff(wall4);

  b1.bounce(b2);
  b1.bounce(b3);
  b1.bounce(b4);
  b1.bounce(b5);

  b2.bounce(b3);
  b2.bounce(b4);
  b2.bounce(b5);

  b3.bounce(b4);
  b3.bounce(b5);

  b4.bounce(b5);

  if(keyDown("up") ) {
    boy.velocityX = 0;
    boy.velocityY = -2;
  }

  if(keyDown("down") ) {
    boy.velocityX = 0;
    boy.velocityY = 2;
  }

  if(keyDown("left") ) {
    boy.velocityX = -2;
    boy.velocityY = 0;
  }

  if(keyDown("right") ) {
    boy.velocityX=2;
    boy.velocityY=0;
  }

  if(boy.isTouching(fish1)){
    fish1.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish2)){
    fish2.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish3)){
    fish3.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish4)){
    fish4.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish5)){
    fish5.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish6)){
    fish6.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish7)){
    fish7.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish8)){
    fish8.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish9)){
    fish9.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish10)){
    fish10.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish11)){
    fish11.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish12)){
    fish12.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(fish13)){
    fish13.destroy();
    fishingScore = fishingScore + 2;
  }

  if(boy.isTouching(candy1)){

    candy1.destroy();
  fishingScore= fishingScore+10;
  }

  if(boy.isTouching(mush1)){
   fishingScore= fishingScore+5;
}

if(boy.isTouching(b1) || boy.isTouching(b2) ){
  h1.destroy();
}

if(boy.isTouching(b3) || boy.isTouching(b4) ){
  h2.destroy();
}

if (boy.isTouching(house)){
  lvUp.visible=true;
}

if(boy.isTouching(b5) ){
  h3.destroy();
  gameState=END;
}
}

if(gameState===END){
  gameover.visible=true;
}
 
  drawSprites();
}