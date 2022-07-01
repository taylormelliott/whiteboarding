// Write a function that checks if two string are permutations of each other


const checkPermute = (stringOne, stringTwo) => {
    if (stringOne ==! stringTwo) {
        return false
    } else {
        const sortedStringOne = stringOne.toLowerCase().split('').sort().join('')
        const sortedStringTwo = stringTwo.toLowerCase().split('').sort().join('')
        return sortedStringOne === sortedStringTwo
    }
}

const firstString = 'Hello World'

const secondString = 'world hello'

console.log(checkPermute(firstString, secondString))