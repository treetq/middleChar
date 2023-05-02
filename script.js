// function getMiddle(s) {
//   return s.length % 2 == 0
//     ? s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)]
//     : s[Math.floor(s.length / 2)];
// }

// console.log(getMiddle("treeteq"));

//------------------------------------------

// function accum(str) {
//   let stAll = "";
//   str.split("").map((value, index) => {
//     let st = "";
//     for (let i = 0; i <= index; i++)
//       st += i == 0 ? value.toUpperCase() : value.toLowerCase();

//     stAll += str.length - 1 == index ? st : st + "-";
//   });

//   return stAll;
// }

// function accum(s) {
//   return [...s]
//     .map((element, index) => {
//       return element.toUpperCase() + element.toLowerCase().repeat(index);
//     })
//     .join("-");
// }
// console.log(accum("aeRf"));

//--------------------------------------------

// function square(num) {
//   return Math.sqrt(num) == Math.floor(Math.sqrt(num));
// }

// console.log(square(9));

//--------------------------------------------

// const vowels = ["a", "i", "e", "o", "u"];

// function disemvowel(str) {
//   let x = "";
//   console.log([...str]);
//   [...str].map((elt, i) => {
//     if (!vowels.includes(elt.toLowerCase())) x += elt;
//   });

//   return x;
// }

// console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");
// console.log(disemvowel("This website is for losers LOL!"));

//----------------------------------------------

// function highAndLow(numbers) {
//   let min = parseInt(numbers.split(" ")[0]);
//   let max = min;
//   console.log(numbers.split(" ")[0]);
//   numbers.split(" ").forEach((value) => {
//     if (max < parseInt(value)) {
//       max = parseInt(value);
//     } else if (min > parseInt(value)) {
//       min = parseInt(value);
//     }
//   });

//   return `${max} ${min}`;
// }

// console.log(highAndLow("-1 0 3 4 5"));

// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }

//-----------------------------------------------

// function XO(str) {
//   let x = [];
//   let o = [];
//   [...str].map((el) => {
//     if (el.toLowerCase() == "x") x.push(el);
//     if (el.toLowerCase() == "o") o.push(el);
//   });
//   return x.length === o.length;
// }

// console.log(XO("xxooxxoo"));
//------------------------------------------------

// function squareDigits(num) {
//   allDigit = "";
//   [...num.toString()].forEach((el) => {
//     allDigit += el * el;
//   });
//   return parseInt(allDigit);
// }

// console.log(squareDigits(234));

// function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }

// function findShort(s) {
//   let shortest = s.split(" ")[0];
//   s.split(" ").map((item) => {
//     if (item.length < shortest.length) shortest = item;
//   });
//   return shortest.length;
// }

// console.log(findShort("salam iam so happy"));

//----------------------------------------------------
// function DNAStrand(dna) {
//   let output = "";
//   dna.split("").map((el) => {
//     switch (el.toUpperCase()) {
//       case "A": {
//         output += "T";
//         break;
//       }
//       case "T": {
//         output += "A";
//         break;
//       }
//       case "C": {
//         output += "G";
//         break;
//       }
//       case "G": {
//         output += "C";
//         break;
//       }

//       default:
//         break;
//     }
//   });
//   return output;
// }

// console.log(DNAStrand("ATTGC"));

//-------------------------------------------

// function descendingOrder(n) {
//   let reverse = "";
//   [...n.toString()]
//     .sort()
//     .reverse()
//     .map((item) => {
//       reverse += item;
//     });
//   return parseInt(reverse);
// }

// console.log(descendingOrder(402145));
//-----------------------------------------------

// function positiveSum(arr) {
//   let sum = 0;
//   arr.map((el) => {if(el > 0) sum += el});
//   return sum;
// }

// console.log(positiveSum([1, -4, 7, 12]));

//---------------------------------------------

// function isIsogram(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i].toLowerCase() == arr[j].toLowerCase()) return false;
//     }
//   }
//   return true;
// }

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

// console.log(isIsogram("adb"));

//---------------------------------------------------

// function filter_list(l) {
//   return l.filter((item) => typeof item === "number");
// }

// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

//-------------------------------------------------------

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// function findSmallestInt(arr){
//     return Math.min(...arr)
// }

//-------------------------------------------------------

// function sumTwoLowest(arr) {
//   return [...arr].sort((a, b) => a - b)[0] + [...arr].sort((a, b) => a - b)[1];
// }

// console.log(sumTwoLowest([19, 5, 42, 2, 77]));

//-------------------------------------------------------
// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   for (years; p0 < p; years++) {
//     p0 += Math.floor(p0 * (percent / 100)) + aug;
//   }
//   return years;
// }

//------------------------------------------------------

// function repeatStr(n, s) {
//   str = "";
//   for (let i = 0; i < n; i++) str += s;

//   return str;
// }
////or
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }
// console.log(repeatStr(6, "I"));
// console.log(repeatStr(5, "Hello"));

//-------------------------------------------------------
// function isTriangle(a, b, c) {
//     return (a + b > c) && (a + c > b) && (b + c > a);
//   }
// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));
// console.log(isTriangle());

//--------------------------------------------------------
// function perfectSquare(x) {
//   sqrtX = Math.sqrt(x);
//   if (Math.floor(sqrtX) - sqrtX == 0) {
//     return sqrtX * sqrtX + 2 * sqrtX + 1;
//   } else return -1;
// }

// console.log(perfectSquare(624));

//---------------------------------------------------------

// function maskify(cc) {
//   if (cc.length > 4) {
//     let result = "";
//     return cc.split("").reduce((acc, cur, i) => {
//       if (cc.length - i > 4) {
//         result += "#";
//       } else {
//         result += cur;
//       }
//       return result;
//     }, "");
//   } else {
//     return cc;
//   }
// }

// console.log(maskify("12345678"));

//--------------------------------------------------------

// function rowSumOddNumbers(n) {
//   //0,2,4,6,8
//   let cum = 1;
//   for (let i = 0; i < n; i++) cum += 2 * i;

//   let res = 0;
//   for (let index = 0; index < n; index++) res += cum + index * 2;
//   return res;
// }

// console.log(rowSumOddNumbers(5));
//----------------------------------------------------------

// function divisors(integer) {
//   let divs = [];

//     for (let i = 2; i < integer; i++)
//       if (integer / i === Math.floor(integer / i)) divs.push(i);

//     if (divs.length > 0) return divs;
//     else return `${integer} is prime`;

// }

// console.log(divisors(-12));

// function divisors(integer) {
//   for(var div = [], i = 2; i < integer; i++) if(integer % i == 0) div.push(i);
//   return div.length > 0 ? div : integer + " is prime";
// }

//---------------------------------------------------------
// function makeNegative(n) {
//   return n > 0 ? n * -1 : n;
// }

// console.log(makeNegative(-5));

//---------------------------------------------------------

// function removeChar(str) {
//   console.log();
//   //return [...str].shift().pop();
//   return str.slice(1, str.length - 1);
// }
// console.log(removeChar("my name is tarek!"));

//---------------------------------------------------------

// function removeSpaces(str) {
//   str.split(" ");
//   let rt = "";
//   [...str].map((value) => {
//     if (value !== " ") rt += value;
//   });
//   return rt;
// }

// function noSpace(x){return x.split(' ').join('')}

// console.log(removeSpaces("salam alaikom wech raKom "));

//----------------------------------------------------------

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));
