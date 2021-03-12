class poly{
    constructor(x,y,radius){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:2.0
    }
    this.x = x
    this.y = y
    this.radius = radius
    this.body = Bodies.circle(this.x,this.y,this.radius,options)
    
   
    // this.width = width
    // this.height = height
    this.image = loadImage("polygon.png")
        
    World.add(world,this.body)
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push()
        translate (pos.x,pos.y)
       // rotate (angle)
        //imageMode(CENTER)
         image(this.image,0,0,this.radius,this.radius)
        pop();
    }
    }