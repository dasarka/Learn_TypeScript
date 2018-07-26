var Point = /** @class */ (function () {
    //constructor
    function Point(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    //methods
    Point.prototype.draw = function () {
        //TODO
        console.log("I AM DRAW METHOD");
        console.log("X: " + this.x + " & Y: " + this.y + " & Z: " + this.z);
    };
    Point.prototype.getDistance = function () {
        //TODO
        console.log("I AM getDistance METHOD");
        console.log("X: " + this.x + " & Y: " + this.y + " & Z: " + this.z);
    };
    return Point;
}());
var point = new Point();
point.draw();
var pointA = new Point(3, 5, 2);
pointA.getDistance();
pointA.y = 11;
pointA.draw();
