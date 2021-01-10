var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("gold")
		
	engine = Engine.create();
	world = engine.world;


   
	//Create the Bodies Here.

paper=new Paper(100,200,50)
paper.shapeColor=("purple")

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	boxPosition=width/2+400
	boxY=580;


	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color("white");

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color("white");

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color("white");

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

paper.display()
  drawSprites();
 
}

function keyPressed(){
if( keyCode===32){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}


}


