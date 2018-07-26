export class Point{
    //constructor
    constructor(private _x ?: number,public _y ?: number){
 }
     //methods
     draw(){
         //TODO
         console.log("I AM DRAW METHOD");
         console.log("X: "+this._x+" & Y: "+this._y);
     }
 
 }