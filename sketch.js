
gameState = 0

function preload(){
cubertImg = loadImage("images/cubert.png")
squareImg = loadImage("images/Square.png")
spikeImg = loadImage("images/spike.png")
startButtonImg = loadImage("images/play button.png")
}
function setup(){
    createCanvas(displayWidth-4,displayHeight-83)

    cubert = createSprite(displayWidth%2+70,displayHeight%2+400)
    cubert.addImage(cubertImg)
    cubert.scale = 0.2

    startButton = createSprite(700,420,100,100)
    startButton.addImage(startButtonImg)
    startButton.scale = 1.0


   // square = createSprite(displayWidth-250,displayHeight+200)
    //square.addImage(squareImg)



      //worm 1
      spike1 = createSprite(200,100,10,10)
      spike1.velocityX = 10
      spike1.velocityY = 10
      spike1.scale = 0.4
      spike1.addImage(spikeImg)
  
      spike2 = createSprite(250,150,10,10)
      spike2.velocityX = 10
      spike2.velocityY = 10
      spike2.scale = 0.4
      spike2.addImage(spikeImg)
  
      spike3 = createSprite(300,200,10,10)
      spike3.velocityX = 10
      spike3.velocityY = 10
      spike3.scale = 0.4
      spike3.addImage(spikeImg)
  
      spike4 = createSprite(350,250,10,10)
      spike4.velocityX = 10
      spike4.velocityY = 10
      spike4.scale = 0.4
      spike4.addImage(spikeImg)
  
      spike5 = createSprite(400,300,10,10)
      spike5.velocityX = 10
      spike5.velocityY = 10
      spike5.scale = 0.4
      spike5.addImage(spikeImg)
  
      //worm 2
      spike6 = createSprite(600,100,10,10)
      spike6.velocityX = -10
      spike6.velocityY = -10
      spike6.scale = 0.4
      spike6.addImage(spikeImg)
  
      spike7 = createSprite(650,150,10,10)
      spike7.velocityX = -10
      spike7.velocityY = -10
      spike7.scale = 0.4
      spike7.addImage(spikeImg)
  
      spike8 = createSprite(700,200,10,10)
      spike8.velocityX = -10
      spike8.velocityY = -10
      spike8.scale = 0.4
      spike8.addImage(spikeImg)
  
      spike9 = createSprite(750,250,10,10)
      spike9.velocityX = -10
      spike9.velocityY = -10
      spike9.scale = 0.4
      spike9.addImage(spikeImg)
  
      spike10 = createSprite(800,300,10,10)
      spike10.velocityX = -10
      spike10.velocityY = -10
      spike10.scale = 0.4
      spike10.addImage(spikeImg)
  
      //worm 3
      spike11 = createSprite(500,600,10,10)
      spike11.velocityX = 10
      spike11.velocityY = -10
      spike11.scale = 0.4
      spike11.addImage(spikeImg)
  
      spike12 = createSprite(550,550,10,10)
      spike12.velocityX = 10
      spike12.velocityY = -10
      spike12.scale = 0.4
      spike12.addImage(spikeImg)
  
      spike13 = createSprite(600,500,10,10)
      spike13.velocityX = 10
      spike13.velocityY = -10
      spike13.scale = 0.4
      spike13.addImage(spikeImg)
  
      spike14 = createSprite(650,450,10,10)
      spike14.velocityX = 10
      spike14.velocityY = -10
      spike14.scale = 0.4
      spike14.addImage(spikeImg)
  
      spike15 = createSprite(700,400,10,10)
      spike15.velocityX = 10
      spike15.velocityY = -10
      spike15.scale = 0.4
      spike15.addImage(spikeImg)

      edges = createEdgeSprites()

    



}

function draw() {
    background("Black")
    edges = createEdgeSprites()

    if(gameState === 0){
//worm 1
spike1.bounceOff(edges[0]);
spike1.bounceOff(edges[1]);
spike1.bounceOff(edges[2]);
spike1.bounceOff(edges[3]);
    
    if(mousePressedOver(startButton)){
      gameState = 1
      startButton.visible = false
    }
  }
    else if (gameState === 1){
    
    

    laser()

    if (keyDown("left")) {
      cubert.x = cubert.x-10;    
}
    if (keyDown("right")) {
        cubert.x = cubert.x+10;
}
    if (keyDown("up")) {
        cubert.y = cubert.y-10;
}
    if (keyDown("down")) {
        cubert.y = cubert.y+10;
}
//cubert
cubert.bounceOff(edges[0]);
cubert.bounceOff(edges[1]);
cubert.bounceOff(edges[2]);
cubert.bounceOff(edges[3]);


/*spike2.bounceOff(edges[0]);
spike2.bounceOff(edges[1]);
spike2.bounceOff(edges[2]);
spike2.bounceOff(wall4);


spike3.bounceOff(wall1);
spike3.bounceOff(wall2);
spike3.bounceOff(wall3);
spike3.bounceOff(wall4);


spike4.bounceOff(wall1);
spike4.bounceOff(wall2);
spike4.bounceOff(wall3);
spike4.bounceOff(wall4);


spike5.bounceOff(wall1);
spike5.bounceOff(wall2);
spike5.bounceOff(wall3);
spike5.bounceOff(wall4);

//worm 2
spike6.bounceOff(wall1);
spike6.bounceOff(wall2);
spike6.bounceOff(wall3);
spike6.bounceOff(wall4);

spike7.bounceOff(wall1);
spike7.bounceOff(wall2);
spike7.bounceOff(wall3);
spike7.bounceOff(wall4);


spike8.bounceOff(wall1);
spike8.bounceOff(wall2);
spike8.bounceOff(wall3);
spike8.bounceOff(wall4);


spike9.bounceOff(wall1);
spike9.bounceOff(wall2);
spike9.bounceOff(wall3);
spike9.bounceOff(wall4);


spike10.bounceOff(wall1);
spike10.bounceOff(wall2);
spike10.bounceOff(wall3);
spike10.bounceOff(wall4);

//worm 3
spike11.bounceOff(wall1);
spike11.bounceOff(wall2);
spike11.bounceOff(wall3);
spike11.bounceOff(wall4);

spike12.bounceOff(wall1);
spike12.bounceOff(wall2);
spike12.bounceOff(wall3);
spike12.bounceOff(wall4);


spike13.bounceOff(wall1);
spike13.bounceOff(wall2);
spike13.bounceOff(wall3);
spike13.bounceOff(wall4);


spike14.bounceOff(wall1);
spike14.bounceOff(wall2);
spike14.bounceOff(wall3);
spike14.bounceOff(wall4);


spike15.bounceOff(wall1);
spike15.bounceOff(wall2);
spike15.bounceOff(wall3);
spike15.bounceOff(wall4);
*/




console.log(displayHeight,displayWidth)

}
    drawSprites()

  
} 

function laser(){
  if (frameCount %100 === 0){
    var laser1 = createSprite(displayWidth-20,random(displayHeight-50,displayHeight-100),10,displayHeight-260)
    laser1.velocityX = -3
    laser1.shapeColor = "red"

    var laserTop = createSprite(displayWidth-20,random(10,80),10,displayHeight-260)
    laserTop.velocityX = -3
    laserTop.shapeColor = "red"

  
  }
  if(frameCount %100 === 0){
    //var laser2 = createSprite(displayWidth%2-200,random(displayHeight-250,displayHeight-300,7,displayHeight-280))
    var laser2 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser2.velocityX = -5
    laser2.shapeColor = "red"

    var laser3 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser3.velocityX = -5
    laser3.shapeColor = "red"

    var laser4 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser4.velocityX = -5
    laser4.shapeColor = "red"

    var laser5 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser5.velocityX = -5
    laser5.shapeColor = "red"

    var laser6 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser6.velocityX = -5
    laser6.shapeColor = "red"

    var laserFalling1 = createSprite(displayWidth-1000,random(20,20),10,200)
    laserFalling1.velocityY = +5
    laserFalling1.shapeColor = "red"

    var laserFalling2 = createSprite(displayWidth-800,random(20,20),10,200)
    laserFalling2.velocityY = +5
    laserFalling2.shapeColor = "red"

    var laserFalling3 = createSprite(displayWidth-600,random(20,20),10,200)
    laserFalling3.velocityY = +5
    laserFalling3.shapeColor = "red"

    var laserFalling4 = createSprite(displayWidth-400,random(20,20),10,200)
    laserFalling4.velocityY = +5
    laserFalling4.shapeColor = "red"

    var laserFalling5 = createSprite(displayWidth-200,random(20,20),10,200)
    laserFalling5.velocityY = +5
    laserFalling5.shapeColor = "red"






  }
}



