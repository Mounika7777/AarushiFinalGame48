var bg1,bg2,bg3,bg4;
var score=0;
var level = 0;
var door;
var invisiblegr;
var background_img;
var jin, jin_img;
var diamond, diamond_img, diamondGroup;
var purplediamond,violetdiamond,diamond2,bluediamond;
var invisiblegr2;
var bomb, bomb_img;
var life, life_img, livesGroup;
var ground,bombGroup;
var life1 = 5;
var gameState = "start";
var gameOverImage;
var score = 0;
var reset, play;
var bg;
var thief, thief_img;
var rect1;



function preload() {

  boy_img = loadAnimation("images/kid1.png", "images/kid2.png", "images/kid3.png");
  bat_img = loadImage("images/bat.png");
  bluediamond = loadImage("images/blue_diamond.png");
  purplediamond = loadImage("images/purple_diamond.png");
  violetdiamond = loadImage("images/violetdiamond.png");
  jin_img = loadImage("images/jin.png");
  diamond2 = loadImage("images/diamond.png");
  background_img = loadImage("images/bg3.png");
  bomb_img = loadImage("images/bomb.png");
  life_img = loadImage("images/life.png");
  gameOverImage = loadImage("images/go.gif");
  thief_img = loadImage("images/theif.png");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  boy = createSprite(displayWidth/2+500, displayHeight-390, 50, 50);
  boy.addAnimation("boy", boy_img);
  boy.scale = 0.4;
  boy.visible = false;
  
  bat = createSprite(displayWidth/2+400, displayHeight-500, 50, 50);
  
  bat.addImage(bat_img);
  bat.scale = 0.2;
  bat.visible= false;

 
  door = createSprite(196,360, 50, 50);
  door.visible = false;

  invisiblegr = createSprite(displayWidth-500, displayHeight-300, displayWidth,20);
  invisiblegr.visible = false;

 
  jin = createSprite(160, 400, 50, 50);
  jin.addAnimation("jin", jin_img);
  jin.scale = 0.3;
  jin.visible = false;
 
  //create invisible ground for level2.
  invisiblegr2 = createSprite(displayWidth * 4,650, displayWidth * 12, 20);
  invisiblegr2.visible = false;
  //create theif.
  thief = createSprite(displayWidth * 10 - 200, 450, 100, 200);
  thief.addImage("the", thief_img);
  thief.scale = 0.3;
  
  bombGroup = createGroup();
  diamondGroup = new Group();
  livesGroup = new Group();
  
  
   //spawn Diamonds & Bombs.
   spawnDiamonds();
   spawnBombs();

  for (var i = 1; i <= life1; i = i + 1) {
    life = createSprite(i * 50, 50, 50, 50);
    life.addImage("life", life_img);
    life.scale = 0.08;
    livesGroup.add(life);
    livesGroup.setVisibleEach(false);

  }

   

}

function draw() {
  background(0);

  if(level === 0){
    background("#ff0066");
    
    fill("yellow");
    textSize(25);
    text("Hey Welcome🤚!Let's see some instruction👇", 50, 100);
    fill("White");
    text("👉 A boy was lost in an island.", 5, 180);
    text("👉 He has to reach the final destination.", 5, 230);
    text("👉 He needs to collects all the diamonds", 5, 280);
    text("dropped by the thief.", 5, 330);
    
    text("👉 You have 5 lives.", 5, 380);
    text("👉 You can move left side and jump.", 5, 430);
    text("👉 So Are you ready to play the game??", 5, 480);
    text("👉 If you are ready So please press S Key", 5, 530);
    text("👉 Let's Play the Game.", 5, 580);
  }
   
  if(keyDown("s")){

    level = 1;

  }
  
  if(level === 1){
          background(30, 220, 220);
          console.log(mouseX,mouseY);

          //display boy image
          boy.visible = true;
          bat.visible = true;
          boy.depth = door.depth;
          if(keyDown("left_Arrow")){
            boy.x =  boy.x-5;
          }
          //use up arrow to move the boy
          if (keyIsDown(UP_ARROW)) {
            boy.velocityY = -10;

          }

          if(frameCount%20 === 0){
            bat.velocityX = -2;
            bat.y = Math.round(random(100,500));
          }
          //giving gravity to velocity of boy on y axis
          boy.velocityY = boy.velocityY + 0.5;
          boy.collide(invisiblegr);

          //if boy is touching bat game starts from beginning
          if(boy.isTouching(bat)){
            boy.x = displayWidth/2+500;
          }
          if(boy.isTouching(door)){
            fill("red");
            textSize(24);
            text("level1 completed!! Press" +"  Q  "+" to go to next level",displayWidth/2-200,displayHeight/2);
            boy.velocityX = 0;
            boy.velocityY = 0;
            boy.visible = false;
            bat.visible = false;
          }

          if(boy.isTouching(door) && keyDown("q")){
            level = 2;
            gameState = "play"
            console.log(level);
          }


          // Grass
          fill(35, 184, 36);
          rect(0, 320, 400, 80);

          // Front
          stroke(0);
          fill(175); // gray
          rect(125,260,20,20);
          rect(155,260,20,20);
          rect(185,260,20,20);
          rect(217,260,20,20);
          rect(250,260,20,20);
          rect(100,270,200,10);
          rect(100, 280, 200, 90);
          
          //front bricks
          rect(120,280,25,10);
          rect(145,280,25,10);
          rect(170,280,25,10);
          rect(195,280,25,10);
          rect(220,280,25,10);
          rect(245,280,25,10);
          rect(270,280,10,10);
          rect(130,290,25,10);
          rect(155,290,25,10);
          rect(180,290,25,10);
          rect(205,290,25,10);
          rect(230,290,25,10);
          rect(255,290,25,10);
          rect(120,290,10,10);
          rect(120,300,25,10);
          rect(145,300,25,10);
          rect(170,300,25,10);
          rect(195,300,25,10);
          rect(220,300,25,10);
          rect(245,300,25,10);
          rect(270,300,10,10);
          rect(130,310,25,10);
          rect(155,310,25,10);
          rect(180,310,25,10);
          rect(205,310,25,10);
          rect(230,310,25,10);
          rect(255,310,25,10);
          rect(120,310,10,10);
          rect(120,320,25,10);
          rect(145,320,25,10);
          rect(170,320,25,10);
          rect(195,320,25,10);
          rect(220,320,25,10);
          rect(245,320,25,10);
          rect(270,320,10,10);
          rect(130,330,25,10);
          rect(155,330,25,10);
          rect(180,330,25,10);
          rect(205,330,25,10);
          rect(230,330,25,10);
          rect(255,330,25,10);
          rect(120,330,10,10);
          rect(120,340,25,10);
          rect(145,340,25,10);
          rect(170,340,25,10);
          rect(195,340,25,10);
          rect(220,340,25,10);
          rect(245,340,25,10);
          rect(270,340,10,10);
          rect(130,350,25,10);
          rect(155,350,25,10);
          rect(180,350,25,10);
          rect(205,350,25,10);
          rect(230,350,25,10);
          rect(255,350,25,10);
          rect(120,350,10,10);
          rect(120,360,25,9);
          rect(145,360,25,9);
          rect(170,360,25,9);
          rect(195,360,25,9);
          rect(220,360,25,9);
          rect(245,360,25,9);
          rect(270,360,10,9);
          
          
          
          
          //castle tower bumps
          rect(20,275,15,15);
          rect(40,275,15,15);
          rect(60,275,15,15);
          rect(323,275,15,15);
          rect(343,275,15,15);
          rect(362,275,15,15);

          // Towers
          rect(20, 280, 50, 90);
          rect(330, 280, 50,90);
          
          //tower brick
          rect(20,280,25,10);
          rect(45,280,25,10);
          rect(20,290,12.5,10);
          rect(32.5,290,25,10);
          rect(56,290,12.5,10);
          rect(20,300,25,10);
          rect(45,300,25,10);
          rect(20,310,12.5,10);
          rect(32.5,310,25,10);
          rect(56,310,12.5,10);
          rect(20,320,25,10);
          rect(45,320,25,10);
          rect(20,330,12.5,10);
          rect(32.5,330,25,10);
          rect(56,330,12.5,10);
          rect(20,340,25,10);
          rect(45,340,25,10);
          rect(20,350,12.5,10);
          rect(32.5,350,25,10);
          rect(56,350,12.5,10);
          rect(20,360,25,10);
          rect(45,360,25,10);
          
          rect(330,280,25,10);
          rect(355,280,25,10);
          rect(330,290,12.5,10);
          rect(342.5,290,25,10);
          rect(367.5,290,12.5,10);
          rect(330,300,25,10);
          rect(355,300,25,10);
          rect(330,310,12.5,10);
          rect(342.5,310,25,10);
          rect(367.5,310,12.5,10);
          rect(330,320,25,10);
          rect(355,320,25,10);
          rect(330,330,12.5,10);
          rect(342.5,330,25,10);
          rect(367.5,330,12.5,10);
          rect(330,340,25,10);
          rect(355,340,25,10);
          rect(330,350,12.5,10);
          rect(342.5,350,25,10);
          rect(367.5,350,12.5,10);
          rect(330,360,25,10);
          rect(355,360,25,10);
          
          
          
          //Tower2
          rect(70,270,50,100);
          rect(280,270,50,100);
          
          //bricks of towers
          rect(70,270,25,15);
          rect(95,270,25,15);
          rect(70,285,12.5,10);
          rect(82,285,25,10);
          rect(106.5,285,12.5,10);
          rect(70,295,25,10);
          rect(95,295,25,10);
          rect(70,305,12.5,10);
          rect(82,305,25,10);
          rect(106.5,305,12.5,10);
          rect(70,315,25,10);
          rect(95,315,25,10);
          rect(70,325,12.5,10);
          rect(82,325,25,10);
          rect(106.5,325,12.5,10);
          rect(70,335,25,10);
          rect(95,335,25,10);
          rect(70,345,12.5,10);
          rect(82,345,25,10);
          rect(106.5,345,12.5,10);
          rect(70,355,25,10);
          rect(95,355,25,10);
          rect(70,365,12.5,5)
          rect(82,365,25,5);
          rect(106.5,365,12.5,5)
          rect(280,270,25,15);
          rect(305,270,25,15);
          rect(280,285,12.5,10);
          rect(292.5,285,25,10);
          rect(317.5,285,12.5,10);
          rect(280,295,25,10);
          rect(305,295,25,10);
          rect(280,305,12.5,10);
          rect(292.5,305,25,10);
          rect(317.5,305,12.5,10);
          rect(280,315,25,10);
          rect(305,315,25,10);
          rect(280,325,12.5,10);
          rect(292.5,325,25,10);
          rect(317.5,325,12.5,10);
          rect(280,335,25,10);
          rect(305,335,25,10);
          rect(280,345,12.5,10);
          rect(292.5,345,25,10);
          rect(317.5,345,12.5,10);
          rect(280,355,25,10);
          rect(305,355,25,10);
          rect(280,365,12.5,5)
          rect(292.5,365,25,5);
          rect(317.5,365,12.5,5);
          
          
          
          
          
          
          //castle rooms
          rect(75,210,40,60);
          rect(285,210,40,60);
          triangle(285,210,305,160,325,210);
          triangle(75,210,95,160,115,210);
          
          
          //room bricks
          stroke(0);
          fill(175);
          rect(75,210,20,10);
          rect(95,210,20,10);
          rect(75,220,10,10);
          rect(85,220,20,10);
          rect(105,220,10,10);
          rect(75,230,20,10);
          rect(95,230,20,10);
          rect(75,240,10,10);
          rect(85,240,20,10);
          rect(105,240,10,10);
          rect(75,250,20,10);
          rect(95,250,20,10);
          rect(75,260,10,10);
          rect(85,260,20,10);
          rect(105,260,10,10);
          
          rect(285,210,20,10);
          rect(305,210,20,10);
          rect(285,220,10,10);
          rect(295,220,20,10);
          rect(315,220,10,10);
          rect(285,230,20,10);
          rect(305,230,20,10);
          rect(285,240,10,10);
          rect(295,240,20,10);
          rect(315,240,10,10);
          rect(285,250,20,10);
          rect(305,250,20,10);
          rect(285,260,10,10);
          rect(295,260,20,10);
          rect(315,260,10,10);
          
          //room windows
          noStroke();
          fill("black");
          arc(95, 235,12,30, PI, 0);
          arc(305,235,12,30,PI,0);
          arc(32,305,12,30,PI,0);
          arc(57,305,12,30,PI,0);
          arc(45.5,345,12,30,PI,0);
          arc(342,305,12,30,PI,0);
          arc(367,305,12,30,PI,0);
          arc(355.5,345,12,30,PI,0);
          arc(95,320,20,50,PI,0);
          arc(305,320,20,50,PI,0);
          arc(155,307,19,40,PI,0);
          arc(245,307,19,40,PI,0);
          
          //flags
          fill(207, 21, 67);
          stroke(0);
          rect(95,144,10,15);
          rect(105,148,9,13);
          triangle(115,153,125,156.5,115,160);
          rect(305,144,10,15);
          rect(315,148,9,13);
          triangle(325,153,335,156.5,325,160);
          

          // Platforms
          fill("red");
          rect(70, 265, 50, 10);
          rect(280,265, 50, 10);

          // Door
          noStroke();
          fill(140, 80, 0);
          ellipse(200, 335, 36);
          rect(182, 335, 36, 35);
          fill(51, 39, 6);
          stroke(0);
          ellipse(190,345,10);

          // Cloud
          noStroke();
          fill(255);
          ellipse(100, 100, 30);
          ellipse(120, 95, 30);
          ellipse(80, 100, 30);
          ellipse(88, 85, 30);
          ellipse(110, 85, 30);

          // Sun
          fill(255, 255, 0);
          ellipse(320, 80, 80);
}
  
if(level === 2){
       jin.visible = true;
       livesGroup.setVisibleEach(true);
       bombGroup.setVisibleEach(true);
       diamondGroup.setVisibleEach(true);
      if (gameState === "play") {
        
          image(background_img,-width/2,0,width * 12,height);
          //set camera on the boy.
          camera.position.x = jin.x;
          camera.position.y = displayHeight / 2;
          //show score.
          fill("black");
          textSize(30);
          text("Collect Diamonds : " + score, jin.x + 200, 50);
          //use right arrow to move the boy
            if (keyIsDown(RIGHT_ARROW)) {
              jin.x = jin.x + 20;
            }
          //use up arrow to move the boy
            if (keyIsDown(UP_ARROW)) {
              jin.velocityY = -10;

            }
            //giving gravity to velocity of boy on y axis
            jin.velocityY = jin.velocityY + 0.5;

            for (var i = 0; i < livesGroup.length; i++) {
              livesGroup.get(i).x = jin.x - i * 50;

            }


            //when boy collide with diamonds increase score 
            for (var i = 0; i < diamondGroup.length; i++) {
              if (diamondGroup.get(i).isTouching(jin)) {
                diamondGroup.get(i).destroy();
                score = score + 1;
              }
            }
          //when boy collide withbomb decrease lives andlives as well
          bombGroup.collide(jin, decLife);
          jin.collide(invisiblegr2);

          jin.depth = thief.depth;
          if(thief.isTouching(jin)){
            
              level = 3;
              background(0);
              fill("white");
              textSize(24);
              text("congratulations level2 completed");
              livesGroup.destroyEach();
              diamondGroup.destroyEach();
              jin.velocityXEach(0);
              jin.velocityYEach(0);

          }
          //if life is equal to 0 chang gameState to end.
          if (life1 === 0) {
            gameState = "end";
          }
  }
  //create end gamestate.
          if (gameState === "end") {
          
            background(gameOverImage);
            diamondGroup.destroyEach()
            bombGroup.destroyEach()
            jin.destroy();
            livesGroup.destroyEach()
            
          }
    

}


  drawSprites()
}



function spawnDiamonds() {

  
    for (var i = 500; i < displayWidth * 10; i = i + 700) {
      diamond = createSprite(i, random(50, 400), 50, 40);
      diamond.scale = 0.2;
      var rand = Math.round(random(1, 4));
      switch (rand) {
        case 1: diamond.addImage("diamond", diamond2);
          diamond.scale = 0.2;
          break;
        case 2: diamond.addImage("diamond", bluediamond);
          diamond.scale = 0.1;
          break;
        case 3: diamond.addImage("diamond", purplediamond);
          diamond.scale = 0.2;
          break;
        case 4: diamond.addImage("diamond", violetdiamond);
          diamond.scale = 0.2;
          break;
       }
      diamondGroup.add(diamond);
      diamondGroup.setVisibleEach(false);
     
  }
}



//create spawnbombs function.
function spawnBombs() {
  
  for (var i = 700; i < displayWidth * 10; i = i + 1000) {
    bomb = createSprite(i, random(100, 500), 50, 50);
    bomb.addImage("bomb", bomb_img);
    bomb.scale = 0.2;
    bombGroup.add(bomb);
    bombGroup.setVisibleEach(false);

  }
}



//create declife function.
function decLife(bomb, car) {
          life1 = life1 - 1;

          livesGroup.get(0).destroy();




          if (life1 > 0) {
            //change gameState to play.
            gameState = "play";
          }
          else {
            gameState = 'end';
          }
          bomb.remove();

}