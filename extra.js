// 7kyu- Complementary DNA

// DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the...
// development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    //your code here
  }

  DNAStrand()

//7kyu- reverse words
//DESCRIPTION:
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"


//7kyu-  We've crashed on a distance planet in our galaxy! When do leap years occur here?
// Our spaceship has crashed on an unknown planet many light years away from earth.
// Thankfully we were able to send out a distress signal right before the crash. 
//Help will be here shortly but we need to gather as much information about this planet as we can before we're rescued.

// Before our control panels were destroyed, we were able to gather the duration of this planet's orbit around it's...
// planetary system's star.

// Among other things, we need to determine if a given year is a leap year on this planet.

// Your Task:

// Given the duration of the planet's orbit (in days) and a specific year on this planet, determine if the given year is...
// a leap year here.

// For example:

// On Earth, a single rotation around the sun takes 365.25 days. Therefore, each year takes 365 days but ...
//every forth year is a leap year and takes 366 days. The next leap year on Earth will occur in 2020.

// Notes: To make things easier, the period of the leap years will always be a power of 2. Good luck!

function isLeapYear(duration, year) {
  if(duration * year %1 === 0){
    return true
  }else{
    return false
  }
}

isLeapYear(365.25, 2018)

//6kyu - Your order, please

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. 
//This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  let array = words.split(" ")
  console.log(array)
  const reg = new RegExp(/\d+/g)
  console.log(reg)
  console.log(array.sort((a, b)=>{
    return a.match(reg) - b.match(reg)
  }))
  return  array.join(' ')
  }

order("B6ob I1gor E5rnst Gre4g Fion7a 2Alice C3indy'");


//8kyu - Correct the mistakes of the character recognition software

// DESCRIPTION:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	return console.log(string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I"));
}

correct("BEEN1SH")


// 7kyu- esreveR

DESCRIPTION:
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
  return console.log(array.map((item,index) => array[array.length-1-index]));
}

reverse([1,2,"low",3])

//7kyu - Summing a number's digits

// Write a function named sumDigits which takes a number as input and returns the sum of the...
// absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  let intoString = number.toString()
  let toSplit = intoString.split('')
  
  console.log(toSplit)

  let stringToNumber = toSplit.map(str => {
    Number(str);
})

return console.log(stringToNumber)
}
sumDigits(89)
