const calCulateNumbers = (...args) => {
  const newArr = args.flat(Infinity)
  const sum = newArr.reduce((sum, value) => (sum = sum + value))
  console.log(sum, 'sum')
}

console.log(calCulateNumbers([10, [20, [30, 40], 50]], 60, [70, 80], 90))

// const flatten = args =>
//   args.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
// const newArray = Array.prototype.concat(Array, args)
// console.log(newArray)
// var myNewArray = newArray.reduce((prev, curr) => prev.prototype.concat(curr))
// console.log(myNewArray)
// for (var i = 0; i < newArray.length; i++) {
//   sumArr = newArray[i] + sumArr
// }
// console.log(sumArr, 'sum using for loop')
// }

console.log(calCulateNumbers([10, [20, [30, 40], 50]], 60, [70, 80], 90))

// console.log(flatten, 'es6')
// for (var i = 0; i < args.length; i++) {
//   if (typeof args[i] !== 'object') {
//     tempArr[i] = args[i]
//   } else {
//     for (var k = 0; k < args[i].length; k++) {
//       if (typeof args[i] !== 'object') {
//         tempArr[i] = args[i]
//       } else {
//         for (var j = 0; j < args[k].length; j++) {
//           console.log(args[k])
//         }
//       }
//     }
//   }
// }
