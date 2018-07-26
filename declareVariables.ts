function doSomething(){
    for(var i=0; i<5; i++){
        console.log("loop val of i is " + i);
    }
    console.log("Finally val of i(declare using 'var': "+i);
    for(let j=0; j<5; j++){
        console.log("loop val of j is "+j)
    }
    console.log("we can't get j value outside of loop as it declare using 'let'");
    console.log("clarify 'let' keyword");
    console.log("before declare value of j="+j);
    console.log("access 'let' value of j="+j_1)
    let j;
    console.log("after declare value of j="+j);
   
}
doSomething();