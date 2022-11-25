// Numbers
// Strings
// Booleans
// Objects
// Null
// Undefined

// const, let, var

let number = 14557799;
const string = '5?sjkfl     ';
var boolean = true;
// let object = [{}];
let e = null;
let undefined;

console.log(number)
number = 2
let stringTwo = 'age red';
console.log(stringTwo)

let array = [1,2, true, 'eor', ['iyuhk'], {nam: 7}, null]
array[number] = 7
console.log(array.length)

const object = {
    name: stringTwo,
    'age red': 30
}
object['name'] = 'Giyu'
console.log(object['name']); 

// + - * / % < > = == === <= >= ! != !== **
let a = 'h'.length
// a = `My name is ${a + 1}`
// type coercion && type conversion
console.log(a)

// false, 0, '', null, undefined, NaN, 

console.log(Boolean(' '))

let second = [1,2,3,4,5,6]
true && 1
// if (second.length > 5 && second[0] ) {
//     second = [0]
// } else if (second.length !== 6) {
//     second = [6]
// } else {
//     second = 'else'
// }

console.log(second)

console.log(0 || '' || false || undefined)
let month = 'December'
let season;
// switch(true) {
//     case second.length > 5 && second[0]:
//         second = [0]
//         break;

//     case second.length !== 6:
//         second =  [6];
//         break;

//     default:
//         second =  'else';
// }

console.log(second)
console.log(season);

let second2 = second.length > 8 && second[0] 
? [0] 
: second.length == 2 
? ['six'] 
: second.push(9)


console.log(second2)
console.log(second)

console.log(new Date(18723334).toLocaleTimeString())
let secs = Math.floor(18723334 / 1000)
console.log(`${Math.floor(secs / 3600)}:${Math.floor(secs / 60) % 60}:${String(secs%60).padStart(2, 0)}`)
console.log((5 * 3600) + (12 * 60) + 3)

const readableTime = num => {
    let secs = Math.floor(num / 1000)
    return Math.floor(secs / 3600) ?  `${Math.floor(secs / 3600)} hrs+`: `${(Math.floor(secs / 60) % 60)} mins+`
}

console.log(readableTime(187233342))

console.log(10000000 + Math.floor(Math.random() * 10000000))

function buddy(start,limit) {
    let answer = []
    const getDivisors = num => {
        let arr = []
        for (let i = 1; i <= num/2; i++) if (!(num%i)) arr.push(i)
        return arr
    }
    for (let i = start; i <= limit; i++) {
        let sum = getDivisors(i).reduce((acc, curr) => acc + curr, 0), pair = sum - 1;
        if (sum > i){
            if (getDivisors(pair).reduce((acc, curr) => acc + curr, 0) - 1 === i) {
                answer.push(i, pair)
                break
            }
        }
    }
    return answer.length ? answer : "Nothing";
}
console.log(buddy(23, 4669)) // [48, 75]
console.log(buddy(381, 4318)) // [1050, 1925]

const getDivisors = num => {
    let arr = [], n = num, i = 2
    const findNextFactor = number => {
        while (number % i != 0) i++
        arr.push(i, number/i)
        n = number/i, i = 2
    }
    while (n > 1) findNextFactor(n)
    let multiple = arr.filter((item,idx,arr) => arr.indexOf(item) != arr.lastIndexOf(item))
    for (let digit of new Set(multiple)) {
        for (let i = 2; i <= arr.filter(item => item === digit).length; i++) {
            if (num % Math.pow(digit, i) === 0)
            arr.push(Math.pow(digit, i), num/Math.pow(digit, i))
        }
    }
    return [...new Set(arr)]
}
console.log(getDivisors(48))

const SKILLS = [
    {source: "/images/skills/html5.svg", name: "HTML5"},
    {source: "/images/skills/css3.svg", name: "CSS3"},
    {source: "/images/skills/javascript.svg", name: "JavaScript"},
    {source: "/images/skills/bootstrap.svg", name: "Bootstrap 5"},
    {source: "/images/skills/tailwindcss.svg", name: "Tailwind CSS"},
    {source: "/images/skills/jquery.svg", name: "JQuery"},
    {source: "/images/skills/react.svg", name: "React JS"},
    {source: "/images/skills/nextjs.svg", name: "Next JS"},
    {source: "/images/skills/nodejs.svg", name: "Node JS"},
    {source: "/images/skills/express.svg", name: "Express JS"},
    {source: "/images/skills/mongodb.svg", name: "Mongo DB"},
    {source: "/images/skills/php.svg", name: "PHP"},
    {source: "/images/skills/mysql.svg", name: "MySQL"},
]

const PROJECTS = [
    {
        img: "/images/projects/omorofan.jpg", 
        title: "Omorofan", 
        description: "Company website for Omorofan EMT Nig Ltd", 
        skills: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP"],
        getSkillsSources: function() {
            return this.skills.map(item => SKILLS.find(element => element.name === item).source)
        }
    },
]

console.log(PROJECTS[0].getSkillsSources())

let n = 2, p = 5, r = 6
console.log(n < p && p < r)
 var obj;
 console.log(obj)

 console.log("I")
 setTimeout(() => {
    console.log("love")
 }, 0)
 console.log("JavaScript")