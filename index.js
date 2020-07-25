//**SMALLER ARRAY THAT WORKS**/

// function sumItems(array) {
//   if (array.length > 1) {
//     return array.shift() + sumItems(array);
//   }
//   else {
//     return array[0];
//   }
// };

// const testArr = [4,2,3,4];

// console.log(sumItems(testArr));


function sumItems(array) {
  if (array.length > 1) {
    if (Array.isArray(array[0])) {
      console.log(array[0]);
      return sumItems(array.shift()) + sumItems(array);
    }
    else {
      return array.shift() + sumItems(array);
    }
  }
  else {
    return array[0];
  }
};

const testArr = [[4,2],3,4];

console.log(sumItems(testArr));

