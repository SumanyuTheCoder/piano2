var BlackTile,BlackTileimg;
var BlackTile2;
var BlackTile3;
var BlackTile4;
var BlackTile5;
var BlackTile6;
var BlackTile7;
var BlackTile8;
var BlackTile9;
var BlackTile10;

var WhiteTile1;
var WhiteTile2;
var WhiteTile3;
var WhiteTile4;
var WhiteTile5;
var WhiteTile6;
var WhiteTile7;
var WhiteTile8;
var WhiteTile9;
var WhiteTile10;
var WhiteTile11;
var WhiteTile12;
var WhiteTile13;
var WhiteTile14;
var WhiteTile15;
var WhiteTile16;
var WhiteTileimg,WhiteTileimg2,WhiteTilePressed;
var discoButtom,DiscoButtonimg,disco,stopdisco,stopdiscoIMG;
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
var sound10;
var sound12;


var blackeysound1;
var blackeysound2;
var blackeysound3;
var blackeysound4;
var blackeysound5;
var blackeysound6;
var blackeysound7;
var blackeysound8;
var blackeysound9;
var blackeysound10;



var fftuText,fftuTextimg;
var text2,text2img;
var barrier,barrier2;
var PianoFrame,PianoFrameimg;
var bg;
function setup() {
  createCanvas(1200,800);
  BlackTileimg = loadImage("./black tile.png");
  bg = loadImage("bg.jpeg");
  WhiteTileimg = loadImage("white tile.png");
  PianoFrameimg = loadImage("piano frame.png");
  WhiteTileimg2 = loadImage("white tile2.png");
  WhiteTilePressed = loadImage("whitetilepressed.png")
  DiscoButtonimg = loadImage("disco.png")
  stopdiscoIMG = loadImage("stopdisco.png")
  fftuTextimg = loadImage("TEXT FOR DESIGN IN PIANO APP.png")
  text2img = loadImage("text2.png")

sound1 = loadSound("4-a.wav");
sound2 = loadSound("4-as.wav");
sound3 = loadSound("4-b.wav");
sound4 = loadSound("4-c.wav");
sound5 = loadSound("4-cs.wav");
sound6 = loadSound("4-d.wav");
sound7 = loadSound("4-ds.wav");
sound8 = loadSound("4-e.wav");
sound9 = loadSound("4-f.wav");
sound10 = loadSound("4-fs.wav");
sound11= loadSound("4-g.wav");
sound12 = loadSound("4-gs.wav");





blackeysound1 = loadSound("5-a.wav")
disco = loadSound("disco sound.mp3");

text2 = createSprite(200,200);
 text2.addImage(text2img)
 text2.scale = 0.4
 text2.velocityX = 9

 fftuText = createSprite(500,200);
 fftuText.addImage(fftuTextimg)
 fftuText.scale = 0.5
 fftuText.velocityX = 9

}

function draw() {

  background(bg);  

 
  
  barrier = createSprite(1199,200,20,300,50);


   PianoFrame = createSprite(600,600);
   PianoFrame.addImage(PianoFrameimg)
   
  





   WhiteTile1 = createSprite(30,600)
   WhiteTile1.addImage(WhiteTileimg2)

   WhiteTile2 = createSprite(115,600)
   WhiteTile2.addImage(WhiteTileimg)

   WhiteTile3 = createSprite(200,600)
   WhiteTile3.addImage(WhiteTileimg)

   WhiteTile4 = createSprite(285,600)
   WhiteTile4.addImage(WhiteTileimg)

   WhiteTile5 = createSprite(370,600)
   WhiteTile5.addImage(WhiteTileimg2)

   WhiteTile6 = createSprite(455,600)
   WhiteTile6.addImage(WhiteTileimg)

   WhiteTile7 = createSprite(540,600)
   WhiteTile7.addImage(WhiteTileimg)

   WhiteTile8 = createSprite(625,600)
   WhiteTile8.addImage(WhiteTileimg2)

   WhiteTile9 = createSprite(710,600)
   WhiteTile9.addImage(WhiteTileimg)

   WhiteTile10 = createSprite(795,600)
   WhiteTile10.addImage(WhiteTileimg)

   WhiteTile11 = createSprite(880,600)
   WhiteTile11.addImage(WhiteTileimg)
   
   WhiteTile12 = createSprite(965,600)
   WhiteTile12.addImage(WhiteTileimg2)
   
   WhiteTile13 = createSprite(1050,600)
   WhiteTile13.addImage(WhiteTileimg)
   
   WhiteTile14 = createSprite(1135,600)
   WhiteTile14.addImage(WhiteTileimg)
   
   WhiteTile16 = createSprite(795,600)
   WhiteTile16.addImage(WhiteTileimg)
   
   WhiteTile17 = createSprite(795,600)
   WhiteTile17.addImage(WhiteTileimg)









   BlackTile1 = createSprite(80,520);
   BlackTile1.addImage(BlackTileimg)

   BlackTile2 = createSprite(170,520);
   BlackTile2.addImage(BlackTileimg)
   
   BlackTile3 = createSprite(260,520);
   BlackTile3.addImage(BlackTileimg)

   BlackTile4 = createSprite(420,520);
   BlackTile4.addImage(BlackTileimg)

   BlackTile5 = createSprite(505,520);
   BlackTile5.addImage(BlackTileimg)

   BlackTile6 = createSprite(680,520);
   BlackTile6.addImage(BlackTileimg);

   BlackTile7 = createSprite(760,520);
   BlackTile7.addImage(BlackTileimg)

   BlackTile8 = createSprite(840,520);
   BlackTile8.addImage(BlackTileimg)

   BlackTile9 = createSprite(1020,520);
   BlackTile9.addImage(BlackTileimg)

   BlackTile10 = createSprite(1100,520);
   BlackTile10.addImage(BlackTileimg)


   //discoButtom = createSprite(200,600)
   //discoButtom.addImage(DiscoButtonimg)
   //discoButtom.scale = 0.7

   //stopdisco = createSprite(1000,600)
   //stopdisco.addImage(stopdiscoIMG)
   //stopdisco.scale = 0.7


   if(keyWentDown("1")){
     sound1.play();
     WhiteTile1.addImage(WhiteTilePressed)

   }
   if(keyWentDown("2")){
    sound2.play();
    WhiteTile2.addImage(WhiteTilePressed)

  }
  if(keyWentDown("3")){
    sound3.play();
    WhiteTile3.addImage(WhiteTilePressed)

  }
  if(keyWentDown("4")){
    sound4.play();
    WhiteTile4.addImage(WhiteTilePressed)

  }
  if(keyWentDown("5")){
    sound5.play();
    WhiteTile5.addImage(WhiteTilePressed)

  }
  if(keyWentDown("6")){
    sound6.play();
    WhiteTile6.addImage(WhiteTilePressed)

  }
  if(keyWentDown("7")){
    sound7.play();
    WhiteTile7.addImage(WhiteTilePressed)

  }
   if(keyWentDown("8")){
    sound8.play();
    WhiteTile8.addImage(WhiteTilePressed)

  }
  if(keyWentDown("9")){
    disco.play();
    //discoButtom.addImage(stopdisco)

  }
  if(keyWentDown("space")){
    disco.stop();

  }

  if(text2.isTouching(barrier)){
text2.visible = false
text2.velocityX = 0
 }
 

 if(fftuText.isTouching(barrier)){
  fftuText.visible = false
  fftuText.velocityX = 0
   }

   if(keyWentDown("q")){
    blackeysound1.play();
   // WhiteTile8.addImage(WhiteTilePressed)

  }
  if(keyWentDown("w")){
    blackeysound1.play();
   // WhiteTile8.addImage(WhiteTilePressed)

  }

  
  drawSprites();

}
//function draw() {
//  clear();
//  let display = touches.length + ' touches';
 // text(display, 5, 10);
//}