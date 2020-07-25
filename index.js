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


// function sumItems(array) {
//   if (array.length > 1) {
//     if (Array.isArray(array[0])) {
//       sumItems(array[0]);
//     }
//     else{
//       array.shift();
//       console.log(array);
//       return array[0] + sumItems(array);
//     }
//   }
//   else {
//     return array[0];
//   }
// };

//   const testArr = [1,2,[3,4]];

//   console.log(sumItems(testArr));


// function sumItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       return array[i] + sumItems(array[i-1]);
//     }
//     else {
//       return array
//     }
//   }
// };

//   const testArr = [1,2,3,4];

//   console.log(sumItems(testArr));





// function sumItems(array) {
//   for (let element of array) {
//     if (Array.isArray(element)) {
//       sumItems(element);
//     }
//     else {
//       if (array.length > 1) {
//         array.shift();
//         if (Array.isArray(array[0])) {
//           sumItems(array[0]);
//         }
//         else{
//         return array[0] + sumItems(array);
//         }
//       else {
//         return array[0];
//       }
//     }
//   }
// };

// const testArr = [4,2,[3,4]];



// function sumItems(array) {
//   if (array.length = 1) {
//     return array[0];
//   }
//   else {
//     for (element in array) {
      
//     }
//     if (Array.isArray(array)) {
      
//     }
//   }
// });
// };

// function sumItems(array) {
//   let final = 0;
//   for (item in array) {
//     final += item;
//   }
//   return item;
// };

// module.exports = sumItems;foreach(array)