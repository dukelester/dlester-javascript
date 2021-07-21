//The switch is always like if ..else statements

var weight =parseInt(prompt("Enter your weight "));
// document.write("Your weight is  " + weight);
console.log(weight)

switch (weight) {
    case 1: document.write("weight is 1");
        break;
    case 2: document.write("weight is 2");
        break;
    case 3: document.write("weight is 3");
        break;
    case 4: document.write("weight is 4");
        break;
    case 5: document.write("weight is 5");
        break;
    case 6: document.write("weight is 6");
        break;

    default: document.write("weight is  ", weight);
}


