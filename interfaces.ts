interface Point{
    x : number,
    y : number
}
let drawPoint=(point : Point)=>{
    //TODO
    console.log("point.x "+point.x);
    console.log("point.y "+point.y);
}
drawPoint({
    x : 1,
    y : 2
});