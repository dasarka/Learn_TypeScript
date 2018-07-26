var Point = /** @class */ (function () {
    function Point() {
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
point.x = 1;
point.y = 3;
point.getDistance();
