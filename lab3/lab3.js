

var RegFullName = /^([a-z]+[\s]*[a-z]+[\s]*)+$/i
var RegEmail = /^\w+([-+.']\w+)*@[A-Za-z\d]+\.com.eg$/
var FullNAme, Email
function val() {
    while (true) {
        FullNAme = prompt("Enter Full Name");
        Email = prompt("Enter Email");
        if (RegFullName.test(FullNAme) && RegEmail.test(Email)) {
            document.getElementById("h3").innerHTML = "valid"
            break;
        }
    }
}
var mywin;
var t;
function setint() {
    

    t = setInterval(function () {
        document.getElementById("h1").innerHTML = new Date().toLocaleTimeString();
    }, 1000)

}

function opeen() {
    setTimeout(function () {
        mywin = window.open("htt.html");
        mywin.document.write("This is myWindow");
    }, 3000);


}
function clos() {
    mywin.close();
}
function preventA(e) {
    var reg = /[0-9]/
    if (reg.test(e.key))
        e.preventDefault();
}
var countDownDate = new Date("Dec 1, 2021 16:37:52").getTime();

var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + " Day "
    document.getElementById("hours").innerHTML = hours + " Hour "
    document.getElementById("mins").innerHTML = minutes + " Min "
    document.getElementById("secs").innerHTML = seconds + " Secound "

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("mins").innerHTML = "00"
        document.getElementById("secs").innerHTML = "00"
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000);


function show() {
    alert("Thanks for Visiting My Website");
}

