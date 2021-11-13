const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var ball;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18;
var box19, box20;

function setup() {
  createCanvas(1300,600);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,550,1600,10);
  ball = new Ball(200,200,70,70);
  box1 = new Box(800,130,60,60);
  box2 = new Box(800,130,60,60);
  box3 = new Box(800,130,60,60);
  box4 = new Box(900,130,60,60);
  box5 = new Box(900,130,60,60);
  box6 = new Box(900,130,60,60);
  box7 = new Box(1000,130,60,60);
  box8 = new Box(1000,130,60,60);
  box9 = new Box(1000,130,60,60);
  box10 = new Box(900,125,260,30);
  box11 = new Box(800,90,60,60);
  box12 = new Box(800,90,60,60);
  box13 = new Box(800,90,60,60);
  box14 = new Box(900,90,60,60);
  box15 = new Box(900,90,60,60);
  box16 = new Box(900,90,60,60);
  box17 = new Box(1000,90,60,60);
  box18 = new Box(1000,90,60,60);
  box19 = new Box(1000,90,60,60);
  box20 = new Box(900,80,260,30);

  rope = new Rope(ball.body,{x:100,y:400});
}

function draw() {
  background(180);  
   Engine.update(engine);
   
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

}
function mouseDragged(){  
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
     rope.attach(ball.body);
  }
}