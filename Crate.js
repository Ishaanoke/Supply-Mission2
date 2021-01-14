class Crate{
    constructor(){

var option={

    isStatic:true
}
  this.bodyl=Bodies.rectangle(300,610,20,100);
World.add(world,this.bodyl);

this.bodyr=Bodies.rectangle(500,610,20,100);
World.add(world,this.bodyr);

this.bodyb=Bodies.rectangle(400,630,200,20);
World.add(world,this.bodyb);


}
display(){
    rectMode(CENTER);
    fill("Red");
    rect(this.bodyl.position.x,this.bodyl.position.y,20,100);
    rect(this.bodyr.position.x,this.bodyr.position.y,20,100);
    rect(this.bodyb.position.x,this.bodyb.position.y,200,20);
}
    }
