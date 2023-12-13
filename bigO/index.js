const str = 'aba';
let letters = {};

for ( let i = 0; i < str.length; i++ ) {
    if (!letters[str[i]]) {
        letters[str[i]] = 0;
    } else {
        letters[str[i]] = 1
    }
}
console.log(letters);