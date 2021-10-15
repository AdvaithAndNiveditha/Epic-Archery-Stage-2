const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;



function preload() {
  backgroundImg = loadImage("background.png");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(330, 250, 110, 100);
  playerArrow = new PlayerArrow(3550, 250, 50, 9);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerArcher.display();
  playerArrow.display();
}
function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    playerArrow.shoot();
  }
}




