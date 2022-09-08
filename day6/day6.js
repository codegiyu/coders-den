// Exercises: Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
];
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++ ) {
    console.log(i);
}

let m = 0;
while (m <= 10) {
    console.log(m);
    m++;
}

let o = 0;
do {
    console.log(o);
    o++;
} while (o <= 10);

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let p = 10; p >= 0; p-- ) {
    console.log(p);
}

let q = 10;
while (q >= 0) {
    console.log(q);
    q--;
}

let r = 10;
do {
    console.log(r);
    r--;
} while (r >= 0);

//Iterate 0 to n using for loop
let printNumbers = (n) => {
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            console.log(i);
        }
    } else if (n < 0) {
        for (let i = 0; i >= n; i--) {
            console.log(i);
        }
    } else console.log(n);
}

printNumbers(-10);

//Write a loop that makes the following pattern using console.log():
for (let v = 1; v <= 7; v++) {
    console.log("#".repeat(v));
}

//Use loop to print the following pattern:
for (let u = 0; u <= 10; u++) {
    console.log(`${u} x ${u} = ${u * u}`);
}
//Using loop print the following pattern
for (let w = 0; w <= 10; w++) {
    console.log(`${w} ${w ** 2} ${w ** 3}`);
}
//Use for loop to iterate from 0 to 100 and print only even numbers
for (let even = 0; even <= 100; even++) {
    if (even % 2 !== 0) continue;
    console.log(even)
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let odd=0; odd<=100; odd++ ) {
    if (odd % 2 === 0) continue;
    console.log(odd); 
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
for (let j = 2; j <= 100; j++) {
    for (let i = 2; i <= j; i++) {
        if (j % i == 0 && i != j) {
            break;
        } else if (j % i == 0) {
            console.log(j);
        }
    }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let total = 0;
for (let a = 0; a <= 100; a++) {
    total += a;
}
console.log(total);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0 ;
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0){
    sumEven += num;
   } else if (num % 2 === 1) {
    sumOdd+=num;
   }
}
console.log(sumEven, sumOdd);

//Print sum of evens and sum of odds as array
 
let even = 0;
let odd = 0;
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0){
    even += num;
   } else if (num % 2 === 1) {
    odd += num;
   }
}
console.log([even,odd]);

//Develop a small script which generate array of 5 random numbers
let randArray = [];
const randNum = (length, limit) => {
    for (let number = 0; number < length; number++) {
        randArray.push(Math.floor(Math.random() * limit));
    }
    return randArray;
}
console.log(randNum(5,10));

//or
const arr = Array(5).fill().map(() => Math.floor(Math.random() * 10) );
console.log(arr);

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

//this would work if we werent asked for an array
const unique = new Set(arr)
console.log(unique)

//this is more accurate. using the spread and set method
let set = new Set();
while (set.size <= 4) {
  set.add(Math.floor(Math.random() * 10) | 0);
}
let randomArray = [...set];
console.log(randomArray)

//Develop a small script which generate a six characters random id:5j2khz
let ranId = (Math.random() + 1).toString(36).substring(6);
console.log("random id:", ranId);
console.log(5.367389202.toString(36));


//Exercise level 2

//Develop a small script which generate any number of characters random id:fe3jo1gl124g
const randomId = (n) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    const charsArr = chars.split('');
    let id = ``;
    for (let i = 0; i < n; i++) {
        id += `${charsArr[Math.floor(Math.random() * charsArr.length)]}`;
    }
    return id;
}
console.log(randomId(12));

//Write a script which generates a random hexadecimal number

const ranHex = function () { 
    return `#${Math.floor(Math.random() * 16777216).toString(16).padEnd(6, "0")}`;
}
console.log(ranHex());


//Write a script which generates a random rgb color number.
let randValue  = (value) => {
    return Math.round(Math.random() * value + 1);
}
const rgbGen = () =>{
    return `rgb(${randValue(255)},${randValue(255)},${randValue(255)})`;
}
console.log(rgbGen());

//Using the above countries array, create the following new array.
let upperCountries = countries.map(each => each.toUpperCase());
console.log(upperCountries)

//Using the above countries array, create an array for countries length'.
let lengthCount = countries.map(each => each.length);
console.log(lengthCount)

//Use the countries array to create the following array of arrays:
  const countOfcount = [];
  for (let country of countries) {
    let countryArray = [country, country.slice(0,3).toUpperCase(), country.length];
    countOfcount.push(countryArray);
}
console.log(countOfcount)

//In above countries array, check if there is a country or countries containing the word 'land'.If there are countries containing 'land', print it as array.If there is no country containing the word 'land', print 'All these countries are without land'.

const countriesContaining = (str) => {
    let countryCheck= []
    for (let a = 0; a < countries.length; a++) {
        if (countries[a].includes(str)) {
            countryCheck.push(true);
        } else countryCheck.push(false)
    }
    if (countryCheck.includes(true)) {
        return countries.filter(item => item.includes(str));
    } else {
        return `All these countries are without '${str}'`;
    } 
}
console.log(countriesContaining('land'));

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const countriesEndingWith = (str) => {
    let countryCheck = []
    for (let a = 0; a < countries.length; a++) {
        if (countries[a].endsWith(str)) {
            countryCheck.push(true);
        } else countryCheck.push(false)
    }
    if (countryCheck.includes(true)) {
        return countries.filter(item => item.includes(str));
    } else {
        return `All these countries end without '${str}'`;
    }
}
console.log(countriesEndingWith('ia'));

//Using the above countries array, find the country containing the biggest number of characters.
const longestCount = countries.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestCount);

//Using the above countries array, find the country containing only 5 characters.
for (let country of countries) {
    if (country.length === 5) {
        console.log(country);
    }
}

//Find the longest word in the webTechs array
const longestWeb = webTechs.reduce((c, d) => c.length > d.length ? c : d);
console.log(longestWeb);

//Use the webTechs array to create the following array of arrays:
const webTotalArray = [];
for (web of webTechs) {
    let webArray = [web, web.length];
    webTotalArray.push(webArray);
}
console.log(webTotalArray)

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronym = '';
for (let e = 0; e < mernStack.length; e++) {
    acronym += mernStack[e].charAt(0);
}
console.log(acronym);

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let webFrames =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let weblang of webFrames) {
    console.log(weblang)
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon']
function reverseArray(arr) {
    const newArray = [];
    for (let fruit of fruits) {
      newArray.unshift(fruit);
    }
    return newArray;
  }
console.log(reverseArray(fruits))

//or 
const newArrays = [];
while (fruits.length) {
    newArrays.push(fruits.pop());
}
console.log(newArrays);

//Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

const [firstArray, secondArray] = fullStack
console.log(...firstArray, ...secondArray);

//or
fullStack.forEach(item => {item.forEach(tech => console.log(tech))})

//Exercise 3
//Copy countries array(Avoid mutation)
let copyCountry = [...countries]
console.log(copyCountry)

//Sort the copied array and store in a variable sortedCountries
let sortedCountries = copyCountry.sort()
console.log(sortedCountries) 

//Sort the webTechs array and mernStack array
let sortedWeb = webTechs.sort();
let sortedMern = mernStack.sort();

console.log(sortedWeb);
console.log(sortedMern);

//Extract all the countries contain the word 'land' from the countries array and print it as array
let countrylands = []
for (let country of countries) {
    if (country.includes('land')) {
        countrylands.push(country);
    }
}
console.log(countrylands)

//Find the country containing the hightest number of characters in the countries array
let longestCountry = countries.sort(
        function (a, b) {
            return b.length - a.length;
       }
    )[0];
console.log(longestCountry);


//Extract all the countries containing only four characters from the countries array and print it as array
const fourChar = []
for (let country of countries) {
    if (country.length == 4) {
        fourChar.push(country);
    }
}
fourChar.length 
? console.log(fourChar) 
: console.log('There are no countries with only 4 characters');

//Extract all the countries containing two or more words from the countries array and print it as array
const twoWords = []
for (let country of countries ) {
    if (country.includes(' ')) {
        twoWords.push(country);
    }
}
console.log(twoWords);

//Reverse the countries array and capitalize each country and stored it as an array
const reverseCountry = []
for (let each of countries.reverse()) {
    reverseCountry.push(each.toUpperCase());
}
console.log(reverseCountry)