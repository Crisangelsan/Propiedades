const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var roca;
var pelota;

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 400, 1200, 10);

    box1 = new Box(200,300,50,50);

    roca = new piedra(400, 200, 50, 50);

    pelota = new hule(300, 200, 50, 50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    roca.display();
   pelota.display();
}