/*

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 

*/

function DNAStrand(dna) {
    var dnaSplit = dna.split('');
    var result = '';
    for (var i = 0; i < dnaSplit.length; i++) {
        if (dnaSplit[i] === 'A') {
            result += 'T';
        } else if (dnaSplit[i] === 'T') {
            result += 'A';
        } else if (dnaSplit[i] === 'G') {
            result += 'C';
        } else if (dnaSplit[i] === 'C') {
            result += 'G';
        }
    }
    return result;
  }


  //second try

  function DNAStrand(dna) {
    var dnaKeys = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };
    return dna.split('').map(el => dnaKeys[el]).join('');
}
