"use strict"; //Codewars solutions:

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//remove vowels from string =>
//this works in console log but fails testing =>
function disemvowel(str) {
    return str.toLowerCase().replaceAll("a", "")
        .replaceAll("e", "")
        .replaceAll("i", "")
        .replaceAll("o", "")
        .replaceAll("u", "");
}
// console.log(disemvowel("hElloO"));

//working regex solution =>
function disemvowel2(str) {
    return str.replace(/[aeiou]/gi, '');
}
// console.log(disemvowel2("hElloO"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//capitalize first letter in string =>
function toJadenCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// console.log(toJadenCase("hello"));

//arrow function example with map implementation
//capitalize first letter in each word of a sentence =>
let toJadenCase2 = (str) => {
    return str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}
// console.log(toJadenCase2("hello there general kenobi"));

//prototype solution with map =>
String.prototype.toJadenCase3 = function () {
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};
// let str = "hello there general kenobi";
// console.log(str.toJadenCase3());

//prototype solution using for loop =>
String.prototype.toJadenCase4 = function () {
    let words = this.split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
};
// console.log(str.toJadenCase4());

//prototype solution using regex =>
String.prototype.toJadenCase5 = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
// console.log(str.toJadenCase5());

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//replace letters in string with '(' if unique and ')' if duplicated =>
function duplicateEncode(str){
    let word = str.toLowerCase();
    let unique = '';
    for (let i = 0; i < word.length; i++) {
//check for any characters that repeat by comparing the first and last occurrence of a letter in a given word, if they have the same index it is never duplicated
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//for each character that never dupes
            unique += '(';
        } else
//for each character that is duplicated
            unique += ')';
    }
//return the full string value where '(' are non duped and all')' are duped
    return unique;

}
// console.log(duplicateEncode('cool'));

//for review: using map and ternary =>
const duplicateEncode2 = s => s
    .toLowerCase()
    .split``
    .map((letter, _, word) => word.indexOf(letter) === word.lastIndexOf(letter) ? '(' : ')')
    .join``;

// console.log(duplicateEncode2("cool"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// replace instances of ['A', 'T', 'C', 'G'] with ['T', 'A', 'G', 'C'] =>
function DNAStrand(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if(str[i] === "A") {
            newStr += "T";
        }
        if (str[i] === "T") {
            newStr += "A";
        }
        if (str[i] === "C") {
            newStr += "G";
        }
        if (str[i] === "G") {
            newStr += "C";
        }
    }
    return newStr;
}
// console.log(DNAStrand("ATTGC"));

//using map and ES6 =>
const pairs = {'A':'T', 'T':'A' ,'C':'G', 'G':'C'};

let DNAStrand2 = (dna) => dna.split('').map((v) => pairs[v]).join('');
// console.log(DNAStrand2("ATTGC"));

//for review: regex solution =>
DNAStrand3.pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }

function DNAStrand3(dna) {
    return dna.replace(/./g, function(c) {
        return DNAStrand3.pairs[c]
    });
}
// console.log(DNAStrand2("ATTGC"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//take non-negative integer and rearrange from highest to lowest =>
function descendingOrder(num){
    return parseInt(num.toString()
        .split("")
        .sort()
        .reverse()
        .join(""));
}
// console.log(descendingOrder("12345"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//return the sum of the two lowest nums from an array of nums =>
function sumTwoSmallestNumbers(numbers) {
    let numsSorted = numbers.sort(function (a, b) {
        return a - b;
    });
    return numsSorted[0] + numsSorted[1];
}
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

//arrow function =>
function sumTwoSmallestNumbers2(numbers) {
    let numsSorted = numbers.sort((a, b) => a - b);
    return numsSorted[0] + numsSorted[1];
}
// console.log(sumTwoSmallestNumbers2([19, 5, 42, 2, 77]));

// for review: for loop and most efficient solution not using sort =>
function sumTwoSmallestNumbers3(numbers) {
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
    let n;
    for (let i = 0; i < numbers.length; i++) {
        n = numbers[i];
        if(n < min) {
            secondMin = min;
            min = n;
        } else if( n < secondMin ) {
            secondMin = n;
        }
    }
    return min + secondMin;
}
// console.log(sumTwoSmallestNumbers3([19, 5, 42, 2, 77]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Given two integers a and b, which can be pos or neg, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b
function getSum(a, b){
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let sum = 0;
    for(min; min <= max; min++){
        sum += min;
    }
    return sum;
}
// console.log(getSum(1, 3));

// Guass Summation =>
const getSum2 = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
// console.log(getSum2(1, 3));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// given a string of words, return the length of the shortest word(s).
// string will never be empty, and you do not need to account for different data types.
function findShort(str){
    let strArr = str.split(" ");
    let wordLength = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < strArr.length; i++){
        if (wordLength > strArr[i].length){
            wordLength = strArr[i].length;
        }
    }
    return wordLength;
}
// console.log(findShort("Let's travel abroad shall we"));

//for review: using apply and map =>
function findShort2(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}
// console.log(findShort2("Let's travel abroad shall we"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//take each word in a string and return with first letter moved to end of each word and adding "ay"
function pigIt(str){
    let pigLatin = [];
    let strArray = str.split(" ");
    for(let i = 0; i < strArray.length; i ++){
        let splitStr = strArray[i].split("");
        let firstLetter = splitStr[0];
        splitStr.shift();
        let removed = splitStr.join("");
        pigLatin.push(removed + firstLetter + "ay");
    }
    return pigLatin.join(" ");
}
// console.log(pigIt("Pig latin is cool"));

//for review: regex accounting for punctuation =>
function pigIt2(str) {
    const arr = str.split(' ')
    return arr
        .map((word) => {
            return word.match(/[A-z]/i)
                ? `${word.substr(1)}${word.substr(0, 1)}ay`
                : word
        })
        .join(' ')
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\