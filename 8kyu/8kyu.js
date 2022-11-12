//===================================== How good are you really? ===============================

//DESCRIPTION

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((a,b) => a+b)/classPoints.length;
    console.log(average);
    if(yourPoints > average){
        return true;
    }else{
        return false;
    }
  }

  betterThanAverage([23, 24, 17, 25, 15],14)

  //===================================  Function 2 - squaring an argument ============================

//   DESCRIPTION:
// Now you have to write a function that takes an argument and returns the square of it.


// Write the "square"-function here

function  squareIt (arg){
    return console.log(arg * arg)
}

squareIt(2)

