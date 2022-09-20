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

// 2. Google Meet meeting ids usually have 3 random letters, then 4 random letters, 
//    then 3 random letter, separated by dashes, eg abc-defg-hij. Write a function 
//    that checks if a meeting id is a valid Google Meet id. Your function should return 
//    'Valid Meet ID' OR 'Invalid Meet ID'

// 3. Write a recursive function that takes in an array of numbers 
//    and returns the product of all the numbers

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

