


var username
var pass
if (localStorage.getItem("username")) {
    var us = localStorage.getItem("username")
    document.getElementById("txt").setAttribute("value", us)
}

function save() {
     username = document.getElementById("username").value
     pass = document.getElementById("pass").value
    var remebert = document.getElementById("remb").checked
    console.log(username + pass + remebert)
    if (remebert == true) {
        localStorage.setItem("username", username)
        localStorage.setItem("password", pass)
    }
    else {
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }
   
}