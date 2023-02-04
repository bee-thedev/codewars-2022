// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    let newString = '';

    s1 = s1.split("").sort();

    console.log(s1.join(''));


    s2 = s2.split("").sort();

    console.log(s2.join(''));

    newString = s1.join('') + s2.join('');
    console.log(newString);

    return newString.split('').filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .sort().join('');

    // let newString =  [...new Set(s1+s2)].sort().join('')
    // console.log(newString)
  }



  longest("inmanylanguages", "theresapairoffunctions");