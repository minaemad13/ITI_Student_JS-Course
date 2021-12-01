

function keyc(event) {

    alert(event.keyCode)
}

function mouc(event) {

    alert(event.button)
}


var el = document.querySelector("#butn2")
if (el) {
    el.addEventListener("click", () => alert("Clock started!"));
} else { console.log("error") }

var d;
var input1 = document.getElementById("butn1");
input1.onclick = function setint() {
    setInterval(function () {
        d = new Date().toLocaleTimeString();
        document.getElementById("cloc").setAttribute('value', d);
    }, 1000)
}

function closetime(e) {
    if (e.altKey && e.key == "w") {
        document.getElementById("cloc").setAttribute('value', "00,00,00");
    }
}
function bord() {
    var textbox = document.getElementById("us");
    textbox.style.border = "solid 1px blue";
}
// var password = document.getElementById("pass1")
//     , confirm_password = document.getElementById("repass1");

// function validatePassword() {
//     if (password.value != confirm_password.value) {
//         confirm_password.setCustomValidity("Passwords Don't Match");
//         confirm_password.style.backgroundColor = "gray";
//     } else {
//         confirm_password.setCustomValidity('');
//         confirm_password.style.backgroundColor = "white";
//     }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;

var flag = false;
function changeSrc(passedImage) {
    passedImage.src = "imahes/Filled_star.png"
    console.log("--------")

}
function changeSrc1(passedImage) {
    if (!flag) {
        passedImage.src = "imahes/empty_star.png"
    }

}

function changeSr2(passedImage) {
    flag = !flag;
}
function ser() {
    var ser = document.getElementById("texxt")
    ser.style.width = "60%";
    ser.style.boxSizing = "border-box"
    ser.style.borderRadius = "4px"
    ser.style.border = " 2px solid #ccc"
    ser.style.padding = "12px 20px 12px 40px"
}
function ser2() {
    var ser = document.getElementById("texxt")
    ser.style.width = "30%";
    ser.style.border = "0.5px solid black";
    ser.style.height = "5px";
    ser.style.borderRadius = "1px"
}


function _set(pressimg) {
    pressimg.style.opacity = 1
    setInterval(function () {

        if (pressimg.style.opacity > 0.3) {
            
            pressimg.style.opacity -= 0.1
            console.log(":::::::::")
        }
    }, 500);  
}

function oppes(pressimg) {
    var x= 0.3
    pressimg.style.opacity = 0.3
    
    setInterval(function () {
   
        if (pressimg.style.opacity < 1) 
        {
            x=x+0.1;
            pressimg.style.opacity = x
            console.log(":::::::::1")
          console.log(  pressimg.style.opacity)
        }
    }, 500);  
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});

const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#password1');
togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});



