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

// function litres(time) {
//   return Math.floor(time / 2);
// }

// console.log(litres(11.8));
//-----------------------------------------------------------
// function century(year) {
//   const rounded = Math.floor(year / 100);
//   return year / 100 > rounded ? rounded + 1 : rounded;
// }

// console.log(century(1701));

// :function century(year) {
//   return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
// }

//-----------------------------------------------------------

// function double(arr) {
//   return arr.map((value) => value * 2);
// }

// console.log(double([1, 2, 3]));
//-----------------------------------------------------------

// function reverse(str) {
//   let arr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     arr += str[i];
//   }

//   return arr;
// }

// console.log(reverse("word"));

// function solution(str){
//   return str.split('').reverse().join('');
// }

// const solution = s => [...s].reverse().join('')

//-----------------------------------------------------------
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// console.log(solution("abcde", "abc"));

//-----------------------------------------------------------

// function bonusTime(salary, bonus) {
//   return bonus ? "\u00A3" + salary * 10 : "\u00A3" + salary;
// }
// console.log(bonusTime(10000, true));
//-----------------------------------------------------------

// function abbrevName(name) {
//   const str = name.split(" ");
//   let abbrev = "";
//   str.forEach((element, index) => {
//     if (str.length - 1 > index) abbrev += [...element][0].toUpperCase() + ".";
//     else abbrev += [...element][0].toUpperCase();
//   });
//   return abbrev;
// }

// function abbrevName(name){
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// function abbrevName(name){
//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

// console.log(abbrevName("Sam Harris"));

//-----------------------------------------------------------

// function DNAtoRNA(string) {
//   return string.split("T").join("U");
// }

// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

// console.log(DNAtoRNA("TTTT"), "UUUU");
// console.log(DNAtoRNA("GCAT"), "GCAU");
// console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");

//-----------------------------------------------------------
// function countSheeps(arr) {
//   return arr.filter((x) => x == true).length;
// }

// function countSheeps(arr) {
//   return arr.filter(Boolean).length;
// }

// var array1 = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// console.log(countSheeps(array1));

//-----------------------------------------------------------

// function binaryArrayToNumber(arr) {
//   res = 0;
//   for (let index = arr.length; index > 0; index++) {
//     res += arr[index] * Math.pow(2, index);
//     console.log(res);
//   }
//   //return res;
// }

// console.log(Math.pow(2, 2));

// console.log(binaryArrayToNumber([0, 0, 0, 1]));
//----------------------------------------------------------

// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf('needle')}`;
// }

//----------------------------------------------------------

// function removeSmallest(numbers) {
//   const min = Math.min.apply(this, numbers);
//   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
// }

//----------------------------------------------------------

// function arithmetic(a, b, operator){
//   switch(operator) {
//     case 'add':
//       return a + b;
//     case 'subtract':
//       return a - b;
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       return a / b;
//   }
// }

//----------------------------------------------------------

//----------------------------------------------------------

//----------------------------------------------------------

// function peopleWithAgeDrink(old) {
// return old <= 13 ? 'drink toddy' : old <= 17 ? "drink coke" : (old <= 18 || old <= 20) ? "drink beer" : "drink whisky"
// };
//----------------------------------------------------------

var countBits = function (n) {
  n = n.toString(2).replace(/0/g, "").split("");

  let count = 0;

  for (let i = 0; i < n.length; i++) {
    count += parseInt(n[i]);
  }
  return count;
};
//----------------------------------------------------------

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

//----------------------------------------------------------
countBits = (n) => n.toString(2).split("0").join("").length;

//----------------------------------------------------------

function rgb(r, g, b) {
  //RGB Code validation/ conversion
  const rgbToHex = function (arg) {
    let x = arg;
    //validate rgb values
    if (x < 0) {
      x = 0;
    } else if (x > 255) {
      x = 255;
    }
    //turn each rgb value into a hex value
    let hex = Number(x).toString(16);
    //ensure there are 2 digits in each hex value
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    //return hexcode
    console.log(hex);
    return hex;
  };

  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);

  let hexColor = red + green + blue;
  console.log(hexColor.toUpperCase());
  return hexColor.toUpperCase();
}

//----------------------------------------------------------

function spinWords(sentence) {
  const sentenceArray = sentence.split(" ");
  let result = "";
  sentenceArray.map((str, i) => {
    if (str.length >= 5) {
      sentenceArray[i] = str.split("").reverse().join("");
    } else {
      sentenceArray[i] = str;
    }
    result = sentenceArray.join(" ");
  });
  return result;
}

//----------------------------------------------------------

function findOutlier(int) {
  var even = int.filter((a) => a % 2 === 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

//----------------------------------------------------------

function add(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

function add(a, b) {
  var carry = 0,
    result = [],
    len = Math.max(a.length, b.length),
    i = len;
  while (i--) {
    var sum =
      (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
    carry = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (carry) result.unshift(carry);
  return result.join("");
}

//----------------------------------------------------------

function pickPeaks(arr) {
  const obj = {
    pos: [],
    peaks: [],
  };
  let i = 1;
  while (i < arr.length - 1) {
    let run = false;
    let peak = false;
    if (new Set(arr.slice(i, i + 2)).size === 1) {
      // There is a run of numbers.
      previous = arr[i - 1] < arr[i];
      var j = i;
      while (arr[j] === arr[i]) j++; // Consume the run.
      next = arr[j] < arr[i];
      if (previous && next) peak = true; // Was the run a plateau?
    } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) peak = true;
    if (peak) {
      obj.pos.push(i);
      obj.peaks.push(arr[i]);
    }
    i = run ? j : i + 1;
  }
  return obj;
}

//----------------------------------------------------------
function perimeter(n) {
  const number = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    number.push(number[i - 1] + number[i - 2]);
  }
  const num = number.reduce((acc, curr) => acc + curr) * 4;
  return num;
}

//----------------------------------------------------------
function sumOfWeightDigits(weight) {
  return ("" + weight).split("").reduce((prev, next) => {
    return ~~prev + ~~next;
  }, 0);
}

function compare(a, b) {
  return a < b ? -1 : 1;
}

function orderWeight(strng) {
  // your code
  const weights = strng
    .trim()
    .split(/\s{1,}/)
    .map((v, i) => {
      return {
        key: "" + v,
        val: sumOfWeightDigits(v),
      };
    })
    .sort((a, b) => {
      const diff = a.val - b.val;
      return diff === 0 ? compare(a.key, b.key) : diff;
    });

  return weights.map((item) => item.key).join(" ");
}
//----------------------------------------------------------

const longestSlideDown = (p) =>
  p.reduceRight((x, e) => e.map((v, i) => v + Math.max(x[i], x[i + 1])))[0];

console.log(
  longestSlideDown([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ])
);

//----------------------------------------------------------

//----------------------------------------------------------



