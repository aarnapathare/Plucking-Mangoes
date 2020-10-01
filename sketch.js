
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint
function preload()
{
  boyImg = loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,690,800,20);
tree = new Tree(550, 490, 450, 450)
stone = new Stone(250,200,50,50)
boy = new Boy(150,630, 200,200)
  Engine.run(engine);
  
  mango1 = new Mango(500,300,100,100)
  mango2 = new Mango(700,400,100,100)
  mango3 = new Mango(600,280,100,100)
  mango4 = new Mango(560,350,100)
  mango5 = new Mango(450,430,100,100)

var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
Engine.run(engine);

chain = new Chain(stone.body,{x: 90, y: 570});

}


function draw() {
  rectMode(CENTER);
  background("white");
  

  //detectcollision(stoneObj, mango1)
  //detectcollision(stoneObj, mango2)
  //detectcollision(stoneObj, mango3)
  //detectcollision(stoneObj, mango4)
  //detectcollision(stoneObj, mango5)
  
  ground.display();
  tree.display();
  stone.display();
  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y: mouseY})
  }
  
  function mouseReleased(){
      chain.fly()
  }
  function keypressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stoneObj.body, {x: 235, y: 420})
      launcherObject.attach(stoneObj.body);
    }
  }
  
  function detectcollision(lstone, lmango){
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance < -lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.Body, false);
    }
  }