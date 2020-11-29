
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var s1,s2,s3, g

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	g = Bodies.rectangle(800, 680, 1600, 20, {
		isStatic:true
	})
	World.add(world, g)

	ball = new Paper(200, 450, 40)

	s1 = new Dustbin(1100, 620, 20, 100)
	s2 = new Dustbin(1250, 660, 280, 20)
	s3 = new Dustbin(1400, 620, 20, 100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  rect(g.position.x, g.position.y, 1600, 20)
  ball.display()
  s1.display()
  s2.display()
  s3.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



