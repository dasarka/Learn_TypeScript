"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    //constructor
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    //methods
    Point.prototype.draw = function () {
        //TODO
        console.log("I AM DRAW METHOD");
        console.log("X: " + this._x + " & Y: " + this._y);
    };
    return Point;
}());
exports.Point = Point;
