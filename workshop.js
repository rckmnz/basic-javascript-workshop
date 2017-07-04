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
//capitalize('hello');

function sumOfNumbers(arrayOfNumbers) {
    var sum = arrayOfNumbers[i];
    for ( var i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers === []){
            return 0;
        }
        else if (typeof(arrayOfNumbers[i] = 'number')){
            sum += sum;
        }
    }
}

function uniqueElements(array1, array2) {

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