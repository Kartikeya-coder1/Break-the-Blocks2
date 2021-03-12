const Engine = Matter.Engine;
const World = Matter.World;
 const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,base1,base2, base3;
var block1,block2,block3,block4,block5,block6,block7,
    block8,block9,block10,block11,block12,block13,block14,block15,block16,
    block17,block18,block19,block20,block21,block22,block23,block24,block25,
    block26,block27,block28,block29;
var block1a,block2a,block3a,block4a,block5a,block6a,block7a,block8a,block9a,block10a,
    block11a,block12a,block13a,block14a,block15a,block16a;
var Polygon;
var sling;
// var text = "Drag the Hexagonal Stone and Release it to launch it towards the blocks!"
// var result = text.fontsize(7)
//


function setup() {
	createCanvas(1400, 600);
//    this code has an ERROR!!!!!
	engine = Engine.create();    
	world = engine.world;
    

    // not working, above code!!!!!
    fill("black")
    ground = new Base(700,590,1400,20);
    base1 = new Base(800,500,200,20);
    base2 = new Base(980,300,150,20);
    // base3 = new Base(150,630,30,10);

    // making blocks
    fill("white")
    block1 = new Box(735,490,20,20);
    block2 = new Box(750,490,20,20);
    block3 = new Box(770,490,20,20);
    block4 = new Box(790,490,20,20);
    block5 = new Box(810,490,20,20);
    block6 = new Box(830,490,20,20);
    block7 = new Box(835,490,20,20);
    block29 = new Box(840,490,20,20);


    // fill("white")

    block8 = new Box(760,480,20,20);
    block9 = new Box(775,480,20,20);
    block10 = new Box(790,480,20,20);
    block11 = new Box(805,480,20,20);
    block12 = new Box(820,480,20,20);
    block13 = new Box(835,480,20,20);



    block14 = new Box(770,470,20,20);
    block15 = new Box(785,470,20,20);
    block16 = new Box(800,470,20,20);
    block17 = new Box(815,470,20,20);
    block18 = new Box(830,470,20,20);



    block19 = new Box(780,460,20,20);
    block20 = new Box(795,460,20,20);
    block21 = new Box(810,460,20,20);
    block22 = new Box(825,460,20,20);



    block23 = new Box(790,450,20,20);
    block24 = new Box(805,450,20,20);
    block25 = new Box(820,450,20,20);

    block26 = new Box(800,440,20,20);
    block27 = new Box(815,440,20,20);

    block28 = new Box(810,430,20,20);

    
    // ////////////////////////////////// For Base2
    
    block1a = new Box2(950,290,20,20);
    block2a = new Box2(965,290,20,20);
    block3a = new Box2(980,290,20,20);
    block4a = new Box2(995,290,20,20);
    block5a = new Box2(1010,290,20,20);
    
    block6a = new Box2(960,280,20,20);
    block7a = new Box2(975,280,20,20);
    block8a = new Box2(990,280,20,20);
    block9a = new Box2(1005,280,20,20);
    
    block10a = new Box2(970,270,20,20);
    block11a = new Box2(985,270,20,20);
    block12a = new Box2(1000,270,20,20);

    block13a = new Box2(980,260,20,20);
    block14a = new Box2(995,260,20,20);

    block15a = new Box2(989,250,20,20);
    block16a = new Box2(999,290,20,20);





// creating striker and string --- --> #unsuccessful
    Polygon = new poly(60,350,50)
    World.add(world,Polygon);

    sling = new SlingShot(Polygon.body,{x:150,y:370})


    
    
}

// function draw() {
  
//     background("black");  
//    Engine.update(engine);
// //    text("Drag the Hexagonal Stone and Release it to launch it towards the blocks! Press space to bring the shooter back!",10,100)


    
    
// }

function draw() {
  
    background("black");  
   Engine.update(engine);
   text("Drag the Hexagonal Stone and Release it to launch it towards the blocks! Press space to bring the shooter back!",10,100)
    //   fontSize(20)
     block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();


    // result.display();

    
    // fill("white")
    
    block1a.display();  
    block2a.display();  
    block3a.display(); 
    block4a.display() ;
    block5a.display() ;
    block6a.display() ;
    block7a.display() ;
    block8a.display() ;
    block9a.display() ;
    block10a.display();
    block11a.display();
    block12a.display();
    block13a.display();
    block14a.display();
    block15a.display();
    block29.display();
    block16a.display();
    // push();


    ground.display();
    base1.display();
    base2.display();
   // base3.display();
     sling.display();
      Polygon.display()


     
    // text.display();

        //keyPressed();
     drawSprites();
}  



function mouseDragged(){
    Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});
 }


 function mouseReleased(){
     sling.fly();
 }


 function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(Polygon.body, {x:150, y: 570});
		sling.attach(Polygon.body);

        // if (keyDown("a")){
        //     Polygon.velocityX = 20;
        //     Polygon.velocityY = 20;
        // //     Polygon.Body.setStatic(false)
        // }
		
	}
}

