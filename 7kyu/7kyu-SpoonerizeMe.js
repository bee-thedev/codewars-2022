//A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

//In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

//"not picking" --> "pot nicking"

//Your task is to create a function that takes a string of two words, separated by a space:
// words and returns a spoonerism of those words in a string, as in the above example. 
//A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. 
//Though spoonerisms are about letters in words in the domain of written and spoken language,..
// numbers are included in the inputs for the random test cases and they require no special treatment.

//NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.


function spoonerize(words) {
    let splitIt = words.split(' ')
    console.log(splitIt)

    let array1 = splitIt[0]
    console.log(array1)

    let array2 = splitIt[1]
    console.log(array2)

    let spoonerize1 = array2.charAt(0) + array1.substring(1)
    console.log(spoonerize1)
    let spoonerize2 = array1.charAt(0) + array2.substring(1)
    console.log(spoonerize2)

    words = spoonerize1 + " " + spoonerize2;
    return console.log(words)
}

spoonerize('nit picking')