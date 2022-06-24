"use strict"; //Codewars solutions:

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
////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////

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

//short solution found online for review using map and ternary =>
const duplicateEncode2 = s => s
    .toLowerCase()
    .split``
    .map((letter, _, word) => word.indexOf(letter) === word.lastIndexOf(letter) ? '(' : ')')
    .join``;

// console.log(duplicateEncode2("cool"))
/////////////////////////////////////////////////////////////

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

//regex solution for review =>
DNAStrand3.pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }

function DNAStrand3(dna) {
    return dna.replace(/./g, function(c) {
        return DNAStrand3.pairs[c]
    });
}
// console.log(DNAStrand2("ATTGC"));
/////////////////////////////////////////////////////////////

//take non-negative integer and rearrange from highest to lowest =>
function descendingOrder(num){
    return parseInt(num.toString()
        .split("")
        .sort()
        .reverse()
        .join(""));
}
// console.log(descendingOrder("12345"));
/////////////////////////////////////////////////////////////