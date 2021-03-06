/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

*/

//First attempt

function alphabetPosition(text) {
  let result = [];
  let alphabetList = ['a', 'b', 'c' ,'d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let splitText = text.split('');
  for (var i = 0; i < splitText.length; i++) {
    for (var j = 0; j < alphabetList.length; j++) {
        if (splitText[i].toLowerCase() === alphabetList[j]) {
         result.push(j+1);
        }
    }

  }
  return result.join(' ');
}

//Reduced way

function alphabetPosition(text) {
  return text.toLowerCase().split('').map(el => el.charCodeAt(0) - 96).filter(el => el > 0 && el < 27).join(' ');
}