var arr = ["Declare and initialize your variables", "Build modular", " Recognize", "Comment", "Beware of recursion", "Be efficient with DOM manipulations", "Avoid global", "Make use of shorthand notation ", "Use Strict Mode to catch silent errors", "Set default values"]


console.log(arr[Math.floor(Math.random() * 10)])

function datee() {
    try {
        var date = new Date();
        return date.toLocaleString()
    } catch (error) {
        console.log(error)
    }
}

function err(){
alert('eroooorrrrrr')
}
var date1=prompt('enter the date in the following format (DD – MM – YYYY)');
function date_1(date1) {
    if (date1.length === 10) {

        var day = date1.substring(0, 2)
        var month = date1.substring(3, 5)
        var year = date1.substring(6, 10)
        var date = new Date(year, month - 1, day)
        return date;
    } else {
        alert('Wong Date Format')
    }
}

function find(arr3, number) {
    var times = 0;
    arr3.forEach((v) => (v === number && times++));
   
    return times;
}

function find1(arr4, caac) {

    arr4.shift();
   return   arr4
   
}
var sorarray=[1,9,10,8,50,60,43,80]
console.log( sorarray.sort(function(a, b){return a-b}))
