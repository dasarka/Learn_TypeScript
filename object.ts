class Point{
    x   :   number;
    y   :   number;

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
point.x=1;
point.y=3;
point.getDistance();