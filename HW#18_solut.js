function isAnagram (str1, str2) {
    return Array.from(str1).sort().join('') == 
    Array.from(str2).sort().join('');
}

function isAnangram (str1, str2) {
    let res = false;
    if (str1.length == str2.length) {
        const str1Occurrences = getSymbolOccurrences (str1);
        res = checkAnagram(str1Occurrences, str2);
    }
    return res;
}
function getSymbolOccurrences (string) {
    const stringArray = Array.from(string);
    return stringArray.reduce(symbolProcessing 
    , {});
}

function symbolProcessing (res, cur) {
    if (res[cur]) {
        res[cur]++;
    } else {
        res[cur] = 1;
    }
    return res;
}
function checkAnagram (occurrences, string) {
    const stringArray = Array.from(string);
    return stringArray.every(symbol => {
        let res = false;
        if (occurrences[symbol]) {
            res = true;
            occurrences[symbol]--;
        }
        return res;
    })   
   
}
isAnagram("yellow", "wolley");

// solution variable
 //let res = true;
//let i = 0;
 /*while (i < stringArray.length && res){
        const symbol = stringArray[i];
        if (occurrences[symbol] && occurrences[symbol] != 0) {
            occurrences[symbol]--;
            i++;
        } else {
            res = false;
        }      
    }
    for (let i = o; i < stringArray.length; i++) {
        const symbol = stringArray[i];
        if (occurrences[symbol] && occurrences[symbol] != 0) {
            occurrences[symbol]--;
        } else {
            res = false;
        }      
    }*/
     //return res;