/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

*/

//firt attempt

function getCount(str) {
  var vowelsCount = 0;
  let vowelsList = "aeiou";
  for (var i = 0; i < str.length; i++) {
    if (vowelsList.includes(str[i].toLowerCase())) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

//reduced way

function getCount(str) {
  return (str.match(/[aeiou]/gi)||[]).length
}

//end
