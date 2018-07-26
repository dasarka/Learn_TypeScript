var count = 5;
var count1;
count1 = "a";
//all type
//any
var a;
//string
var b;
//boolean
var c;
//number
var d;
//array
var e;
var f = [1, 2, 3]; //optional
//work with colors
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var banckgroundColor = Color.BLUE;
