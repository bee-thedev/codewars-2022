/// DESCRIPTION:
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find...
// the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].sort(function(a, b){return a-b});
        console.log(arr[i])
        for(let j=0; j < arr[i].length; j++){
            console.log(arr[i][0])
        }
         console.log(sum = sum + arr[i][0])
  }
  return console.log("Sum final= " + sum)
}

  sumOfMinimums([[40, 63, 94, 39, 150], [135, 43, 22, 139, 126], [141, 25, 44, 46, 135]]);