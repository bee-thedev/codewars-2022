// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log(capital[4])
   
    console.log(string)
        let searchCapital = string.split('').match(/[A-Z]/g)
        
}


solution("camelCasing")