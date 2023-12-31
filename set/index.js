const array = [1, 2, 4, 5, 6];

const findPair = arr => {
  let x = 5;
  let result = '';
  for(let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++) {
        const a = arr[i];
        const b = arr[j];
        if (a + b === x){
            result += `${a}:${b}`;
        }
    }
  }
  return result;
};

console.log(findPair(array));