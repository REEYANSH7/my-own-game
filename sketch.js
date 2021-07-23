const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24, ground;
var ball, rope, ball2, rope2;
var water1,water2;
var lava1,lava2;
var ground2;



function preload() {

  mainRacerImg1 = loadAnimation("mainPlayer1.png","mainPlayer2.png"); 
  mainRacerImg2= loadAnimation("mainPlayer3.png");

}
  

function setup() {
  createCanvas(6000, 800);
  engine = Engine.create();
  world = engine.world;

  mainCyclist = createSprite(70,150); 
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1); 
  mainCyclist.scale=0.07;

  ground = new Ground(0, 0, 6000, 20);
  ground2 = new Ground(1201,600,12000,20)

  box1 = new Box(0,580, 70, 70);
  box2 = new Box(70,580, 70, 70);
  box3 = new Box(140, 580, 70, 70);
  lava1 = new Lava(210,580,70,70);
  box5 = new Box(280, 580, 70, 70);
  box6 = new Box(350, 580, 70, 70);
water1= new Water(420,580,70,70);
  box8 = new Box(490, 580, 70, 70);
  box21 = new Box(490,510,50,50);
  box22 = new Box(490,440,50,50)
  box9 = new Box(560, 580, 70, 70);
 water2 = new Water(630,580,70,70);
  box11 = new Box(700, 580, 70, 70);
  box12 = new Box(770, 580, 70, 70);
  box13 = new Box(840, 580, 70, 70);
  box14 = new Box(910, 580, 70, 70);
  box15 = new Box(980, 580, 70, 70);
  box16 = new Box(1050, 580, 70, 70);
  box17 = new Box(1120, 580, 70, 70);
  lava2 = new Lava(1190,580,70,70);
  box19 = new Box(1260, 580, 70, 70);
  box20 = new Box(1330, 580, 70, 70);
  box21 = new Box(1400, 580, 70, 70);
  box23 = new Box(1470, 580, 70, 70);
  box24 = new Box(1540, 580, 70, 70);
  box25 = new Box(1610, 580, 70, 70);
  box26 = new Box(1680, 580, 70, 70);
  box27 = new Box(1750, 580, 70, 70);
  box28 = new Box(1820, 580, 70, 70);
  box29 = new Box(1890, 580, 70, 70);
  box30 = new Box(1960, 580, 70, 70);
  box31 = new Box(2030, 580, 70, 70);
  box32 = new Box(2100, 580, 70, 70);
  box33 = new Box(2170, 580, 70, 70);
  box34 = new Box(2240, 580, 70, 70);
  box35 = new Box(2310, 580, 70, 70);
  box36 = new Box(2380, 580, 70, 70);
  box37 = new Box(2450, 580, 70, 70);
  box38 = new Box(2520, 580, 70, 70);
  box39 = new Box(2590, 580, 70, 70);
  box40 = new Box(2670, 580, 70, 70);
  box41 = new Box(2740, 580, 70, 70);
  box42 = new Box(2810, 580, 70, 70);
  box43 = new Box(2880, 580, 70, 70);
  box44 = new Box(2950, 580, 70, 70);
  box45 = new Box(3020, 580, 70, 70);
  box46 = new Box(3090, 580, 70, 70);
  box47 = new Box(3160, 580, 70, 70);
  box48 = new Box(3230, 580, 70, 70);
  box49 = new Box(3300, 580, 70, 70);
  box50 = new Box(3370, 580, 70, 70);
  box51 = new Box(3440, 580, 70, 70);
  box52 = new Box(3510, 580, 70, 70);
  box53 = new Box(3580, 580, 70, 70);
  box54 = new Box(3650, 580, 70, 70);
  box55 = new Box(3720, 580, 70, 70);
  box56 = new Box(3790, 580, 70, 70);
  box57 = new Box(3860, 580, 70, 70);
  box58 = new Box(3930, 580, 70, 70);
  box59 = new Box(4000, 580, 70, 70);
  box60 = new Box(4070, 580, 70, 70);
  box61 = new Box(4140, 580, 70, 70);
  box62 = new Box(4210, 580, 70, 70);
  box63 = new Box(4280, 580, 70, 70);
  box64 = new Box(4350, 580, 70, 70);
  box65 = new Box(4420, 580, 70, 70);
  box66 = new Box(4490, 580, 70, 70);
  box67 = new Box(4560,580, 70, 70);
  box69 = new Box(4630, 580, 70, 70);
  box70 = new Box(4700, 580, 70, 70);
  box71 = new Box(1260, 580, 70, 70);
  box72 = new Box(1260 , 580, 70, 70);
  box73 = new Box(1260 , 580, 70, 70);
  box74 = new Box(1260, 580, 70, 70);
  box75 = new Box(1260, 580, 70, 70);
  box76 = new Box(1260, 580, 70, 70);
  box77 = new Box(1260, 580, 70, 70);
  box78 = new Box(1260, 580, 70, 70);
  box79 = new Box(1260, 580, 70, 70);
  box80 = new Box(1260, 580, 70, 70);
  box81 = new Box(4840, 580, 70, 70);
  box82 = new Box(4910, 580, 70, 70);
  box83 = new Box(4980, 580, 70, 70);
  box84 = new Box(5030, 580, 70, 70);
  box85 = new Box(5100, 580, 70, 70);
  box86 = new Box(5170, 580, 70, 70);
  box87 = new Box(5240, 580, 70, 70);

 
  
 

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });
  ball2 = new Ball(1120,200,80,80);
  rope2 = new Rope(ball2.body, {x: 1120, y: 50});
 



}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  box5.display()
  box6.display()

  box8.display()
  box9.display()
 
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()

  box19.display()
  box20.display()
  water1.display()
  water2.display()
  lava1.display();
  lava2.display();
  ground2.display();
  box21.display();
  box23.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  box56.display();
  box57.display();
  box58.display();
  box59.display();
  box60.display();
  box61.display();
  box62.display();
  box63.display();
  box64.display();
  box65.display();
  box66.display();
  box67.display();
  box86.display();
  box70.display();
  box71.display();
  box72.display();
  box73.display();
  box74.display();
  box75.display();
  box76.display();
  box77.display();
  box78.display();
  box79.display();
  box80.display();
  box81.display();
  box82.display();
  box83.display();
  box84.display();
  box85.display();
  box86.display();
  box87.display();
  mainCyclist.display();

 



  
  
  

  ball.display();
  rope.display();
  ball2.display();
  rope2.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  Matter.Body.setPosition(ball2.body, { x: mouseX, y: mouseY});
}


