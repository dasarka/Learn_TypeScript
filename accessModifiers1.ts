class Point{
     //constructor
     constructor(private x ?: number,public y ?: number,private z ?: number){
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