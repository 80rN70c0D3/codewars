/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram.
Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore 

*/

function isIsogram(str) {
    var strSplit = str.toLowerCase().split('');
    var checkIso = [...new Set(strSplit)];
    if (checkIso.length === strSplit.length) {
        return true;
    } else {
        return false;
    }
}


//other way

function isIsogram(str) {
    return str.toLowerCase().split('').filter((el, index) => str.toLowerCase().indexOf(el) === index).length === str.length;
}