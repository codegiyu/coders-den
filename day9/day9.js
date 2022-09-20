// Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nums = [1, 2];
// const maxThree = arr => [...new Set(arr)].sort((a,b) => b - a)[2] || [...new Set(arr)].sort((a,b) => b - a)[0];
// console.log(maxThree(numbers));
// console.log(maxThree(nums));

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log(Number(''))
// 1. Explain the difference between forEach, map, filter, and reduce.

// 2. Define a callback function before you use it in forEach, map, filter or reduce.

// 3. Use forEach to console.log each country in the countries array.
countries.forEach(country => {console.log(country)})

// 4. Use forEach to console.log each name in the names array.
names.forEach(name => {console.log(name)})

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(number => {console.log(number)})

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map(country => country.toUpperCase());
console.log(newCountries);

// 7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(number => number ** 2);
console.log(squareNumbers);

// 9. Use map to change to each name to uppercase in the names array
const newNames = names.map(name => name.toUpperCase());
console.log(newNames);

// 10. Use map to map the products array to its corresponding prices.
const newProducts = products.map(product => `${product.product}:${product.price}`);
console.log(newProducts);

// 11. Use filter to filter out countries containing land.
const landCountries = countries.filter(country => country.toLowerCase().includes('land'));
console.log(landCountries);

// 12. Use filter to filter out countries having six character.
const sixCountries = countries.filter(country => country.length == 6);
console.log(sixCountries);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const sixAndMoreCountries = countries.filter(country => country.length >= 6);
console.log(sixAndMoreCountries);

// 14. Use filter to filter out country start with 'E';
const startsWithECountries = countries.filter(country => country.toUpperCase().startsWith('E'));
console.log(startsWithECountries);

// 15. Use filter to filter out only prices with values.
const productsWithPrices = products.filter(product => Number(product.price) != false);
console.log(productsWithPrices);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = arr => arr.filter(item => typeof item == 'string');
console.log(getStringLists([6, true, 'ss']));

// 17. Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((a, b) => a + b);
console.log(sum);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentence = `${countries.slice(0, countries.length - 1).reduce((a, b) => a + ', ' + b)} and ${countries.slice(-1)} are north European countries`;
console.log(sentence);

// 19. Explain the difference between some and every
    //some() returns true if at least one element of the array matches the set condition
    //every() returns true if all elements in the array match the set condition

// 20. Use some to check if some names' length greater than seven in names array
const longerThanSeven = names.some(name => name.length > 7);
console.log(longerThanSeven);

// 21. Use every to check if all the countries contain the word land
const areAllContainingLand = countries.every(country => country.toLowerCase().includes('land'));
console.log(areAllContainingLand)

// 22. Explain the difference between find and findIndex.
    //find() returns the first item in the array matching the specification
    //findIndex() returns the index of the first item in the array matching the specification

// 23. Use find to find the first country containing only six letters in the countries array
const firstCountrySix = countries.find(country => country.length == 6);
console.log(firstCountrySix);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const firstCountrySixIndex = countries.findIndex(country => country.length == 6);
console.log(firstCountrySixIndex);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex(country => country.toLowerCase() == 'norway');
console.log(norwayIndex);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex(country => country.toLowerCase() == 'russia');
console.log(russiaIndex);


// Exercises: Level 2
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.filter(p => typeof p.price == "number").map(p => p.price).reduce((a, b) => a + b);
console.log(totalPrice)

// 2. Find the sum of price of products using only reduce reduce(callback))
const sumPrice = products.reduce((a, b) => { return {product: 'total', price: Number(a.price) + Number(b.price)}}).price
console.log(sumPrice);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern
//    (you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = pattern => countries.filter(country => country.toLowerCase().includes(pattern));
console.log(categorizeCountries('d'));

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// const countriesStart = () => {
//     countries.map(c => c.toLowerCase().slice(0,1)).filter(item => item == letter.toLowerCase()).length;
// }
// console.log(countriesStart());

// 5. Declare a getFirstTenCountries function and return an array of ten countries. 
//    Use different functional programming to work on the countries.js array

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// Exercises: Level 3
// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

// 2. Find the 10 most spoken languages:


// 3. Use countries_data.js file create a function which create the ten most populated countries

// 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
//    and measure of variability(range, variance, standard deviation). In addition to those measures, 
//    find the min, max, count, percentile, and frequency distribution of the sample. 
//    You can create an object called statistics and create all the functions which do statistical calculations 
//    as method for the statistics object. Check the output below.