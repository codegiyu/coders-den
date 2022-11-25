console.log(2 + 2)

const words = str => {
    if (!isNaN(Number(str))) return String(Number(str))

    let numbersObj = {
        "one": 1,
        1: 1,
        "two": 2,
        2: 2,
        "three": 3,
        3: 3,
        "four": 4,
        4: 4,
        "five": 5,
        5: 5,
        "six": 6,
        6: 6,
        "seven": 7,
        7: 7,
        "eight": 8,
        8: 8,
        "nine": 9,
        9: 9,
        "ten": 10,
        10: 10,
        "eleven": 11,
        11: 11,
        "twelve": 12,
        12: 12,
        "thirteen": 13,
        13: 13,
        "fourteen": 14,
        14: 14,
        "fifteen": 15,
        15: 15,
        "sixteen": 16,
        16: 16,
        "seventeen": 17,
        17: 17,
        "eighteen": 18,
        18: 18,
        "nineteen": 19,
        19: 19,
        "twenty": 20,
        20: 20,
        "thirty": 30,
        30: 30,
        "fourty": 40,
        40: 40,
        "forty": 40,
        40: 40,
        "fifty": 50,
        50: 50,
        "sixty": 60,
        60: 60,
        "seventy": 70,
        70: 70,
        "eighty": 80,
        80: 80,
        "ninety": 90,
        90: 90,
        "hundred": 100,
        100: 100,
        "thousand": 1000,
        1000: 1000,
        "million": 1000000,
        1000000: 1000000,
        "billion": 1000000000,
        1000000000: 1000000000,
        "trillion": 1000000000000,
        1000000000000: 1000000000000,
        "and": "and",
    }
    let wordsArr = str.split(" ")
    if (wordsArr.some(word => numbersObj[word] == undefined)) return "Invalid"
    // let available = {
    //     hundred: [1, str.indexOf("hundred") != -1 ? str.indexOf("hundred") : null],
    //     thousand: [2, str.indexOf("thousand") != -1 ? str.indexOf("thousand") : null],
    //     million: [3, str.indexOf("million") != -1 ? str.indexOf("million") : null],
    //     billion: [4, str.indexOf("billion") != -1 ? str.indexOf("billion") : null],
    //     trillion: [5, str.indexOf("trillion") != -1 ? str.indexOf("trillion") : null],
    // }
    // console.log(available.hundred, available.thousand)
    // let availableArr = Object.entries(available).filter(item => item[1][1])

    // console.log(availableArr)
    
    let array = wordsArr.reduce((acc, curr) => {
        if (!acc.length) acc.push(numbersObj[curr])
        else if (curr === "and") {

        }
        else if (
            numbersObj[curr] > acc[acc.length - 1] 
            && String(numbersObj[curr]).length > String(acc[acc.length - 1]).length 
            && (numbersObj[curr] === 100 || numbersObj[curr] === 1000 || numbersObj[curr] === 1000000 || numbersObj[curr] === 1000000000 || numbersObj[curr] === 1000000000000)
            ) {
                acc[acc.length - 1] = acc[acc.length - 1] * numbersObj[curr]
        } else {
            acc.push(numbersObj[curr])
        }
        return acc
    }, [])

    return array.reduce((acc,curr) => acc + curr, 0)
}
// console.log(words("10"))
// console.log(words("ten thousand"))
console.log(words("one hundred million ten thousand and forty seven"))
console.log(words("one 100"))

let arr = [1]
if (5 > arr[arr.length - 1]) arr.push(5)
arr[1] = arr[1] * 2
console.log(arr)
console.log("ten thousand".indexOf("million"))
console.log(Number(""))