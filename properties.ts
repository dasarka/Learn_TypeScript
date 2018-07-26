class Point{
   //constructor
   constructor(private _x ?: number,public _y ?: number){
}
    //methods
    draw(){
        //TODO
        console.log("I AM DRAW METHOD");
        console.log("X: "+this._x+" & Y: "+this._y);
    }

    //properties
    get x(){
        return this._x;
    }
    
    set x(value){
        if(value<0)
            throw new Error("value can't be less than zero");

        this._x=value;
    }

}
let point = new Point(10,15);
point.draw();
console.log("get X() "+point.x);
point.x=100;
console.log("get X() after set X() "+point.x);
//below code throw errow while run our js
//point.X=-100;
//console.log("get X() after set X() with -ve value"+point.X;