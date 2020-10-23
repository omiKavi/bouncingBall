//namespacing- giving another name 
//constant has fix value stored throughout the program
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// stores a value in com memory- keep changing values 
var number = 3;
var number = 5;
console.log(number);

var engine, world, ground, ball;

function setup() {
  var canvas= createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;

  //JSON Format of storing data in javascript
  var ground_options ={

    'isStatic': true
  }
  //default and override
  ground = Bodies.rectangle(200, 800, 800, 20, ground_options);
  World.add(world, ground);
  
  var ballOptions ={
    'restitution': 1.0   
  }
  ball = Bodies.circle(300, 400, 30, ballOptions);
  World.add(world, ball);

  console.log(ground);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x, ground.position.y, 800, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);
}