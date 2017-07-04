function firstLetter(inputString) {
    if (inputString === undefined) {
        return inputString;
    } else{
        return inputString[0];
    }
}

function lastLetter(inputString) {
if (inputString === undefined) {
        return inputString;
    } else{
        return inputString[inputString.length -1];
    }
}

function letterAtPosition(inputString, position) {
    if (inputString === undefined) {
        return inputString;
    } else{
    return inputString[position];
    }
}

function addTwoNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)){
        return undefined;
    } else {
        return num1 + num2;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)){
        return undefined;
    } else {
        return num1 * num2;
    }
}

function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
            
        case 'sub':
            return num1 - num2;
        
        case 'mult':
            return num1 * num2;
            
        case 'div':
            return num1/num2;
        
        default:
            return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    if (typeof(inputString) !== 'string') {
        return undefined;
    } 
    else if (numRepetitions <= 0) {
        return '';
    }
    else {
        var v = '';
        for (var i = 0; i < numRepetitions; i++) {
            v += inputString;
        }
        return v;
    }
}

function reverseString(inputString) {
    var str = '';
    for (var i = inputString.length -1; i >= 0; i--){
        str += inputString[i];
    }
    return str;
}

function longestWord(inputString) {
    if(inputString === ''){
        return '';
    }
    else if (typeof(inputString) === 'string') {
        var array = inputString.split(' ');
        var longest = 0;
        
        for (var i = 0; i < array.length; i++){
            if (array[i].length > longest){
                longest = array[i];
            }
        }
    }
    return array[longest -1];
}

function capitalize(inputString) {
    if(inputString === ''){
        return '';
    }
    else if (typeof(inputString) === 'string') {
          inputString = inputString.toLowerCase().split(' ');

  for(var i = 0; i < inputString.length; i++){
    inputString[i] = inputString[i].split('');
    inputString[i][0] = inputString[i][0].toUpperCase(); 
    inputString[i] = inputString[i].join('');
        }
  return inputString.join(' ');
    }
}

function sumOfNumbers(arrayOfNumbers) {
    var sum = 0;
    if (arrayOfNumbers === undefined){
        return undefined;
    }
        else {
        for ( var i = 0; i < arrayOfNumbers.length; i++){
            if (arrayOfNumbers === []){
                return 0;
            }
            else if (typeof(arrayOfNumbers[i]) === 'number'){
            sum += arrayOfNumbers[i];
            }
            else if (typeof arrayOfNumbers[i] !== 'number'){
                return undefined;
        }
    }
    return sum;
    }
}


function uniqueElements(array1, array2) {
    var result = [];
    var match;

    if (Array.isArray(array1) && Array.isArray(array2)){
        for (var i = 0; i < array1.length; i++){
            match = false;
            for (var j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]) {
                match = true;
                }
            }
            if (!match){
                result.push(array1[i]);
            }
        }
        for (var s = 0; s < array2.length; s++){
            match = false;
            for (var t = 0; t < array1.length; t++){
            if (array2[s] === array1[t]) {
                match = true;
                }
            }
            if (!match){
                result.push(array2[s]);
            }
        }
        return result;
    }
    else {
        return undefined;
    }
}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};