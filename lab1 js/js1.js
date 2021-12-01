alert("Welcome to my site");
var Name = prompt("Enter Your Name :")
document.getElementById("h1").innerHTML = "Welcome " + Name;

function calc(num1, num2) {


    num1 = parseInt(num1)
    num2 = parseInt(num2)
    return console.log(num1 + num2);;
}
function mathsexp(mathsexp) {

    return alert(eval(mathsexp))
}


function valid(Name, birthYear) {
    while (typeof (Name) !== "string") {
        Name = prompt("Enter Your Name")
    }
    while (typeof (birthYear) !== "number" && birthYear <= 2010) {
        birthYear = prompt("Enter birth year")
    }
}
function calage(birthYear) {
    birthYear = parseInt(birthYear)
    return 2021 - birthYear
}






















