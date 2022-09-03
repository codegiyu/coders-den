'use strict'
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
  'Japan',
  'Kenya'
]
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let n = 0; n <= 10; n++ ){
    console.log(n)
}

let m = 0
while(m <= 10){
    console.log(m)
    m++
}
let o = 0
do {
    console.log(o)
    o++    
}
while(o <= 10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let p = 10; p >= 0; p-- ){
    console.log(p)
}

let q = 10
while(q >= 0){
    console.log(q)
    q--
}

let r = 10
do {
    console.log(r)
    r--   
}
while(r >= 0)

//Iterate 0 to n using for loop

//Write a loop that makes the following pattern using console.log():
for(let v=1; v<=7; v++ ){
    console.log("#".repeat(v))
}

//Use loop to print the following pattern:
for(let u=0; u<=10; u++){
    console.log(`${u}*${u} = ${u * u}`)
}
//Using loop print the following pattern
for(let w=0; w<=10; w++){
    console.log(`${w} ${w ** 2} ${w ** 3}`)
}
//Use for loop to iterate from 0 to 100 and print only even numbers
for(let even=0; even<=100; even++ ){
 if (even%2 === 0) console.log(even) 
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for(let odd=0; odd<=100; odd++ ){
    if (odd%2 === 1) console.log(odd) 
   }

//Use for loop to iterate from 0 to 100 and print only prime numbers
let count = 0
let i, j
for(j = 2; j<=100; j++){
    for( i= 1; i<=j; i++) {
        if(j%i == 0)
        count++
    }
    if (count == 2)
    console.log(j)
    count = 0
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let total= 0
for(let a = 0; a<=100; a++){
    total+=a
}
console.log(total)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0
let sumOdd = 0 
for(let num=0; num<=100; num++ ){
    if (num%2 === 0){
    sumEven +=num
   } else if(num%2 === 1){
    sumOdd+=num
   }
}
console.log(sumEven, sumOdd)

//Print sum of evens and sum of odds as array
 
let even = 0
let odd = 0 
for(let num=0; num<=100; num++ ){
    if (num%2 === 0){
    even +=num
   } else if(num%2 === 1){
    odd+=num
   }
}
console.log([even,odd])

//Develop a small script which generate array of 5 random numbers
let arrayEmpty = []
const randNum = (length, limit) => {
    for(let number = 0; number < length; number++){
        arrayEmpty.push(Math.trunc(Math.random() * limit))
    }
    return arrayEmpty
}
console.log(randNum(5,10))

//or
const arr = Array(5).fill().map(() => Math.trunc(Math.random() * 10) )
console.log(arr)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

//this would work if we werent asked for an array
const unique = new Set(arr)
console.log(unique)

//this is more accurate. using the spread and set method
let set = new Set();
while (set.size <= 4) {
  set.add(Math.trunc(Math.random() * 10) | 0);
}
let randomArray = [...set];
console.log(randomArray)

//Develop a small script which generate a six characters random id:5j2khz
let ranId = (Math.random() + 1).toString(36).substring(6);
console.log("random id", ranId);

//for the paarmeter which is a radix note that
/* Must be an integer between 2 and 36.
Base 2 is binary
Base 8 is octal
Base 16 is hexadecimal 
*/

//Exercise level 2

//Develop a small script which generate any number of characters random id:fe3jo1gl124g
let ranIdGen = (Math.random() + 1).toString(16).substring(4);
console.log("random id", ranIdGen, ranIdGen.length);

//Write a script which generates a random hexadecimal number
//we need a random integer between 0x000000 and 0xffffff, inclusive.
//00 to FF. So, the maximum value can be FFFFFF - white color, and the minimum value can be 000000 - black color.

const ranHex = function () { 
    return `#${Math.floor(Math.random() * 0xabcdef).toString(16).padEnd(6, "0")}`;
}
console.log(ranHex());

//Write a script which generates a random rgb color number.
let randValue  = (value) => {
    return Math.round(Math.random() * value + 1)
}
const rgbGen = () =>{
    return `rgb (${randValue(255)},${randValue(255)},${randValue(255)})`
}
console.log(rgbGen())

//Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let upperCount = countries.map(each => {   
    return each.toUpperCase()
})
console.log(upperCount)

//Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let lengthCount = countries.map(each => {   
    return each.length
})
console.log(lengthCount)

//Use the countries array to create the following array of arrays:
/*[
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]*/
  let country;
  const countOfcount = []
  for (country of countries){
    let countryArray = [country, country.slice(0,3).toUpperCase(), country.length]
    countOfcount.push(countryArray)
}
console.log(countOfcount)

//In above countries array, check if there is a country or countries containing the word 'land'.If there are countries containing 'land', print it as array.If there is no country containing the word 'land', print 'All these countries are without land'.

let a;
let countryland = []
for(a = 0; a < countries.length; a++){
    if(countries[a].includes('land')){
        countryland.push(countries[a])
    }
}
console.log(countryland)

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let b;
let countryIa = []
for(b = 0; b < countries.length; b++){
    if(countries[b].endsWith('ia')){
        countryIa.push(countries[b])
    }else{
    console.log('These are countries ends without ia') 
    }
}
console.log(countryIa)

//Using the above countries array, find the country containing the biggest number of characters.
const longestCount = countries.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);
console.log(longestCount)

//Using the above countries array, find the country containing only 5 characters.
let c;
let countryChar = []
for(c = 0; c < countries.length; c++){
    if(countries[c].length === 5 ){
        countryChar.push(countries[c])
    }
}
console.log(countryChar)

//Find the longest word in the webTechs array
const longestWeb = webTechs.reduce(
    function (c, d) {
        return c.length > d.length ? c : d;
    }
);
console.log(longestWeb)

//another method
// longest = webTechs.sort(
//     function (a, b) {
//         return b.length - a.length;
//     }
// )[0];

//Use the webTechs array to create the following array of arrays:
let web;
  const webTotalArray = []
  for (web of webTechs){
    let webArray = [web, web.length]
    webTotalArray.push(webArray)
}
console.log(webTotalArray)

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronym = ''
const mernSack = ['MongoDB', 'Express', 'React', 'Node']
for( let e = 0; e < mernStack.length; e++){
    let web = mernStack[e].charAt(0)
    acronym += web
}
console.log(acronym)

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let webFrames =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(let weblang of webFrames){
    console.log(weblang)
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon']
function reverseArray(arr) {
    const newArray = [];
    for ( let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
console.log(reverseArray(fruits))

//or 
const newArrays = [] 
while(fruits.length){
    newArrays.push(fruits.pop())
}
console.log(newArrays)

//Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

const [firstArray, secondArray] = fullStack
// console.log(firstArray, secondArray)
const [[w,x,y,z], [e,f,g]] = [firstArray, secondArray]
console.log(w,x,y,z,e,f,g)

//or using HOF ForEach
fullStack.forEach(item =>{item.forEach(item => console.log(item))})

//Exercise 3
//Copy countries array(Avoid mutation)

const copyCount = new Map().set(countries)
console.log(copyCount)

//or

let copyCountry = [...countries]
console.log(copyCountry)

//Arrays are mutable. Create a copy of array which does not modify the original. 
//Sort the copied array and store in a variable sortedCountries
let sortedCountries = copyCountry.sort()
console.log(sortedCountries) 

//Sort the webTechs array and mernStack array
let sortedWeb = webTechs.sort()
let sortedMern = mernStack.sort()

console.log(sortedWeb)
console.log(sortedMern)

//Extract all the countries contain the word 'land' from the countries array and print it as array
let h;
let countrylands = []
for(h = 0; h < countries.length; h++){
    if(countries[h].includes('land')){
        countrylands.push(countries[h])
    }
}
console.log(countrylands)

//Find the country containing the hightest number of characters in the countries array
let longestCountry = countries.sort(
        function (a, b) {
            return b.length - a.length;
       }
    )[0];
console.log(longestCountry)


//Extract all the countries containing only four characters from the countries array and print it as array
const fourChar = []
for(let each = 0; each < countries.length; each++ ){
    countries[each].length === 4? fourChar.push(countries[each]):console.log('country not equal to four characters')       
}

//Extract all the countries containing two or more characters from the countries array and print it as array
const twoChar = []
for(let each = 0; each < countries.length; each++ ){
    countries[each].length >= 2? twoChar.push(countries[each]):console.log('country not equal to four characters')       
}
console.log(twoChar)

//Reverse the countries array and capitalize each country and stored it as an array
const reverseCountry = []
for(let each = 0; each < countries.length; each++ ){
    let countryUpper = countries[each].toUpperCase()
    reverseCountry.push(countryUpper)
    reverseCountry.reverse()
        
}
console.log(reverseCountry)