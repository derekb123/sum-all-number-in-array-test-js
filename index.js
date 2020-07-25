// function sumItems(array) {
//   array.forEach((element) => {
//     if (Array.isArray(element)) {
//       sumItems(element);
//     }
//     else {
//       if (array.length > 1) {
//         array.shift();
//         return array[0] + sumItems(array);
//       }
//       else {
//         return array[0];
//       }
//     }
//   });
// };

// const testArr = [4,2,[3,4]];

// console.log(sumItems(testArr));

function sumItems(array) {
  if (array.length > 1) {
    array.shift();
    return array[0] + sumItems(array);
  }
  else {
    return array[0];
  }
};

const testArr = [4,2,3,4];

console.log(sumItems(testArr));

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