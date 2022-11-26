// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
          el = ' ' + el
        }
        return el
      })
      return console.log(string.join(''))

        //  return   console.log(string.match(/^[A-Z]?[^A-Z]*|[A-Z][^A-Z]*/g).join(' '));
        
}


solution("camelCasing")

