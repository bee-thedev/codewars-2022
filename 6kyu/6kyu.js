// ======================= Calculate the area of a regular n sides polygon inside a circle of radius r =============================

// Write the following function:

// function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
// It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a..
// circle of radius circleRadius, circle-radius, or circle_radius which passes through all the...
// vertices of the polygon (such circle is called circumscribed circle or circumcircle). 
//The answer should be a number rounded to 3 decimal places.

// Input :: Output Examples

// areaOfPolygonInsideCircle(3, 3) // returns 11.691

// areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

// areaOfPolygonInsideCircle(4, 5) // returns 38.042
// Note: if you need to use Pi in your code, use the native value of your language unless stated otherwise.


function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    let r = circleRadius
    let n = numberOfSides
    
      let formula = ((r * r * n) * Math.sin((360 / n) * Math.PI / 180)) / 2; // Use Math.PI for value of Pi
     
      console.log(Number(formula.toFixed(3)))

      return Number(formula.toFixed(3))
    }

  areaOfPolygonInsideCircle(5.8, 7)


// ===========

//DESCRIPTION:
//In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

//Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
//--the order is: uppercase letters, lowercase, numbers and special characters.
//More examples in the test cases.

//Good luck!


function solve(s){
 //..
} 
