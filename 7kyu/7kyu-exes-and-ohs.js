// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
//The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {

    console.log((str.match(/o/g) || []).length)

    let numberOhs = (str.match(/o/gi)||[]).length;
    let numberExes = (str.match(/x/gi)||[]).length;
    console.log(numberExes)
    console.log(numberOhs)
    

    if(numberOhs === numberExes ) return console.log(true)
    else if(numberOhs !== numberExes) return console.log(false)

}

XO("xxxm")