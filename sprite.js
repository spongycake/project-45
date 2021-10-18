class spriite {
    constructor(x,y,width,height){
    var options = {
        restitution : 0.5,
        density : 12
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.x = x.
    this.y = y
    this.width = width
    this.height = height
    this.image = loadImage("ufo6.png");
    World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}