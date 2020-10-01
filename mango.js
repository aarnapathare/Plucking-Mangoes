class Mango {
    constructor(x,y){
       var options={
           isStatic:true,
           restitution:0,
           friction:1,
       } 
       this.body = Bodies.circle(x, y, 20, options)
       this.Radius = 45
       this.image = loadImage("mango.png")
       World.add(world, this.body)

    }
    display(){
push();
fill("pink")
translate(this.body.position.x, this.body.position.y)
       imageMode(RADIUS)
    image(this.image, 0,0,this.Radius, this.Radius)
pop();
    }
}
