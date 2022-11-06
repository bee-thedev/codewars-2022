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


//========================================= Highest and lowest ===============================

// In this little assignment you are given a string of space separated numbers, 
//and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//   let split = numbers.split(' ').map(function (x) { 
//     return parseInt(x); 
//   });
//   console.log(split)
//   let sort = split.sort((a,b)=>{
//     return b-a;
//   })
//   let arry = [];
//   let popout = sort.pop();
//   let shiftout = sort.shift();

//   arry.push(shiftout, popout);

//   return console.log(arry.join(" "))
// }


function highAndLow(numbers){
  let split = numbers.split(' ').map(Number);
  console.log(split)

 return console.log(`${Math.max(...split)} ${Math.min(...split)}`)
}


highAndLow("1 9 3 4 -5")

//================================= Are they square? =================

// DESCRIPTION:
// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined
// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None

var isSquare = function(arr){
  let result;
  for(let i=0; i<arr.length; i){
    let sqrt = Math.sqrt(arr[i]);
    if(sqrt !== Math.round(sqrt)){
      result = false
    }else{
      result = true
    }
  }
  return console.log(arr.length === 0 ? undefined : result);
}
isSquare([1, 4, 7, 16])
