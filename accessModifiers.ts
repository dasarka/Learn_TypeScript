class Point{
   private x   :   number;
    y   :   number;
    z   :   number;

    //constructor
    constructor(x ?: number,y ?: number,z ?: number){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    //methods
    draw(){
        //TODO
        console.log("I AM DRAW METHOD");
        console.log("X: "+this.x+" & Y: "+this.y+" & Z: "+this.z);
    }

    getDistance(){
        //TODO
        console.log("I AM getDistance METHOD");
        console.log("X: " + this.x + " & Y: " + this.y+" & Z: "+this.z);
    }
}
let point = new Point();
point.draw();
let pointA=new Point(3,5,2);
pointA.getDistance();
pointA.y=11;
pointA.draw();