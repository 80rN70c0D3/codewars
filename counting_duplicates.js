/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
*/

function duplicateCount(text) {
    var myRegex = /(.)\1+/g;
    var splitText = text.toLowerCase().split('');
    var checkDupli = splitText.sort().join('').match(myRegex);
    try {
        return checkDupli.length;
    } catch(e) {
        return 0;
    }
}

//variant

function duplicateCount(text) {
    var myRegex = /(.)\1+/g;
    var splitText = text.toLowerCase().split('');
    var checkDupli = splitText.sort().join('').match(myRegex);
    if (checkDupli == null) {
        return 0;
    } else {
        return checkDupli.length;
    }
}