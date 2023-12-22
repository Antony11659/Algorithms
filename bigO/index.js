import { testTime, string } from './utils.js'
// search for the most common character:
// We have a string and should count the character that 

// time execution is 3.200ms - 4.200ms O(n^2)
const myFunction = (string) => {
let letter = '';
let num = 0;
for (let i = 0; i < string.length; i++) { // O(n)
    let innerNum = 0;
    for (let j = i; j < string.length; j++) { // O(n) * O(n)
        if (string[i] === string[j]){
            innerNum += 1
        }
        if (innerNum > num) {
            num = innerNum;
            letter = string[i]
        }
    }
}
}

// time execution is 0.300 - 0.400 ms O(n)
const letters = {};

for ( let i = 0; i < str.length; i++ ) { // O(n)
    if (!letters.hasOwnProperty(str[i])) {
        letters[str[i]] = 1;
    } else {
        letters[str[i]] += 1;
    }
}
const findMax = (arr) => {

    let max = 0;
    let letter = '';
    for (let i = 0; i < arr.length - 1; i++ ) { // O(n) + O(n)
        const [curLetter, curNum] = arr[i];
        const [nextLetter, nextNum] = arr[i + 1];
        if (curNum > nextNum) {
            max = curNum;
            letter = curLetter;
        } else {
            max = nextNum;
            letter = nextLetter
        }
    }
    return { letter, max };
};
const result = findMax(Object.entries(letters)) // O(n)