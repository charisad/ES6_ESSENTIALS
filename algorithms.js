// //FIZZBUZZ ALGORITHM
// let d = 0;
// for (d = 1; d < 50; d++) {
//     if (d % 15 == 0) {
//         console.log(d + " is fizzbuzz");
//     } else if (d % 3 == 0) {
//         console.log(d + " is now fizz");
//     } else if (d % 5 == 0) {
//         console.log(d + " is now buzz");
//     } else { console.log(d) }
// }

// todays forecast in kelvin
const kelvin = 0
    //todays forecast in celsius
let celsius = kelvin - 273
    //todays forecast in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32
    // Rounded value of fahrenheit
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)