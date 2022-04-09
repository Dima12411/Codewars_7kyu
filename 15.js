// Sum of all argument

// Write a function that finds the sum of all its arguments


function sum(...n) {
    let sum = 0
    for (let i = 0; i < n.length; i++) {
        sum += n[i]
    }
    return sum
}