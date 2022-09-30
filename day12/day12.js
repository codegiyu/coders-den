//  Exercises: Level 1
//  1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 
//     10000 euro annual bonus, 5500 euro online courses per month.’

let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let amountsArr = text.match(/\d+/g)
let [salaryPerMonth, annualBonus, onlineCoursesPerMonth] = amountsArr
let annualIncome = ((Number(salaryPerMonth) * 12) + Number(annualBonus) + (Number(onlineCoursesPerMonth) * 12)).toLocaleString()
console.log(annualIncome)


// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 
//    4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

let mathsText = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';

let distance = mathsText.match(/-?\d+/g).sort((a,b) => a - b).reduce((acc, curr, idx, arr) => Number(arr[arr.length - 1]) - Number(arr[0]))
console.log(distance)

// 3. Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

const is_valid_variable = str => /^[a-zA-Z]+_?[a-zA-Z]*$/.test(str)
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))


// Exercises: Level 2
// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

    let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
//     console.log(tenMostFrequentWords(paragraph))
//     [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]
// console.log(tenMostFrequentWords(paragraph, 10))
// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]

const tenMostFrequentWords = (str, num) => {
    let arr = str.match(/\w+/g)
    let unique = [...new Set(arr)]
    let result = [], regex;
    for (let word of unique) {
        regex = new RegExp(`\\b${word}\\b`, 'gi')
        result.push({
            'word': word,
            'count': str.match(regex).length
        })
    }
    return result.sort((a,b) => b.count - a.count).slice(0, num || result.length)
}
console.log(tenMostFrequentWords(paragraph, 3))

// Exercises: Level 3
// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
//   sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
//   console.log(cleanText(sentence))
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = str => str.replace(/[%@&;,.!?$]/g, '')
console.log(cleanText(sentence))

const mostFrequentWords = (str, num) => {
    let obj = str.split(' ').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    },{})
    return Object.entries(obj).sort((a, b) => b[1] - a[1]).reduce((acc, curr, idx, arr) => {
        if (idx < num) {
            acc.push(curr[0])
        }
        return acc
    },[])
}
console.log(mostFrequentWords(cleanText(sentence), 3))


// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// ```js
//  console.log(mostFrequentWords(cleanedText))
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

let num = 0 / 0;
let infinity = 7 / 0;
let three = 6;

console.log(num)
console.log(infinity)
console.log(three)

console.log(isFinite(num) == false && typeof num == 'number')
console.log(isFinite(infinity) == false && typeof infinity == 'number')
console.log(isFinite(three) == false && typeof three == 'number')