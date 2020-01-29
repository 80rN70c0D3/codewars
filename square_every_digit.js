/*

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9^12 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
    var result = '';
    var numSplit = num.toString().split('');
    for (var i = 0; i < numSplit.length; i++) {
        result += numSplit[i]*numSplit[i];
    }
    return parseFloat(result);
  }


//alternate shorter answer

function squareDigits(num) {
    return parseFloat(num.toString().split('').map(el => el*el).join(''));
}