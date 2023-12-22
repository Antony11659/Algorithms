const array = [1, 3, 7];
const string = 'AAAABBBCCXYURBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';

const findElement = (arr) => {
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++ ){
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return `max num one is ${max1} \nmax num two is ${max2}`;
};


const findSmallestEvenNum = (arr) => {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (result % 2 === 0 && arr[i] < result) {
        result = arr[i];
      }
      if (result % 2 !== 0) {
        result = arr[1];
      }
    }
  }
  return result;
};

const RLE = (str) => {
  let lasLetter = str[0];
  const result = [];
  let count = 1;
  for (let i = 1; i < str.length; i++) { 
    if (str[i] === lasLetter) {
      count += 1;
    }

    if (str[i] !== lasLetter) {
      const el = `${lasLetter}${count > 1 ? count : ''}`;
      result.push(el)
      lasLetter = str[i];
      count = 1;
    }

    
  }
  result.push(`${lasLetter}${count}`);
  return result.join('');
};