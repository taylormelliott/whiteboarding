// Reverse an array of integers in place decending 

// const reverseArray = (arr) => {
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + j; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {

//             }
//         }
//     }

// }


const reverseArray = (arr) => {
    return arr.sort().reverse()
}

const testOne = [1,7,4,9,,5,6]

console.log(reverseArray(testOne))