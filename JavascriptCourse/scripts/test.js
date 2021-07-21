alert('This is the external js which is so recommended');

let numberOne = 78;
let numberTwo = 100;

let ans;
ans = numberOne + numberTwo;

alert('The sum of the two numbers is ' + ans);

let currentResult = 0;
currentResult = currentResult + 10;

function myName (name1, name2) { //function creation also definition
    let fullName = name1 + name2;
    alert('Full name is ' + fullName);
    // return fullName
}
myName('Duke', 'Lester'); //function call

function calculate(amount, quantity){
    let product = 'laptop';
    let total = amount * quantity;
    if (amount >= 200000 ){
        document.writeln('This product is so expensive');
        document.writeln('The cost of ' +quantity + '' + product + 'is' + total);
    }
    else if (amount <= 10000) {
        document.writeline('This is so cheap for a laptop');
        document.writeln('The cost of ' +quantity + '' + product + 'is' + total);

    }
    else {
        document.writeln('This laptop costs', amount);
        document.writeln('The cost of ' +quantity + '' + product + 'is' + total);
    }
    alert('The total amount of the ' + product + 'is ' + total);
}
calculate(20000, 20);

let lester;
lester.addEventListener('Click me', calculate);