
//Exercise 1

//Declare a function fullName and it print out your full name.
function fullName() {
  return 'Edward-Precious Omegbu';
  }
  
console.log(fullName());

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fulName(firstName, lastName) {
    return (`My full name is ${firstName} ${lastName}`);
  }
  
console.log(fulName('Edward-Precious', 'Omegbu'))

//Declare a function addNumbers and it takes two parameters and it returns their sum.
let sum = (x, y) => x + y;
console.log(sum(5, 10));

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => `${length * width}sqm`;
console.log(areaOfRectangle(20, 15));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => `${2 * (length + width)}m`;
console.log(perimeterOfRectangle(10, 15));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => length * width * height + 'm^3';
console.log(volumeOfRectPrism(12, 15, 7));

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (radius) => Math.PI * radius ** 2 + 'sqm';
console.log(areaOfCircle(12));

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (radius) => 2 * Math.PI * radius + 'm';
console.log(circumOfCircle(11.5));

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => mass/volume + 'kg/m^3';
console.log(density(17, 9));

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (distance, time) => distance/time + 'm/s';
console.log(speed(20, 9));

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity = 9.81) => mass * gravity + 'N';
console.log(weight(50));

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (tempInoC) => (tempInoC * 9/5) + 32;
console.log(convertCelsiusToFahrenheit(23));

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
//Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years 
//old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

/*
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

const BMI = (weight, height) => {
  const bmiCac = (weight/(height ** 2)).toFixed(1);
  if(bmiCac < 18.5){
   return `Your bmi is ${bmiCac} and your're underweight`;
  }else if(bmiCac >= 18.5 && bmiCac <= 24.9){
   return `Your bmi is ${bmiCac} and you have a normal weight`;
  }else if (bmiCac >= 25 && bmiCac <= 29.9){
   return `Your bmi is ${bmiCac} and your're overweight`;
  }else if (bmiCac > 29.9) {
   return `Your bmi is ${bmiCac} and your're obese`;
  } else {
    return `Please input a valid weight and height`;
  }
}

console.log(BMI(85, 1.78))

//Write a function called checkSeason, it takes a month parameter and 
//returns the season:Autumn, Winter, Spring or Summer.
let checkSeason = (month) => {
  switch(month.toLowerCase()) {
      case 'december':
      case 'january':
      case 'february':
          return 'Winter';
          break;
      case 'march':
      case 'april':
      case 'may':
          return 'Spring';
          break;
      case 'june':
      case 'july':
      case 'august':
          return 'Summer';
          break;
      case 'december':
      case 'january':
      case 'february':
          return 'Autumn';
          break;
      default:
          return 'Invalid month';
  }
}
console.log(checkSeason('august'));

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (a,b,c) => [a,b,c].reduce((a,b,c) => a > b ? a : b);
console.log(findMax(10,23,45));


//Exercises: Level 2
//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
let solveLinEquation = (y, m, c) => {
  let slope = m/y;
  let yIntercept = c/y;
  let xIntercept = -c/m;

  return {
      'slope': slope,
      'yIntercept': yIntercept,
      'xIntercept': xIntercept,
      'statement': `The slope of the line is ${slope}, its y-intercept is ${yIntercept} and its x-intercept is ${xIntercept}`
  }
}
console.log(solveLinEquation(2, 5, -7).statement);

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadEquation = (a,b,c) => {
  const discriminant = Math.pow(b, 2) - (4 * a * c );
    let x1 = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a) ;
    let x2 = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a) ;
    return `{${x1}, ${x2}}`;
}
console.log(solveQuadEquation(1, -1, -2));

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (array) => {
  for (let item of array) {
    console.log(item);
  }
};
let arr = [1, 2, 3, 4, 5, "ade", "shola"];
printArray(arr);

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
  let today = new Date();
  let dateVal = (x) => x.toString().padStart(2, '0');
  return `${dateVal(today.getDate())}/${dateVal(today.getMonth() + 1)}/${today.getFullYear()} ${dateVal(today.getHours())}:${dateVal(today.getMinutes())}`;
}
console.log(showDateTime());

//Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
  return `x => ${y}, y => ${x}`;
}
console.log(swapValues(4, 5));
    
//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = (arr) => {
  const newArr = [];
  for(let item of arr) {
    newArr.unshift(item);
  }
  return newArr;
}
console.log(reverseArray([1,2,3,4,5,6,7, 'a', 'b']));

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (arr) => arr.map((each) => each.toUpperCase());
let array3 = ["rajah", "ebuka", "tamara", "oluwaseun", "eunice"];
console.log(capitalizeArray(array3));

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let addedItem =  []
const addItem = (...item) => {
  addedItem.push(...item)
  return addedItem;
}
console.log(addItem('egg'));
console.log(addItem('fish'));
console.log(addItem(123));
console.log(addItem('water'));

//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let arrayItems =  [3, 7, 10, 23, 57];
const removeItem = (index) => {
  arrayItems.splice(index, 1);
  return arrayItems;
}
console.log(removeItem(2));

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (number) => {
  let sum = 0;
  for(let i = 0; i <= number;  i++){
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(100));

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
  let sum = 0
  for(let i = 0; i <= number;  i++){
    if ( i % 2 === 1){
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(100));

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (number) => {
  let sum = 0;
  for(let i = 0; i <= number;  i++){
    if ( i % 2 === 0){
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(100));

//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
/*evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.*/
let odds = []
let even = []
const evensAndOdds = (number)=> {
  for(let i = 0; i <= number;  i++){
    if ( i % 2 === 0){
      even.push(number[i]);
    }
    else if( i % 2=== 1 ){
      odds.push(number[i]);
    }
  }
  return `The number of odds are ${odds.length}. The number of evens are ${even.length}`;
}
console.log(evensAndOdds(100));

//Write a function which takes any number of arguments and return the sum of the arguments
const sumOfArg = (...number) =>{
  sum = 0;
  for(const num of number){
    sum += num;
  }
  return sum;
}
console.log(sumOfArg(2,3,6,8,11));

//Writ a function which generates a randomUserIp.
let randomUserIp = ()  =>{
  let userIp = (Math.floor(Math.random() * 256))+"."+(Math.floor(Math.random() * 256))+"."+(Math.floor(Math.random() * 256))+"."+(Math.floor(Math.random() * 256));
  return userIp;
};
console.log(randomUserIp());

//Write a function which generates a randomMacAddress
let address = [];
const randomMacAddress = () => { 
  for(let r = 0; r <= 5; r++){
    address.push((Math.floor(Math.random() * 10000).toString(16)).slice(-2).toUpperCase().padStart(2, '0'));
  }
  let [a,b,c,d,e,f] = address;
  return `${a}:${b}:${c}:${d}:${e}:${f}`;
}
console.log(randomMacAddress());

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = function () { 
  return `#${Math.floor(Math.random() * 0x1000000).toString(16).padEnd(6, "0")}`;
}
console.log(randomHexaNumberGenerator());

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.// 41XTDbE

const userIdGenerator = () => {
  return `${Math.floor(Math.random() * 0X1000000).toString(16).toUpperCase().padEnd(7, '0')}`;
}
console.log(userIdGenerator());

//Exercises: Level 3
//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
const userIdGeneratedByUser = (noOfChars, noIds) => {
  let userId = [];
  const idGenerator = (n) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDERGHIJKLMNOPQRSTUVWXYZ";
    const charsArr = chars.split('');
    let id = ``;
    for (let i = 0; i < n; i++) {
        id += `${charsArr[Math.floor(Math.random() * charsArr.length)]}`;
    }
    return id;
}
  for (let n = 0; n < noIds; n++ ){ //so this iteration runs for the number of ids the user wants
    userId.push(idGenerator(noOfChars));
  }
  return userId;
}
console.log(userIdGeneratedByUser(7, 3));


//Write a function name rgbColorGenerator and it generates rgb colors.

const rgbColorGenerator = () => {
  let randValue  = (value) => {
    return Math.round(Math.random() * (value + 1));
  }
  return `rgb(${randValue(255)},${randValue(255)},${randValue(255)})`;
}
console.log(rgbColorGenerator());

//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = (n) => {
  let hexcolors = [];
  let i = 0
  while(i < n){
      hexcolors.push(`#${Math.floor(Math.random() * 0x1000000).toString(16).padEnd(6, "0")}`)
      i++;
    }
   return hexcolors;
}
console.log(arrayOfHexaColors(2));

//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const arrayOfRgbColors = (n) => {
  let rgbcolors = [];
  let i = 0;
  while(i < n){
         rgbcolors.push(`rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`);
       i++;
    }
   return rgbcolors;
}
console.log(arrayOfRgbColors(3));

//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = (hexa) => `rgb(${parseInt(hexa.slice(1,3),16)},${parseInt(hexa.slice(3,5),16)},${blue = parseInt(hexa.slice(5),16)})`;
console.log(convertHexaToRgb('#a3e12f'));

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHexa = (red, green, blue) => `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
console.log(convertRgbToHexa(163, 225, 47));

//Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
const generateColors = (str, n) => {
  if (str.toLowerCase() === 'hexa' && !isNaN(n)) {
    let hexcolors = [];
    let i = 0
    while(i < n){
      hexcolors.push(`#${Math.floor(Math.random() * 0x1000000).toString(16).padEnd(6, "0")}`)
      i++;
    }
    return hexcolors;
  } else if (str.toLowerCase() === 'rgb' && !isNaN(n)) {
    let rgbcolors = [];
    let i = 0;
    while(i < n){
      rgbcolors.push(`rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`);
      i++;
    }
    return rgbcolors;
  } else {
    return 'You have entered invalid parameters'
  }
}
console.log(generateColors('hexa', 2));

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const numbers = [10, 23, 9, 24, 2];
const shuffleArray = (array) => array.sort((a,b) => Math.random() - Math.random());
console.log(shuffleArray(numbers));

//note .sort() is looking for either a positive or negative number to either move it ‘up’ or ‘down’ and each number has a chance of being moved in either direction.
//If the result of this operation is < 0, the element a is put to an index lower than b, and the opposite if the result is > 0.

// study these codes, another method to do the above
// const shuffle = array => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const first = array[i];
//     array[i] = array[j];
//     array[j] = first;
//   }
// }


//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (integer) => {
  let solution = 1;
  if (integer === 0 || integer === 1) { 
    return 1;
  } else if ( integer > 1) { 
    for (let i = 1; i <= integer; i++ ) {
      
      solution *= i;
    }
    return solution;
  }
}
console.log(factorial(5));
 
//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (param) => {
  return (param === undefined || param === null || param.length === 0) || (typeof param === 'string' && param.trim().length === 0) || (param.constructor === Object && Object.keys(param).length === 0) ? true : false;
}
console.log(isEmpty());

//Call your function sum, it takes any number of arguments and it returns the sum.
const sumFunc = (...anyNumber) => {
  let sum = 0;
  for(const num of anyNumber){
    sum += num;
  }
  return sum;
}
console.log(sumFunc(2,3,20,8,10));

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
const testArray = [2, 8, 9, 10, 56, 63];
const sumOfArrayItems = (arr) => {
  let sum = 0;
  for(let m = 0; m < arr.length; m++){
    if(!isNaN(arr[m]) && typeof arr[m] == 'number'){
      sum += arr[m];
    }else {
      return 'Cannot complete operation because the items are not all numbers';
    }
  }
  return sum;
}
console.log(sumOfArrayItems(testArray));

// Write a function called average, it takes an array parameter and returns the average of the items.
const average = (arr) => {
  let sum = 0;
  for(let m = 0; m < arr.length; m++){
    if(!isNaN(arr[m]) && typeof arr[m] == 'number'){
      sum += arr[m];
    }else {
      return 'Cannot complete operation because the items are not all numbers';
    }
  }
  return (sum / arr.length).toFixed(1);
}
console.log(average(testArray));

//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
//If the array length is less than five it returns 'item not found'.
const modifyArray = (arr) =>{
  if (arr.length < 5) {
    return 'Item not found';
  } else if (!Array.isArray(arr)) {
    return 'Invalid input';
  } else if (arr.length >= 5) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  }
}
const fruitArray = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];
console.log(modifyArray(fruitArray));

//Write a function called isPrime, which checks if a number is prime number.
//since i will always be less than the parameter the condition  will never allow parameter to be divisible by itself and when parameter is divisible by i then the number is an even number.
//the number also must be greater than 1 reason for the number > 2 instead of true but true still remains the same.
const isPrime = (number) => {
  if (number < 2) {
    return false;
  } else if (number >= 2) {
    for (let i = 2; i <= number; i++) {
      if (number % i == 0 && i != number) {
        return false;
        break;
      } else if (number % i == 0) {
        return true;
      }
    }
  }
}
console.log(isPrime('1'));

//Write a functions which checks if all items are unique in the array.
const arrayUnique = (arr) => arr.length === new Set(arr).size;
console.log(arrayUnique([1,1,2,3]));

//Write a function which checks if all the items of the array are the same data type.
const numArray = [10, 8, 9, 4, 5];
const arrayMix = [1, 2, 3, "foo", 123, true];
const arrayType = (arr) => arr.filter(i => typeof i === typeof arr[0]).length === arr.length;
console.log(arrayType(numArray)); 
console.log(arrayType(arrayMix));


//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
const isValidVariable = (str) => str.match(/[^0-9a-zA-Z\$\_]/g) == null ? 'valid variable' : 'invalid variable';
console.log(isValidVariable('khjgc_'));

//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const sevenRandomNumbers = ()  => {
let set = new Set();
while (set.size <= 7) {
  set.add(Math.floor(Math.random() * 10) | 0);
}
let randomArray = [...set];
return randomArray;
}
console.log(sevenRandomNumbers());

//Write a function called reverseCountries, it takes countries array and 
//first it copy the array and returns the reverse of the original array
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
const reverseCountries = (arr) => {
  const newCountries = [...arr];
  return newCountries.reverse();
}
console.log(reverseCountries(countries));