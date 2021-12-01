
function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://reqres.in/api/users/", true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data1 = JSON.parse(this.responseText)
           
            for (var i = 0; i < data1.data.length; i++) {
                
                document.getElementById("div2").innerHTML += "<option value="+i+"> first_name: " +data1.data[i].first_name+"</option>" ;
                document.getElementById("div2").innerHTML += "<option value="+i+"> last_name:" +  data1.data[i].last_name +"</option>";
                document.getElementById("div2").innerHTML += "<option value="+data1.data[i].avatar+"><img style=' border-radius: 100%;width='15px';width='15px'; ' src="+ data1.data[i].avatar +"></option>";
            }

        }
    }
}

function getData1() {
    var id = prompt("enter id of user ")
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://reqres.in/api/users/"+id, true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data1 = JSON.parse(this.responseText)
           
            
                
                document.getElementById("div3").innerHTML += "<br> first_name: " +data1.data.first_name
                document.getElementById("div3").innerHTML += "<br> last_name:" +  data1.data.last_name
                document.getElementById("div3").innerHTML += "<br><img style=' border-radius: 100%;width='15px';width='15px'; ' src="+ data1.data.avatar +">";
            

        }
    }
}
function print(value)
{
    var e = document.getElementById("div2");
    
    var strUser = e.options[e.selectedIndex].text;
   
    document.getElementById("div4").innerHTML+="<br>"+strUser;
}

var Student = { ID: 1, Name: "Mina", Adress: "Cairo", Age: 21, Skills: ["music", "football"], IsLeader: true, }

var arrStudents = [{ ID: 1, Name: "Mina", Adress: null, Age: 21, Skills: ["music", "football"], IsLeader: true, }
    , { ID: 1, Name: "Mina", Adress: "Cairo", Age: 21, Skills: ["music", "football"], IsLeader: true, }
    , { ID: 1, Name: "Mina", Adress: "Cairo", Age: 21, Skills: ["music", "football"], IsLeader: true, }
]

//console.log(arrStudents1)
for (var i = 0; i < arrStudents.length; i++) {
    document.getElementById("div1").innerHTML += "<br>" + arrStudents[i].Name;
    document.getElementById("div1").innerHTML += "<br>" + arrStudents[i].Skills;

}
