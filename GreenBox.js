class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
display(){
    if(this.body,speed<3){
    fill(87,200,206);
    super.display();
}
else{
    World.remove(world,this.body);
    Push();
    this.Visibility=this.Visibility-5;
    tint(225,this.Visibility);
    rect(this.x,this.y,20,30);
    pop();
}
}
}

   
