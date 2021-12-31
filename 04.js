    //Two to one

    // Take 2 strings s1 and s2 including only letters from ato z.
    // Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
    //
    // Examples:
    // a = "xyaabbbccccdefww"
    // b = "xxxxyyyyabklmopq"
    // longest(a, b) -> "abcdefklmopqwxy"
    //
    // a = "abcdefghijklmnopqrstuvwxyz"
    // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"




function longest(s1, s2) {
    let str = ''
    let arr = s1 + s2
    arr.split("")
    let arr_1 = [...new Set(arr)]
    arr_1.sort((a,b) => a < b ? -1 : 1)
    for (let i = 0; i < arr_1.length; i++) {
        str += arr_1[i]
    }
    return str
}
