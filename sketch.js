
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	 createCanvas(800, 750);


	 engine = Engine.create();
	 world = engine.world;

	 //Create the Bodies Here.
	 roof = new Roof(375,70,550,60)
	 bob1=new Bob(175,500,50);
	 bob2=new Bob(275,500,50);
	 bob3=new Bob(375,500,50);
	 bob4=new Bob(475,500,50);
	 bob5=new Bob(575,500,50);
	 rope1 = new Rope(bob1.body,{x:175,y:100});
   rope2 = new Rope(bob2.body,{x:275,y:100});
   rope3 = new Rope(bob3.body,{x:375,y:100});
   rope4 = new Rope(bob4.body,{x:475,y:100});
   rope5 = new Rope(bob5.body,{x:575,y:100});


	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



