var Point = /** @class */ (function () {
    //constructor
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //methods
    Point.prototype.draw = function () {
        //TODO
        console.log("I AM DRAW METHOD");
        console.log("X: " + this.x + " & Y: " + this.y);
    };
    Point.prototype.getDistance = function () {
        //TODO
        console.log("I AM getDistance METHOD");
        console.log("X: " + this.x + " & Y: " + this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();
var pointA = new Point(3, 5);
pointA.getDistance();
