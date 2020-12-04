const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, pig1, log1, bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //creating the first layer
    box1= new Box(700, 320, 70, 70);
    box2= new Box(920, 320, 70, 70);
    ground=new Ground(600, height, 1200, 20);    
    pig1=new Piggi(810, 350)
    log1=new Log(810, 260, 300, PI/2);
    
    //creating the second layer
    box3= new Box(700, 240, 70, 70);
    box4= new Box(920, 240, 70, 70);
    bird1= new bird(100, 100)  
    pig2=new Piggi(810, 220)
    log2=new Log(810, 180, 300, PI/2);
    
    
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird1.display();
}