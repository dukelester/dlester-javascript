
//functions
//named functions
function addNumbers(a, b, c ,d) { //function declaration
    return a + b + c + d ;
}

var callFunc = addNumbers(23,34,56,77);//function call
console.log(callFunc);

function area (radius){  //function declaration
    var area = 3.142 * radius * radius;
    return area;
}

var myCall = area(90); //function call
console.log("The area of the circle with radius " + myCall);

//anonymous functions

var multiply = function(a,b){
    return a * b
};
var answer = multiply(67,90);
console.log(answer);


setTimeout(function() {
    console.log("Lester time has passed a lot ");
}, 3000);

//constructor => function which is called when an object is created using the new keyword

var myConstructor = new Function("a ,b","return a * b ");
console.log(myConstructor(9,20))

(function (a){
    console.log("Using the self invoking function")
    return a * a
})(20);
