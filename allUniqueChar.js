// Write a function that compares if a string has all unique characters

const allUniqueChar = (string) => {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false
            } 
        }

    }
    return true
}

const stringOne = "Helo fght"

console.log(allUniqueChar(stringOne))