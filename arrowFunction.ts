var log = function (message){
    console.log("LOG: "+message);
}

//arrow function
var doLog =(message)=>{
    console.log("ARROW function: "+message);
}

log("I am simple JS message");
doLog("I am advance TypeScript message implemented using Arrow function which is same as lamda function of C#");