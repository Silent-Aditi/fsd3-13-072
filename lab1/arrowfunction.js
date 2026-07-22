// write a fucntion to take number between 0 to 9 and return in words const numberToWord = (num) => {
//     const numberToWord = (digit) => {
//     switch (digit) {
//         case 1: 
//             return "One";
//         case 2: 
//             return "Two";
//         case 3: 
//             return "Three";
//         case 4: 
//             return "Four";
//         case 5: 
//             return "Five";
//         case 6: 
//             return "Six";
//         case 7: 
//             return "Seven";
//         case 8: 
//             return "Eight";
//         case 9: 
//             return "Nine";
//         default: 
//             return "Invalid Number";
//     }
// };

// console.log(numberToWord(5));
// console.log(numberToWord(3));
// console.log(numberToWord(6));

// create another function that takes a number and show the number in word using arrow function
const rollNum = "2503201000072";
const digits = String(rollNum).split("");
    
console.log(digits);
