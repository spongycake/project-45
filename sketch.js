
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	body  = new spriite(300,300,100,100)


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  Engine.update(engine);
  body.display();
 // drawSprites();
 
}



