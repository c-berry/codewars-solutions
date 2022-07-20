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

// Write a function, which takes a non-negative integer between 0 and 359999 (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// if less than 0 or more than 359999 we’ll return null =>
function humanReadable(seconds) {
    if (seconds < 0 || seconds > 359999) {
        return null;
    }
    if (seconds === 0) {
        return '00:00:00';
    }
    let hours = Math.floor(seconds / 3600)
    seconds = seconds - (hours * 3600)
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
    // return `${hours}:${minutes}:${seconds}`;
}
// console.log(humanReadable(45296));
// console.log(humanReadable(98776));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//return maximum sum of contiguous subsequence in an array of numbers =>
//Kadane’s algorithm (https://en.wikipedia.org/wiki/Maximum_subarray_problem) =>
const maxSequence = function(arr){
    let sum = 0;
    let maxSum = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr.length === 0) {
            return 0;
        }
        sum = Math.max(arr[i], sum + arr[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

//using forEach =>
function maxSequence2(arr){
    let sum = 0;
    let maxSum = 0;
    if(arr.length === 0){
        return 0;
    }
    arr.forEach(n => {
        sum = Math.max(n, sum + n);
        maxSum = Math.max(maxSum, sum);
    });
    return maxSum;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// function that when given a URL as a string, parses out just the domain name and returns it as a string =>
function domainName(url){
    //each conditional checks url string for beginning format to decide where to begin substring:
    if (url.includes("https") && url.includes("www")){
        let newUrl = url.substring(12);
        //find where the domain name ends and use substring to remove excess characters:
        let endOfDomain = newUrl.indexOf(".");
        return newUrl.substring(0, endOfDomain);
    }
    if (url.includes("http") && url.includes("www")){
        let newUrl = url.substring(11);
        let endOfDomain = newUrl.indexOf(".");
        return newUrl.substring(0, endOfDomain);
    }
    if (url.includes("https")){
        let newUrl = url.substring(8);
        let endOfDomain = newUrl.indexOf(".");
        return newUrl.substring(0, endOfDomain);
    }
    if (url.includes("http")){
        let newUrl = url.substring(7);
        let endOfDomain = newUrl.indexOf(".");
        return newUrl.substring(0, endOfDomain);
    }
    if (url.includes("www")){
        let newUrl = url.substring(4);
        let endOfDomain = newUrl.indexOf(".");
        return newUrl.substring(0, endOfDomain);
    } else {
        //if url begins with domain name just remove excess characters from end:
        let endOfDomain = url.indexOf(".");
        return url.substring(0, endOfDomain);
    }
}
// console.log(domainName("http://google.com"));
// console.log("answer: " + domainName("https://www.43m8d3v7egof6lxtw7eiv3uim7sp.it/img/"));
// console.log("answer: " + domainName("www.xakep.ru"));

//using replace and split =>
function domainName2(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
}
// console.log("answer: " + domainName("https://www.43m8d3v7egof6lxtw7eiv3uim7sp.it/img/"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//convert decimeters to feet and inches =>
function convertHeight(units) {
    //convert to inches:
    let decimeterToInch = units * 3.93701;
    //convert inches to feet:
    let totalFeet = decimeterToInch * 0.083333;
    //retrieve feet without excess
    let feetArr = totalFeet.toString().split(".");
    let feet = feetArr[0];

    //convert remainder of partial foot to inches:
    let inches2 = "0." + feetArr[1];
    let inchesLeftover = parseFloat(inches2) * 12;

    //return converted size to correct format:
    if (inchesLeftover >= 10 && feet >= 1) {
        let inches = inchesLeftover.toString().substring(0, 2);
        return feet + "\'" + inches + "\"";
    }
    if (inchesLeftover < 10 && feet >= 1) {
        let inches = inchesLeftover.toString().substring(0, 1);
        return feet + "\'" + inches + "\"";
    }
    //if less than a foot return only inches:
    if (inchesLeftover >= 10 && feet < 1) {
        let inches = inchesLeftover.toString().substring(0, 2);
        return inches + " inches";
    }
    if (inchesLeftover < 10 && feet < 1) {
        let inches = inchesLeftover.toString().substring(0, 1);
        return inches + " inches";
    }
}
// console.log("Test: " + convertHeight(17));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Write an algorithm that takes an array and moves all the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
    let newArr = [];
    let zeroArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        }
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        }
    }
    for(let i = 0; i < zeroArr.length; i++) {
        newArr.push(zeroArr[i]);
    }
    return newArr;
}
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

// for review: ES6 =>
const moveZeros2 = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
// console.log(moveZeros2([false,1,0,1,2,0,1,3,"a"]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// takes a string input, and returns the first character that is not repeated anywhere in the string =>
function firstNonRepeatingLetter(s) {
    let letters = s.split("");
    let result = "";
    for(let i = 0; i < letters.length; i++) {
        let counter = 0;

        for(let j = 0; j < letters.length; j++) {
            if (letters[i].toLowerCase() === letters[j].toLowerCase()){
                counter += 1;
            }
        }
        if (counter < 2){
            result = letters[i];
            break;
        }
    }
    return result;
}
// console.log(firstNonRepeatingLetter("sTress"));

// for review: using indexOf
function firstNonRepeatingLetter2(s) {
    let t = s.toLowerCase();
    for (let x = 0; x < t.length; x++)
        if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
            return s[x];
    return "";
}
// console.log(firstNonRepeatingLetter2("sTress"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//for review: regex password validation
function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}
//explanation:
// (?=.*?[A-Z])    # Lookahead to make sure there is at least one upper case letter
// (?=.*?[a-z])    # Lookahead to make sure there is at least one lower case letter
// (?=.*?[0-9])    # Lookahead to make sure there is at least one number
// [A-Za-z0-9]{6,} # Make sure there are at least 6 characters of [A-Za-z0-9]

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//using .every checks each string against alphabet variable returning true or false for each iteration, and a final return of true if all iterations are true, or false if any iteration returns false =>
function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    string = string.toLowerCase();
    return alphabet.every(x => string.includes(x));
}
// console.log(isPangram("Test"));
// console.log(isPangram("abcd efgh ijkl mnop qrst uvwx yz"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits =>
function duplicateCount(text){
    //turn string into array of chars
    let textArr = text.toLowerCase().split("");
    //create new array to hold duplicate chars
    let textChars = [];
    //loop thru chars comparing first instance of a char to the last index of that char
    for (let i = 0; i < textArr.length; i++){
        if (textArr.indexOf(textArr[i]) !== textArr.lastIndexOf(textArr[i])) {
            //if char is repeated and not already in our new array of duplicates, add it to new array
            if (!textChars.includes(textArr[i])){
                textChars.push(textArr[i]);
            }
        }
    }
    //return length of new array that contains one instance of all duplicate chars in original string
    return textChars.length;
}
// console.log("TEST 1: " + duplicateCount("abcde"));
// console.log("TEST 2: " + duplicateCount("aabbcde"));
// console.log("TEST 3: " + duplicateCount("Indivisibility"));
// console.log("TEST 4: " + duplicateCount("Indivisibilities"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//reverse string =>
function reverseString(str){
    return str.split("").reverse().join("");
}
// console.log(reverseString("hello"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// square every digit of a number and concatenate them =>
function squareDigits(num){
    let numArr = num.toString().split("");
    let numArrSquared = [];
    for (let i = 0; i < numArr.length; i++) {
        numArrSquared.push(numArr[i] * numArr[i]);
    }
    return numArrSquared.join("");
}
// console.log("hi");
// console.log(squareDigits(133));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//determine if a number is a perfect square =>
const isSquare = function(n){
    if (n === 0) {
        return true;
    }
    for (let i = 0; i <= n; i++) {
        let test = i * i;
        if (test === n) {
            return true;
        }
    }
    return false;
}
// console.log(isSquare(0));
// console.log(isSquare(9));

//use sqrt method to get square root of num and if that resulting number divided by 1 has no remainder it is a perfect square:
function isSquare2(n) {
    return Math.sqrt(n) % 1 === 0;
}
// console.log(isSquare2(0));
// console.log(isSquare2(9));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements =>
const uniqueInOrder = function(iterable){
    let newArr = [];
    for(let i = 0; i < iterable.length; i ++) {
        if (iterable[i] !== iterable[i - 1]) {
            newArr.push(iterable[i]);
        }
    }
    return newArr;
}
// console.log(uniqueInOrder(["A", "A", "a", "B", "C", "A", "D", "D"]));
// console.log(uniqueInOrder([1, 2, 1, 2, 2, 2]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// returns true if the first argument(string) passed in ends with the 2nd argument(string) =>
function checkEndOfStr(str, ending){
    const endingSize = ending.length;
    return str.substring(str.length - endingSize) === ending;
}
// console.log(checkEndOfStr("abcd", "cd"));

function checkEndOfStr2(str, ending){
    return str.endsWith(ending);
}
// console.log(checkEndOfStr2("abcd", "cd"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//return smallest number in the array =>
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0];
        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallest) {
                smallest = args[i];
            }
        }
        return smallest;
    }
}

//using spread operator =>
class SmallestIntegerFinder2 {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

function numberToString(num) {
    return num.toString();
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out
function filter_list(arr) {
    let onlyNums = [];
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number") {
            onlyNums.push(arr[i]);
        }
    }
    return onlyNums;
}

//using filter =>
function filter_list2(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\