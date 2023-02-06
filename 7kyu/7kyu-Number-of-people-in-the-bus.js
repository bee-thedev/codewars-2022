// DESCRIPTION:
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people...
// that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, 
//they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
//So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


var number = function(busStops){
    // Good Luck!
let entry;
let exit;

let arr1 = []
let arr2 = []

    for(let i=0; i < busStops.length; i++){
        entry = busStops[i].shift();
        exit = busStops[i].pop()
// Pushing said split of values into arra1 and arr2
        arr1.push(entry)
        arr2.push(exit)
    }

    // Sum of arr1 items
     let sum1 = arr1.reduce(function(a, b){
       return a + b;
     });
     console.log(sum1)
    
     // Sum of arr2 items

     let sum2 = arr2.reduce(function(a, b){
       return a + b;
     });
     console.log(sum2)

     let total = sum1 - sum2;
     console.log(total)
  }

 number ([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);