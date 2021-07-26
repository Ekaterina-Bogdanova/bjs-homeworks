// Задача №1
String.prototype.isPalindrome = function(phrase) {
    let strPhrase = phrase.toUpperCase().split('');

    strPhrase.filter((item, index) => {
        if (item == ' ' || item === ',' || item === '-' || item === ':' || item === '.' || item === '!' || item === '?') strPhrase.splice(index, 1)});

        let lengthString = strPhrase.length;
        return strPhrase.every((item, index) => item === strPhrase[lengthString-1-index]);         
}

// Задача №2
function getAverageMark(marks) {    
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}
