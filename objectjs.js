 var temp = {}; //var temp = new Object();

 temp.age = 12;
 temp.name = "James";
 temp.state = "Kumasi";

 temp.printPerson = function() {
     console.log(this.name + ", " + this.age + "," + this.state);


     return temp;
 }

 var peopleFactory = {}
 peopleFactory.sch = 5;
 peopleFactory.cl = 6;
 console.log(this.sch);


 let age = prompt("Enter your age");
 age = parseInt(age);
 if (age > 60) {
     console.log("age with grace");
 } else if (age > 30) { console.log("Your ministry has just begun"); } else { console.log("As a young man keep your ways pure"); }

 var weight = parseInt(prompt("Please enter your weight "));
 switch (weight) {
     case (weight < 20):
         console.log("weight is 1");

     case (weight < 40):
         console.log("weight is 2");
     case (weight < 60):
         console.log("weight is 3");
     default:
         console.log("weight is not found");
 }