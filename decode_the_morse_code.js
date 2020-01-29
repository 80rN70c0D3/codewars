//Part of Series 1/3
//decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

decodeMorse = function(str) {
            
        const morseCode = {
        '-.-.--': '!',
        '.-..-.': '"',
        '...-..-': '$',
        '.-...': '&',
        '.----.': '\'',
        '-.--.': '(',
        '-.--.-': ')',
        '.-.-.': '+',
        '--..--': ',',
        '-....-': '-',
        '.-.-.-': '.',
        '-..-.': '/',
        '-----': '0',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '---...': ':',
        '-.-.-.': ';',
        '-...-': '=',
        '..--..': '?',
        '.--.-.': '@',
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '..--.-': '_',
        '...---...': 'SOS'
        };

        var decodeLetters = function(str) {
        var result = '';
        var splitLetters = str.split(' ');
        for (var i = 0; i < splitLetters.length; i++) {
            for (var key in morseCode) {
                if (splitLetters[i] === key) {
                    result += morseCode[key];
                }
            }
        }return result;
    }

    var splitWords = str.split('  ');
    var finalResult = '';
    for (var j = 0; j < splitWords.length; j++) {
        var decodeAll = decodeLetters(splitWords[j]);
        finalResult += decodeAll + ' ';
    } return finalResult.toUpperCase().trim();
}


//Most upvoted solution with const morseCode

decodeMorse = function(str){
    function decodeMorseLetter(letter) {
      return morseCode[letter];
    }
    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    return str.trim().split('   ').map(decodeMorseWord).join(' ');
  }