document.getElementById("header1").innerHTML="***===================JUJA PROGRAMMING SCHOOL===" +
    "================***";

document.getElementById("para").innerHTML="+++++END OF YEAR EXAMINATION +++++";


document.getElementById("header3").innerHTML="COURSE INSTRUCTOR";



 var Fname = prompt("Enter your First Name");
document.getElementById("label1").innerHTML= document.write(Fname);
 // document.write(Fname);

document.getElementById("label2").innerHTML="Last Name  </p>";
// var Lname = prompt("Enter your Last Name");
// document.write(Lname);


var marks = ['mark1','mark2','mark3','mark4','mark5','mark6']; //array of marks

marks[0] = parseInt(prompt("Enter mark 1"));
marks[1] = parseInt(prompt("Enter mark 2"));
marks[2] = parseInt(prompt("Enter mark 3"));
marks[3] = parseInt(prompt("Enter mark 4"));
marks[4] = parseInt(prompt("Enter mark 5"));
marks[5] = parseInt(prompt("Enter mark 6"));

console.log(marks[0],marks[1],marks[2],marks[3],marks[4],marks[5]);

var totalMark = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] ;
console.log('The total mark is ', + totalMark);

var average = totalMark / (marks.length);
console.log('The average mark is ', + average);

if (average >= 80 && average <= 100){
    var grade = 'A';
    var remark = "Excellent work buddy";
    console.log("Your grade is " + grade + " " + remark);
}
else if (average >= 70 && average < 80){
    var grade = 'B';
    var remark = "Very Good work buddy";
    console.log("Your grade is " + grade + " " + remark);
}

else if (average >= 60 && average < 70){
    var grade = 'C';
    var remark = "Good work buddy";
    console.log("Your grade is " + grade + " " + remark);
}

else if (average >= 50 && average < 60){
    var grade = 'D';
    var remark = "Good trial buddy";
    console.log("Your grade is " + grade + " " + remark);
}
else if (average >= 30 && average < 40){
    var grade = 'E';
    var remark = "You can do better buddy";
    console.log("Your grade is " + grade + " " + remark);
}
else if (average >= 0 && average < 30){
    var grade = 'F';
    var remark = "You failed, work extra hard buddy";
    console.log("Your grade is " + grade + " " + remark);
}
else{
    console.log('The average mark is invalid or does not exist');
    console.log('Counter check the marks again. Thank you');
}


console.log("=====Created by Duke Lester Tech Solutions ======@2021===");





