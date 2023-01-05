/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

// Extra arguments are ignored

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    // the word 'rest' is not fixed, you can use any word as the parameter which signifies the rest of the parameters passed into the function
    for (let i of rest){
        sum += i;
    }
    // the return is important, otherwise you get 'undefined' as a result
    return sum; 
};
let cat = sumRest(1,2,3,4,5,6,7);
console.log(cat);

// challenge
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

// the word 'rest' is not needed, just the syntax ... three dots
const updateSortReverse = (arr,...letters) => [...arr, ...letters].sort().reverse();
let reverseSort = updateSortReverse(moreMixedLetters,'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);
