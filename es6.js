// JAVASCRIPT OBJECTS AND OTHER JS TRICKS

// let game = prompt("Enter your favorite game");
// switch (game) {
//     case "football":
//         console.log("I dont want to watch football");
//         break;
//     case "Hockey":
//         console.log("I dont want to watch hockey");
//         break;
//     case "cricket":
//         console.log("I love cricket");
//         break;
//     default:
//         console.log("match not found");
// }

// NAMED FUNCTION
function Sam(q, o) {
    return q - o;
}

console.log(Sam(7, 1));


// ANONYMOUS Function
var stake = function(i, j) {
    return i / j
}

console.log(stake(9, 3));

// FUNCTION TYPES - CONSTRUCTOR
var t = new Function("b",
    "return b*b;");

console.log("constructor:" + t(6));


// FUNCTION TYPES - SELF INVOKING

(function(l) {
    console.log(l * l);
    return l * l;
})(3);

//OBJECT CREATION JSON JAVASCRIPT OBJECT NOTATION
// CREATING WITH INITIAL SET OF PROPERTIES WITH {}
var People = {
    pename: "Prince",
    peage: 12

}
console.log(People.peage + " My name is " + People.pename)

//CREATING OBJECT with constructor function new operator
function Person() {
    this.pname = "James"
    this.age = 12
}

let s = new Person();
console.log(s.pname + " is " + s.age);
//CREATING OBJECT {}WITH INITIAL SET OF PROPERTIES ATTRIBUTES WITH .(DOT)
var human = {};
human.hname = "Simeon";
human.hage = 24;
console.log(human);
// creating an object initial set of properties with[]
var woman = {}
woman['wname'] = "Samuel";
woman['wage'] = 56;
console.log(woman);
delete woman.wage;
console.log(woman);
//CREATING OBJECT WITH Object.create()
var Animal = {
    type: "Invertibrates",
    displayTypes: ""
}

//EVENT LISTERNER
const btn = document.getElementById('btn');
var bf = document.getElementsByTagName('h1');

function colorChange() {
    btn.setAttribute("style", "background-color:tomato");
    bf.innerHTML = "CLicked button";

}

function validateForm() {
    const fname = document.getElementById('name');
    const fage = document.getElementById('age');
    const fval = fname.value;

    if (fname.value === "") {
        alert("Please enter username")
    }

    if (fage.value === "") {
        alert("Please enter your age");
    }



}
btn.addEventListener('click', colorChange)
