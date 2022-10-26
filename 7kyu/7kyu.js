//========================================= Strings end with ======================================================

// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    console.log(str.endsWith(ending))
  }

  solution('abcde', 'cde')

//==========================================   Descending order ====================================================

// DESCRIPTION:
//   Your task is to make a function that can take any non-negative integer as an argument and ...
//return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
  let array = n.toString().split('')
  console.log(array)

  array.sort((a,b)=>{
    return b-a
  })

  return Number(array.join(''));
}

descendingOrder(42145)

