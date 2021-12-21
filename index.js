//1-> console API
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2-> Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an error");

// 3-> JavsScript Variables
// Container to store data values

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4-> Data types in JavaScript
// numbers
var num1 = 455;
var num2 = 54.32;
// String
var str1 = "This is a string";
var str2 = 'This is a string';
// objects
var marks = {
    ravi: 432,
    tushar: 3342,
    tango: 53.232
}
// console.log(marks);
// booleans
var a = true;
var b = false;
// console.log(a,b);

// var und = undefined;
var und;
// console.log(undefined);

var n = null;
// console.log(n);

/*
At a very high level, there are two types of data type in JavaScript  
1. Primitive data types: undefined, null, number, string, boolean, Symbol 
2. Reference data types : Arrays and Objects
*/

// var arr = [1, 2, "Chotu", 4, 5]
// console.log(arr);

// Operators
var a = 34;
var b = 54;
// console.log("This is value of a + b",a+b);
// console.log("This is value of a - b",a-b);
// console.log("This is value of a * b",a*b);
// console.log("This is value of a / b",a/b);

// Assignment Operators
var c = b;
// c+=2;
// c-=2;
// c*=2;
// c/=2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 54;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

// Logical Operators
// Logical And
// console.log(true&&true)
// console.log(false&&true)
// console.log(true&&false)
// console.log(false&&false)

// Logical OR
// console.log(true||true)
// console.log(false||true)
// console.log(true||false)
// console.log(false||false)

// Logical not
// console.log(!false)
// console.log(!true)

//function in javaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
//DRY = Do not repeat yourself

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2); 

/*
var age =19;
if (age>18) {
    console.log("You can drink rasna water")
}
// else{
//     console.log("you cannot a drink a rasna water")
// }

// if else ladder
if (age >2) {
    console.log("You are not a kid")
    
}
else if(age>26){
    console.log("lekin bacche nahi rahe")
}
else if(age>22){
    console.log(" or bol bacche nahi rahe")
}
else if(age>18){
    console.log(" kay bacche nahi rahe")
}
else{
    console.log("Bache hon kyha")
}
console.log("End of ladder")
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
// for(var i =0; i<arr.length;i++){
//     if (i==2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac=0;
// ac++;
// ac = ac+1;

let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arrrr[j]);
//     j++;
// }while(j<arr.length)

let myarray = ['Fan', 'Camera', 34, null, true];
// Array methods
// console.log(myarray.length);
// myarray.pop();
// myarray.push("tango");
// myarray.shift();
// myarray.unshift("tanogo");

// const newlen = myarray.unshift('tango');
// console.log(newlen);


// console.log(myarray);


// String Methods in JavaScript
let myloveString = "Tango is a good boy good good";
// console.log(myloveString.length);
// console.log(myloveString.indexOf("good"))
// console.log(myloveString.lastIndexOf("good"))

// console.log(myloveString.slice(1,3))
d=myloveString.replace("Rahul","swati");
d=d.replace("good","bad");
// console.log(d,myloveString);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass)
// // elemClass[0].style.background = "yellow";
elemClass[0].classList.add ("bg-primary")
elemClass[0].classList.add ("text-success")

// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

tn = document.getElementsByTagName('div')
// console.log(tn)

createdElemetn = document.createElement('p')
createdElemetn.innerText ="This is create a para"
tn[0].appendChild(createdElemetn)

createdElemetn2 = document.createElement('p')
createdElemetn2.innerText ="This is create "
tn[0].replaceChild(createdElemetn2,createdElemetn)

// removeChild

// Selecting using Query

sel = document.querySelector('.container')
// console.log(sel)
sel = document.querySelectorAll('.container')
// console.log(sel)

// Event in JavaScript
function clicked(){
    console.log('The button was clicked')
}
// window.onload = function(){
//     console.log('The document was loaded')
// }

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked </b>"
    
//     console.log("mouse on container")
// })
// // firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out od container")
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     console.log("mouse up on  container")
// })
// firstContainer.addEventListener('mousedown',function(){
//     console.log("mouse downe  container")
// })

// Arrow Functions
// function summ(a,b){
//     return(a+b);
// }
summ = (a,b) =>{
    return a+b;
}


// SetTimeout and setinterval
logkaro =()=>{
    console.log("I am your log")
}
// clr = setTimeout(logkaro,5000);
// setInterval(logkaro,2000);
// use clearInterval/clearTimeout to cancel setInterval/setTimeout
// clr = setInterval(logkaro,2000);

// JavaScript localStorage
// localStroge.setItem("name","tango")
// localStorage
// localStorage.getItem("name")
// localStorage.removeItem("name")
// localStorage.clear()

// JSON
// JSON is use always ""
obj ={name: 'tango',length:1,a:{this: 'th\ \"at'}}
jso =JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)

parsed = JSON.parse(`{"name":"tango","length":1,"a":{"this": "that"}}`)
// console.log(parsed);


// template litteral 
a=34;
// console.log(`this is my ${a}`)

// var sum=0; 
// for(i=4; i<8; i++) {
//   if (i == 6) {
//     continue; 
//   }
//   sum += i;
// }
// document.write(sum);