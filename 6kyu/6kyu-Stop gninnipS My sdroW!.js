// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    //TODO Have fun :)
    let split = string.split(" ");
    console.log(split);
    for(let i = 0; i < split.length; i++){
        let newString= " "
        if(split[i].length >= 5){
            newString = newString + " " + split[i].split("").reverse().join("")
            console.log(newString)
        }
     else{
        console.log(newString = split[i])
     }
     return console.log(newString)
    }
  }

spinWords("Hey fellow warriors");