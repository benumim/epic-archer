const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher; //board, arrow;
var baseimage, playerArcherImg; //boardImg, arrowImg;


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher.png");
  //boardImg = loadImage("./assets/board.png");
  //arrowImg = loadImage("./assets/arrow.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);

  //criar corpo do jogador

  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
  World.add(world,player);


  playerArcher = Bodies.rectangle(player.position.x + 30,player.position.y - 30,40,80,options);
  World.add(world,player);



}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  //exibir a imagem  da base do jogador usando a função image()

  imageMode(CENTER);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);

  //exibir a imagem do jogador usando a função image()

  imageMode(CENTER);
  image(playerimage,player.position.x,player.position.y,50,180);


  imageMode(CENTER);
  image(playerArcherImg,playerArcher.position.x,playerArcher.position.y,40,80);

  

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHER", width / 2, 100);
}
