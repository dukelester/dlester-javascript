//For loop on arrays

var myNames = ['duke','lester','james','monica', 'jane'];
var numbers = [12,23,454,67,89,790.790, 78,57]

//accessing the values now
console.log("The values in the myNames array");
for (k = 1;  k < myNames.length; k++){

    console.log(k);
    console.log(myNames[k]);

    console.log("The values in the numbers array");
    for (num = 1; num < numbers.length; num++){

        console.log(numbers[num]);
    }
}

//new loop with for in loop

// var cars = ["BMW","Benz","Prado","Isuzu"];
var cars = ["BMW","Benz"];
var mileage = new Array();
var value;

for (car = 0; car < cars.length; car++){
    value = parseInt(prompt("Enter the mileage of " + cars[car]));
    mileage[car] = value;

}
for (myCar in mileage ){
    document.write("The mileage for the  " + cars[car] + "is  " + mileage[myCar]);
    console.log("The mileage for the  " + cars[car] + "is  " + mileage[myCar]);
}

var sum = 0;
var totalMileage = sum + mileage[myCar];
document.write(totalMileage);
console.log(totalMileage);

var averageMileage = totalMileage / mileage.length;
console.log(averageMileage);
document.write(averageMileage);


//while loops
//do while loop

var p = 200;

var myNum = parseInt(prompt("Hey enter a number "));
while (p > myNum ){
    console.log(p);
    myNum++;
    var sub = p - myNum;
    console.log("The number P is greater than myNum by", sub );

}
var k = parseInt(prompt("Enter another number k "));

do {
    var newK =  k * 100;
    console.log('Heeey');
    console.log("The new number is " + newK);
   k++;
}
while (k < 100)
var newK =  k * 100;
console.log("The new number is " + newK);