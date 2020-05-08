const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,370,50,50);
    box2 = new Box(300,370,50,50);
    pig1= new Pig(250,370);
    log1= new Log(250,320,180,PI/2);
    box3= new Box(200,300,50,50);
    box4= new Box(295,300,50,50);
    pig2= new Pig(250,300);
    log2= new Log(250,280,180,PI/2);
    box5= new Box(250,260,50,50);
    log3= new Log(220,260,100,PI/6);
    log4= new Log(270,260,100,-PI/6);
    bird1= new Bird(400,300);
    ground = new Ground(400,height,800,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}