// 1. Write a one-line function that takes in a number as an argument and returns either 
//    'positive', 'negative' or zero depending on the sign of the number.

const checkSign = num => num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'
console.log(checkSign(9))
console.log(checkSign(0))
console.log(checkSign(-9))

const checkSignTwo = num => Math.sign(num) == 1 ? 'positive': Math.sign(num) == -1 ? 'negative' : 'zero'
console.log(checkSignTwo(-10))
console.log(checkSignTwo(0))
console.log(checkSignTwo(10))

// 2. Write a function that takes in a number and checks if it is divisible by 2, 3, 4, 5 and 10. 
//    So it would return sth like... 30 is divisible by 2, 3, 5 and 10 OR 9 is divisible by 3 OR
//    53 is not divisible by 2, 3, 4, 5 or 10

const divisibles = num => {
    let divisors = [], dividers = [2, 3, 4, 5, 10];
    for (let i = 0; i < dividers.length; i++) {
        if (Number(num) % dividers[i] == 0) divisors.push(dividers[i])
    }
    if (!divisors.length) {
        return `${num} is not divisible by 2, 3, 4, 5 or 10`
    } else if (divisors.length == 1) {
        return `${num} is divisible by ${divisors[0]}`
    } else {
        return `${num} is divisible by ${divisors.slice(0, divisors.length-1).join(', ')} and ${divisors[divisors.length-1]}`
    }
}
console.log(divisibles(6))
console.log(divisibles(9))
console.log(divisibles(53))

// 3. Write a function that takes in an array as an argument and checks if there are any repeated items in the array. 
//    As long as there is one repeated item, it will return true. Else it will return false.

const duplicateItems = arr => new Set(arr).size == arr.length ? false : true
console.log(duplicateItems([1,2,3,4,3]))
console.log(duplicateItems([1,2,3,4,5,6]))

// 4. Write a function that generates 5 random numbers and returns 'ID' plus the 5 random numbers.
//    So it will return sth like ID12345 OR ID73906

const randId = () => 'ID' + Math.random().toString().slice(2, 7)
console.log(randId())
console.log(randId())


// 1. Write a function that takes in a nigerian phone number as an argument and 
//    checks if it has 11 digits only and if it is an MTN number. Assume MTN numbers 
//    start with 0706, 0803, 0810, and 0906.Your function should return 
//    'Valid MTN phone number' OR 'Invalid MTN phone number'



const mtnChecker = str => /^0(706|803|810|906)\d{7}$/.test(str) 
? 'Valid MTN phone number' : 'Invalid MTN phone number'

console.log(mtnChecker('07061234567'))
console.log(mtnChecker('08161234567'))
console.log(mtnChecker('08101234567'))
console.log(mtnChecker('081012345678'))
console.log(mtnChecker('19061234567'))

// 2. Google Meet meeting ids usually have 3 random letters, then 4 random letters, 
//    then 3 random letter, separated by dashes, eg abc-defg-hij. Write a function 
//    that checks if a meeting id is a valid Google Meet id. Your function should return 
//    'Valid Meet ID' OR 'Invalid Meet ID'

const meetIdChecker = str => /^[a-z]{3}-[a-z]{4}-[a-z]{3}$/.test(str) ? 'Valid Meet ID' : 'Invalid Meet ID'

console.log(meetIdChecker('abc-defg-hij'))
console.log(meetIdChecker('a3c-defg-hij'))
console.log(meetIdChecker('abc-def-uhij'))
console.log(meetIdChecker('abcd-efg-hij'))
console.log(meetIdChecker('zxy-omns-rea'))

// 3. Write a recursive function that takes in an array of numbers 
//    and returns the product of all the numbers

const arrayProduct = arr => arr.length == 1 ? arr[0] : arr[0] * arrayProduct(arr.slice(1, arr.length))

console.log(arrayProduct([8, 4, 3]))
console.log(arrayProduct([1, 2, 3, 4, 5, 6, 7]))

// 4. An API fetch returns the following array of objects named data. Write a function 
//    that will take in the array and return an array of objects with only name, population, 
//    capital, currency and flag as keys. The value for name should be the official name.
//    The value for capital should be the first item in the capital array. The value for currency 
//    should be the key inside currencies object. The value for flag should be the value of the
//    png key in the flags object. The result should be sorted by population from lowest to highest.

const data =  [
                {
                    "name":{
                        "common":"United States",
                        "official":"United States of America",
                    },
                    "currencies":{
                        "USD":{
                            "name":"United States dollar",
                            "symbol":"$"
                        }
                    },
                    "capital":["Washington, D.C."],
                    "altSpellings":["US","USA","United States of America"],
                    "languages":{
                        "eng":"English"
                    },
                    "borders":["CAN","MEX"],
                    "area":9372610.0,
                    "population":329484123,
                    "fifa":"USA",
                    "continents":["North America"],
                    "flags":{
                        "png":"https://flagcdn.com/w320/us.png"
                    },
                },

                {
                    "name":{
                        "common":"United Arab Emirates",
                        "official":"United Arab Emirates",
                    },
                    "currencies":{
                        "AED":{
                            "name":"United Arab Emirates dirham",
                            "symbol":"د.إ"
                        }
                    },
                    "capital":["Abu Dhabi"],
                    "altSpellings":["AE","UAE","Emirates"],
                    "languages":{
                        "ara":"Arabic"
                    },
                    "borders":["OMN","SAU"],
                    "area":83600.0,
                    "population":9890400,
                    "fifa":"UAE",
                    "continents":["Asia"],
                    "flags":{
                        "png":"https://flagcdn.com/w320/ae.png"
                    },
                }
            ]

result = [
            {
                "name": "United Arab Emirates",
                "population": 9890400,
                "capital": "Abu Dhabi",
                "currency": "AED",
                "flag": "https://flagcdn.com/w320/ae.png"
            },

            {
                "name": "United States of America",
                "population": 329484123,
                "capital": "Washington, D.C.",
                "currency": "USD",
                "flag": "https://flagcdn.com/w320/us.png"
            }
        ]

const countriesData = arr => arr.map(item => {
    return {
        "name": item.name.official,
        "population": item.population,
        "capital": item.capital[0],
        "currency": String(Object.keys(item.currencies)),
        "flag": item.flags.png
    }
})

console.log(countriesData(data))

// const unique = sth => Array.isArray(sth) == true 
// ? sth.filter((curr, idx, arr) => curr != arr[idx+1]) 
// : sth.split('').filter((curr, idx, arr) => curr != arr[idx+1])

// console.log(unique('AAAAABBBBBCCDAABBBB'))
// console.log(unique('ABBBCcAD'))
// console.log(unique([1,2,2,2,3,4]))
// let arry = [1,2,3,4,5]
// console.log(arry.filter((curr, idx, arr) => idx < 2 ))

// const integerArray = n => n == 1 ? [n] : [n, ...integerArray(n-1)]

// console.log(integerArray(5))
// ID48902633
const edward = () => 10 + Math.floor(Math.random() * 11)
console.log(edward())

const flipString = str => {
    if (str.length == 1) {
        return str
    }
    return str.slice(-1) + flipString(str.slice(0, -1))
}

console.log(flipString("3294841232"))
console.log(String(232148492).match(/\d{1,3}/g).join())
console.log(String(232148492).slice(0,2))
console.log(String(232148492).match(/\d{1,3}/g).join())

// const comma = num => {
//     return String(num).slice(0,String(num).length%3) + 

//     // return num.toLocaleString()
// }

console.log(comma(123456789))
console.log(comma(12345678))
console.log(comma(1234569))

let ar = [1,2,3]
const f = arr => {
    let bc = ``
    for(let i = 0; i < arr.length; i++) {
        bc += `come here ${arr[i]} `
    }
    return bc
}
let ra = `I am ${f(ar)} years`
console.log(ra)