class Box2 extends BaseClass2 {
  constructor(x, y){
    super(x,y,20,20);
    this.image = loadImage("Block2.png");
    this.visibility = 255
  }

  display() {
    //console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else {
      World.remove(world,this.body)
     push()
      this.visibility = this.visibility-5 
      tint(0,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y)
      pop()
    }
  }

};