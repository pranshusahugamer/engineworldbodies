const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;
 var engine,world1,ground;
 var ball; 
 function setup() {
 createCanvas(400,400);
  engine=Engine.create();
 world1=engine.world;
var gop={ 
isStatic : true 
}
 ground= Bodies.rectangle(200,390,200,20,gop);
  World.add(world1,ground);
  var ballo={
    restitution: 1.5
  }
  ball=Bodies.circle(200,50,20,ballo);  
  World.add(world1,ball);
  //console.log(ground.position.x);
    //createSprite(400, 200, 50, 50); 
  }

  function draw() {
 background(0);
  Engine.update(engine);
   //drawSprites();
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,20,20);
} 