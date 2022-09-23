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
    for (let i = 0; i < textArr.length; i++) {
        if (textArr.indexOf(textArr[i]) !== textArr.lastIndexOf(textArr[i])) {
            //if char is repeated and not already in our new array of duplicates, add it to new array
            if (!textChars.includes(textArr[i])) {
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

// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
function findOdd(numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] === numbers[j]){
                count++;
            }
        }
        if(count % 2 !== 0){
            return numbers[i];
        }
    }
}
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//given an array of numbers, sort the odd numbers in ascending order while leaving the even numbers at their original positions =>
function sortArray(array) {
    //create array of odd nums sorted in ascending order:
    const sortedOddArr = array
        //retrieve only odd numbers:
        .filter(num => num % 2 !== 0)
        //sort in ascending order:
        .sort((a, b) => a - b);
    //create new array to hold final sort:
    let newArr = [];
    //create value to track index of odd number array we just sorted:
    let index = 0;
    //loop thru original array to sort our final returned array:
    for (let i = 0; i < array.length; i++) {
        //if number in sequence is odd pull number from our odd/sorted array and push to our final array:
        if (array[i] % 2 !== 0) {
            newArr.push(sortedOddArr[index]);
            //increment the value that is tracking the current index in the odd/sorted array:
            index++;
        } else {
            //if number is even simply add it in sequence to our new array:
            newArr.push(array[i]);
        }
    }
    return newArr;
}
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -2, -1]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times =>
function repeatStr (n, s) {
    //create new string:
    let newStr = "";
    //append to our new string (n) times:
    for (let i = 0; i < n; i++){
        newStr += s;
    }
    return newStr;
}
// console.log(repeatStr(5), "Yo");

//using repeat method:
function repeatStr2 (n, s) {
    return s.repeat(n);
}
// console.log(repeatStr2(5), "Yo");

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Take 2 flowers and ff one of the flowers has an even number of petals and the other has an odd number of petals return true =>
function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true;
    }
    return flower1 % 2 !== 0 && flower2 % 2 === 0;
}
// console.log(lovefunc(5, 6));
// console.log(lovefunc(6, 6));

//simplest solution:
function lovefunc2(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}
// console.log(lovefunc2(5, 6));
// console.log(lovefunc2(6, 6));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char =>
function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            x++;
        }
        if (str[i].toLowerCase() === "o") {
            o++
        }
    }
    return x === o;
}
// console.log(XO("oOxX"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// function which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side) =>
function dirReduc(arr){
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST"){
            i++
        } else {
            if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
    }
    return result
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// you are given a string of space separated numbers, and have to return the highest and lowest number. =>
function highAndLow(numbers){
    let numArr = numbers.split(" ");
    let highest = Math.max(...numArr);
    let lowest = Math.min(...numArr);
    return highest + " " + lowest;
}
// console.log(highAndLow("4 1 2 3 4 2 8"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo =>
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r") {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}

// Using turnary:
function areYouPlayingBanjo2(name) {
    return name + (name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') + " banjo";
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Write a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. =>
function isIsogram(str){
    let strArr = str.toLowerCase().split("");
   for (let i = 0; i < str.length; i++) {
       if (strArr.indexOf(str[i]) !== strArr.lastIndexOf(str[i])) {
           return false;
       }
   }
   return true;
}
// console.log(isIsogram("hello"));

// using Set =>
function isIsogram2(str){
    return new Set(str.toUpperCase()).size === str.length;
}
// console.log(isIsogram2("hello"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise. =>
function isValidWalk(walk) {
    //Store values of north/south and east/west:
    let ns = 0;
    let ew = 0;

    //check if walk will be 10 minutes and loop thru array of directions:
    if (walk.length === 10) {
        for (let i = 0; i < walk.length; i++) {
            // Since we want to return to where we start n and s will cancel each other out,
            // therefore they will represent +1 and -1:
            if (walk[i] === "n") {
                ns += 1;
            }
            if (walk[i] === "s") {
                ns -= 1;
            }
            // Same logic is applied to east and west:
            if (walk[i] === "e") {
                ew += 1;
            }
            if (walk[i] === "w") {
                ew -= 1;
            }
        }
        // If both ns and ew equal zero then our directions will eventually lead back to where we started:
        return ns === 0 && ew === 0;
    } else {
        // If walk array length is not exactly 10 it does not fit our requirements:
        return false;
    }
}
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w']));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Return array with names only containing 4 chars =>
function friend(friends){
    let arr = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            arr.push(friends[i]);
        }
    }
    return arr;
}

// using filter:
function friend2(friends){
    return friends.filter(n => n.length === 4)
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. =>
function getMiddle(s) {
    const mid = Math.floor(s.length / 2);
    let result = s[mid];
    if(s.length % 2 === 0) {
        result = s[mid - 1] + result;
    }
    return result;
}
// console.log(getMiddle("test"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Count vowels in string =>
function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
// console.log(getCount("abracadabra"));

// Using regex =>
function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}
// console.log(getCount2("abracadabra"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Return true if yourPoints are greater than the classPoints average score =>
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    return sum / classPoints.length < yourPoints;
}
// console.log(betterThanAverage([80, 81, 90, 91], 75));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Number.isInteger(Math.sqrt(sq)))
        return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1);
    else
        return -1;
}
// console.log(findNextSquare(625));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Accumulating function:
// Return for "ZpglnRxqenU" should be "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
function accum(s) {
    let newS = s.toLowerCase();
    let count = 0;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += newS[i].toUpperCase();
        count++;
        for (let j = 1; j < count; j++) {
            result += newS[i];
        }
        if (i !== (s.length - 1)) {
            result += "-";
        }
    }
    return result;
}
// console.log(accum("NyffsGeyylB"));
// console.log(accum("MjtkuBovqrU"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not. =>
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= (mpg * fuelLeft);
};
// console.log(zeroFuel(50, 25, 2));
// console.log(zeroFuel(100, 50, 1));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false. =>
// function validatePIN (pin) {
//     return (pin.length === 4 || pin.length === 6)
//         && typeof pin === "string"
//         && Number.isInteger(+pin);
// }

function validatePIN(pin) {
    // Checks if any chars are not a number type:
    for(let i = 0; i < pin.length; i++) {
        if (!Number.isInteger(+pin[i])) {
            return false;
        }
    }
    // Checks for whitespace:
    if (/\s/.test(pin)) {
        return false;
    }
    // Checks for correct length:
    return (pin.length === 4 || pin.length === 6);
}
// console.log(validatePIN("123 "));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle =>
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return "found the needle at position " + i;
        }
    }
}
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

// Using built in method:
function findNeedle2(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// function that returns both the minimum and maximum number of the given list/array. =>
function minMax(arr){
    // Spread operator and Math methods do the work:
    return [Math.min(...arr), Math.max(...arr)];
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop. =>
const bus = function(busStops){
    let remainder = 0;
    for (let stop of busStops) {
        remainder += stop[0];
        remainder -= stop[1];
    }
    return remainder;
}

const bus2 = function(busStops){
    let remainder = 0;
    for (let i = 0; i < busStops.length; i++) {
        remainder += busStops[i][0];
        remainder -= busStops[i][1];
    }
    return remainder;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. =>
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

    let longStr = "";
    let newStr = "";

    for (let i = 0; i < strarr.length; i++) {
        newStr = strarr.slice(i, i + k);
        if (newStr.join("").length > longStr.length ){
            longStr = newStr.join("");
        }
    }
    return longStr;
}
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow. =>
function updateLight(current) {
    if (current.toLowerCase() === "green") {
        return "yellow";
    } else if (current.toLowerCase() === "yellow") {
        return "red";
    } else {
        return "green";
    }
}
// console.log(updateLight("green"));
// console.log(updateLight("yeLLow"));
// console.log(updateLight("Red"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either =>
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1. =>
function bouncingBall(h,  bounce,  window) {
    let result = 1;
    if (!(h > 0 && bounce > 0 && bounce < 1 && window < h)) {
        return -1;
    }
    for (let i = 1; h * bounce > window; i++) {
        result += 2;
        h = h * bounce;
    }
    return result;
}
// console.log(bouncingBall(3.0, 0.66, 1.5));
// console.log(bouncingBall(30.0, 0.66, 1.5));

// Using recursion:
function bouncingBall2(h,  bounce,  window) {
    const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h;
    if (cond) {
        // If condition is met, the ball will be seen once going up...
        // And once coming down, as well as the first time its dropped
        return h < window ? -1 : 2 + bouncingBall2((h * bounce), bounce, window);
    } else {
        return -1;
    }
}
// console.log(bouncingBall2(3.0, 0.66, 1.5));
// console.log(bouncingBall2(30.0, 0.66, 1.5));

// While loop:
function bouncingBall3(h,  bounce,  window) {
    let rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
}
// console.log(bouncingBall3(3.0, 0.66, 1.5));
// console.log(bouncingBall3(30.0, 0.66, 1.5));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
 // Don't change the order of the elements that are left. =>
function removeSmallest(numbers) {
    let smallestRating = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallestRating) {
            smallestRating = numbers[i];
            index = numbers.indexOf(numbers[i]);
        }
    }
    return numbers.slice(0, index).concat(numbers.slice(index + 1, numbers.length));
}
// console.log(removeSmallest([1,2,3,4,5,]));
// console.log(removeSmallest([5,2,3,4,5,]));

// Using spread operator:
// numbers.indexOf(Math.min(...numbers))
// -would work too

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// function which returns the sum of following series upto nth term(parameter).
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments. =>
function SeriesSum(n) {
    let sum = 0;
    for (var i = 0; i < n; i++) {
        sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
}
// console.log(SeriesSum(1));
// console.log(SeriesSum(2));
// console.log(SeriesSum(3));
// console.log(SeriesSum(4));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// iven an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number. =>
function sumMix(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}
// console.log(sumMix([9, 3, '7', '3']));

// Using map and reduce =>
function sumMix2(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}
// console.log(sumMix2([9, 3, '7', '3']));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. =>
const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (month > 3 && month <= 6) {
        return 2;
    } else if (month > 6 && month <= 9) {
        return 3;
    } else {
        return 4;
    }
}
// console.log(quarterOf(1));
// console.log(quarterOf(5));
// console.log(quarterOf(12));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
const number = function (array) {
    let num = 1;
    let solution = [];
    for (let i = 0; i < array.length; i++) {
        solution.push(num + ": " + array[i])
        num += 1;
    }
    return solution;
}
// console.log(number(["a", "b", "c"]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number. =>
function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
            return numbers[i];
        }
    }
}
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...: =>

// using regular fn:
function zero(op) {
    if (op) {
        return op(0);
    } else {
        return 0;
    }
}
function one(op) {
    if (op) {
        return op();
    } else {
        return 1;
    }
}
function two(op) {
    if (op) {
        return op(2);
    } else {
        return 2;
    }
}
function three(op) {
    if (op) {
        return op(3);
    } else {
        return 3;
    }
}
function four(op) {
    if (op) {
        return op(4);
    } else {
        return 4;
    }
}
function five(op) {
    if (op) {
        return op(5);
    } else {
        return 5;
    }
}
function six(op) {
    if (op) {
        return op(6);
    } else {
        return 6;
    }
}
function seven(op) {
    if (op) {
        return op(7);
    } else {
        return 7;
    }
}
function eight(op) {
    if (op) {
        return op(8);
    } else {
        return 8;
    }
}
function nine(op) {
    if (op) {
        return op(9);
    } else {
        return 9;
    }
}

function plus(num) {
    return function(otherNum){
       return Math.floor(otherNum + number);
    }
}
function minus(num) {
    return function(otherNum){
        return Math.floor(otherNum - num);
    }
}
function times(num) {
    return function(otherNum) {
        return Math.floor(otherNum * num);
    }
}
function dividedBy(num) {
    return function(otherNum) {
        return Math.floor(otherNum / num);
    }
}

// Using es6:
// const zero = (operation) => !operation ? 0 : operation(0);
// const one = (operation) => !operation ? 1 : operation(1);
// const two = (operation) => !operation ? 2 : operation(2);
// const three = (operation) => !operation ? 3 : operation(3);
// const four = (operation) => !operation ? 4 : operation(4);
// const five = (operation) => !operation ? 5 : operation(5);
// const six = (operation) => !operation ? 6 : operation(6);
// const seven = (operation) => !operation ? 7 : operation(7);
// const eight = (operation) => !operation ? 8 : operation(8);
// const nine = (operation) => !operation ? 9 : operation(9);
//
// const plus = (number) => (other_number) => Math.floor(other_number + number);
// const minus = (number) => (other_number) => Math.floor(other_number - number);
// const times = (number) => (other_number) => Math.floor(other_number * number);
// const dividedBy = (number) => (other_number) => Math.floor(other_number / number);

// console.log(five(times(five())));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it. =>
function alphabetPosition(text) {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let newText = "";
    let char = "";
    for (let i = 0; i < text.length; i++) {
        char = text[i].toLowerCase();
        if (abc.indexOf(char) > -1) {
            newText += abc.indexOf(char) + 1 + " ";
        }
    }
    return newText.substring(0, newText.length - 1);
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. =>
function removeExclamationMarks(s) {
    let newS = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "!") {
            newS += s[i];
        }
    }
    return newS;
}
// console.log(removeExclamationMarks("Hello!?"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.=>
function openOrSenior(data){
    let result = [];
    for(var i = 0; i < data.length; i++){
        result[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }
    return result;
}
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

