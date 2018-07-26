class Point{
    x   :   number;
    y   :   number;

    //constructor
    constructor(x ?: number,y ?: number){
        this.x=x;
        this.y=y;
    }
    //methods
    draw(){
        //TODO
        console.log("I AM DRAW METHOD");
        console.log("X: "+this.x+" & Y: "+this.y);
    }

    getDistance(){
        //TODO
        console.log("I AM getDistance METHOD");
        console.log("X: " + this.x + " & Y: " + this.y);
    }
}
let point = new Point();
point.draw();
let pointA=new Point(3,5);
pointA.getDistance();