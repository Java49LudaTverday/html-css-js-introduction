// anagram of word: true/false
function isAnagram (sourceWord, word) {
    let res = true;
    if (sourceWord.length != word.length) {
        res = false;
    } else {
        let objSourceWord = {};
        let arSourceWord = Array.from(sourceWord);        
        arSourceWord.forEach (elem => {
            if (objSourceWord[elem]) {
                objSourceWord[elem]++;
            }
            else {
                objSourceWord[elem]= 1;
            }
        })
       let arLetters = Array.from(word);
        arLetters.forEach (letter => {
            if (objSourceWord[letter]) {
                objSourceWord[letter]--;
            } else {
                res = false;
            }
        })  
    }
    return res;
}
let sourceWord = "yellow";
let arWords = ["leloyw", "weloly", "wolley", "weloll", "leloy", "wollet", "weloyl", "weloyo", "nnraged", "lellyw"];
arWords.forEach( word => {
    if (isAnagram(sourceWord, word)){
    console.log (`'${word}' is the anagram of '${sourceWord}'`);
} else {
    console.log (`'${word}' is not the anagram of '${sourceWord}'`);
}
})