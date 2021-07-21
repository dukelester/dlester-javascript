console.log("This is a script to print out on the console");

console.log('The data types and variables ===' +
    'integers' +
    'float' +
    'boolean' +
    'double' );

var k = 78; //Integer data types
var p = 788.8908; //float number types

var dfgh = 78.90990898890877; // double data types
console.log(typeof dfgh);


var name = "duke lester";  //string data types

console.log(typeof name);

var k2 = 'k222'; //characters data types
var c = k + p;
var myadd = k * p;
var age = k / 10;
var sub = k - p;

console.log(myadd, p,age,sub);
console.log(name,k2,dfgh);
console.log(c);

console.log(typeof c);

// document.write(myadd, p,age,sub);
// document.write(name,k,dfgh);
// document.write(c);

var myArray = ['duke', 'james', 89.908, 'mercy', 'jooy', 789,754,34567]; //js arrays method1
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray.length) //the number of items in the array


console.log(typeof myArray)

var myArray2 = new Array(90,68,5467,'john', 'mwea', 'juja'); //js array method2
//accessing elements use the indexing which starts from 0
console.log(myArray2);
console.log(myArray2[0]);
console.log(myArray2[5]);
console.log(myArray2.length) //the total number of elements in the array
console.log("Hello duke " + "This is concatenation");
console.log("My array is " + myArray2);


var age = prompt('Enter your age');
console.log('My age is ', age)
console.log(typeof age);
var myNewAge = parseInt(age) + 10;
console.log('My new age is now ', myNewAge);
document.write('My new age is now ', myNewAge);

alert("Hello programmer");

var MyName = window.alert("Ebnter your name ");
document.write("My name is " + MyName)


