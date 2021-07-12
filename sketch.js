const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ball1,ball2,ball3,ball4,ball5,rope1,rope2,rope3, rope4,rope5,rope6,square

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ball1=new Ball(350,500,50)
	ball2=new Ball(400,500,50)
	ball4=new Ball(500,500,50)
	ball5=new Ball(550,500,50)
	//square=new Shape(450,500,50)
	ball3=new Ball(450,500,50)
rope1=new Rope(ball1.body,{x:350,y:100})
rope2=new Rope(ball2.body,{x:400,y:100})
rope4=new Rope(ball4.body,{x:500,y:100})
rope5=new Rope(ball5.body,{x:550,y:100})
//rope6=new Rope(square.body,{x:450,y:100})
rope3=new Rope(ball3.body,{x:450,y:100})
roof=new Roof(450,100,350,20)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("lavender");
  Engine.update(engine);
  roof.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()
//rope6.display()
//square.display()

}

function keyPressed(){
	if(keyCode=== UP_ARROW){
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:790,y:0})
	}
}



