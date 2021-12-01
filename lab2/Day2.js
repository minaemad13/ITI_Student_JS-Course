// var str="welcome@iTi with javascript iTi with"
// var str1="Minia Branch"
//var pos=str.indexOf("iTi",31)

//var pos=str.lastIndexOf("iTi")

//console.log(str.length)
//var pos=str.search("with")
//console.log(pos)
//var newString=str.slice(1,10)
// var newString=str.slice(-15,-5)
//var newString=str.slice(10)
//var newString=str.substring(1,10)

//var newString=str.substr(0,7)

//var newString=str.replace("iTi","NTI")

//var newString=str.toUpperCase()
//var newString=str.toLowerCase()
//var ss=" fffff"
//var newString=str.concat(" ",str1,ss)
//var newString=str.trim()
//var newString=str.charAt(5)
//var newString=str.charCodeAt(5)

//  var str="welcome@iTi with javascript iTi with"
//  var str1="Minia Branch"
// var newString=str.split('@')
// console.log(newString)
// console.log(newString[0])

//console.log(str)

//var name=prompt(confirm("Enter your name"))

//var name=confirm(prompt("Message","Enter your name"))

// var name=confirm("Are you sure to close program !")
// console.log(name)

//Custom Object  ==> user
//Built-in Object 
//BOM
//DOM 

// Array 
//var arr=[1,2,3,30,10,-1,5]
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

// for(var item in arr)
// {
//     console.log(arr[item])
// // }
// //var arr=[1,2,3,30,10,-1,5]
// // for(var item of arr)
// // {
// //     console.log(item)
// // }
// //arr.forEach(printItems)

// // function printItems(value)
// // {
// //     console.log(value)
// // }

// // function printItems(index,value)
// // {
// //     console.log("index is :"+index)
// //     console.log("value is: "+value)
// // }

// // function printItems(value,index,arr)
// // {

// //     console.log("index is :"+index)
// //     console.log("value is: "+value)
// //     console.log("array is:"+arr)
// // }
// // var arr=[1,2,3,30,10,-1,5]
// // console.log(arr.length)
// // arr[arr.length]=50 // arr[7]
// // console.log(arr)
// // arr.push(10)
// // console.log(arr)
// // arr[arr.length]=100
// // console.log(arr)
// // arr.push(10,10,10,10,10,120)
// // console.log(arr)
// // arr.push("Ahmed")
// // console.log(arr)
// // var arr2=["DD","TT"]
// // arr.push(arr2)
// // console.log(arr)
// // console.log(arr[17])
// // arr.push(10)

// // console.log(arr)


// // for(var item of arr)
// // {
// //     console.log(item)
// // }

// // var dimArray=[]   
// // for(var i=0;i<3;i++) //0 1 2
// // {
// //     var arrtoStore=[1,2,3]
// //     dimArray.push(arrtoStore)
// //    // dimArray[i]=[1,2,3]
// // }


// // //console.log(dimArray)
// // var x=[]
// // console.log(x)



//  var arr=[1,2,3,4]
//  arr.pop()
//  console.log(arr)
//  arr.pop()
//  console.log(arr)

//  arr.shift()
 
//  console.log(arr)
//  arr.unshift(10,20,30)
//  console.log(arr)
//  var arr=[1,2,3,4]//1 40 50 3 4
//  delete arr[1]
//  console.log(arr)

// arr.splice(1,0)
// console.log(arr)
//  var arr1=[1,2,3]
//  var arr3=arr.concat(arr1,[10,20,30])
//  console.log(arr3)

// var arr=[50,80,10,60]
// var arr=[5,2,1,"Banana","Orange",0,"Leman","Apple","Mango",[1,8,2]]
// console.log(arr.sort())

// console.log(arr.slice(2,4))

///Math object

//var num1=2 , num2=4 , num3=-10 , num4=5.8
//console.log(Math.abs(num3))
//console.log(Math.pow(num1,num2))
//console.log(Math.round(num4))
//console.log(Math.ceil(num4))
//console.log(Math.floor(num4))

//console.log(Math.random()) //0 -> 1
// console.log(Math.floor(Math.random()*100)) //0 ------> 1

// var names=["Mina","Mohammed","Nada"]
// console.log(names[Math.floor(Math.random()*3)])

// console.log(Math.min(4,1,2,3,0,5))
 //var arr=[4,1,2,3,0,5]
 //console.log(Math.min(arr)) //NaN
//console.log(Math.min.apply(null,arr))


// console.log(Math.max(4,1,2,3,0,5))
// var arr=[4,1,2,3,0,5]
// console.log(Math.max(arr))
// console.log(Math.max.apply(null,arr))


//Date object
 //var date=new Date(2018,11,24,12,30,30,20)
// console.log(date)

// var date=new Date(2018)
// console.log(date)

// var d=new Date();
// console.log(d)

// console.log(d.getFullYear())
// console.log(d.getHours())
// console.log(d.toUTCString())
// console.log(d.toLocaleString())
// d.setFullYear(2018)
// console.log(d.getFullYear())

// Error handling

try
{
    var result=2/0
    console.log(result)
   
}
catch(Error)
{
   console.log(Error.message)
}
finally
{
    console.log("bishdbviufbvoubou")
    console.log("sssssssssssssssssssss")

}
