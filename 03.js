//  Given a sequence of numbers, find the largest pair sum in the sequence.
//
//    For example
//
//    [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//    [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
//    Input sequence contains minimum two elements and every element is an integer.


function largestPairSum(numbers) {
    let arr = [];
    numbers.sort((a, b) => a < b ? -1 : 1)
    arr = numbers.slice(-2)
    let sum = arr[0] + arr[1]
    return sum
}