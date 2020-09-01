
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}
var bob1, bob2, bob3, bob4, bob5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.


	roof = new Roof(width / 2, 200, width / 3, 20);

	bob1 = new Bob(320, 400);
	bob2 = new Bob(360, 400);
	bob3 = new Bob(400, 400);
	bob4 = new Bob(440, 400);
	bob5 = new Bob(480, 400);


	rope1 = new Rope(bob1.body, { x: 320, y: 200 });
	rope2 = new Rope(bob2.body, { x: 360, y: 200 });
	rope3 = new Rope(bob3.body, { x: 400, y: 200 });
	rope4 = new Rope(bob4.body, { x: 440, y: 200 });
	rope5 = new Rope(bob5.body, { x: 480, y: 200 });

}


function draw() {

	background("coral");
	Engine.update(engine);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -70, y: -70 });
	}
}


