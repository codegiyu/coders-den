const countdown = number => {
    console.log(number)
    if (number === 1) {
        return [1]
    }
    return [number, ...countdown(number - 1)]
}

const countDownTwo = number => {
    let arr = []
    if (number === 1) {
        arr.push(number)
        return arr
    } else {
        arr.push(number)
        arr.push(...countDownTwo(number - 1))
        return arr
    }
}

console.log(countdown(4))
console.log(countDownTwo(4))

let arr = [2,3]
arr.push(4)
arr.push(5)
console.log(arr)
let array = [2, 3]

let four = () => 4
let five = () => 5
let fourAndFive = () => [four(), five()]
console.log(fourAndFive())
console.log([2, 3, ...fourAndFive()])

const factorial = n => {
    if (n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

factorial(5)
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1

// click   k + clic ..... c + cli

const flipString = str => {
    if (str.length == 1) {
        return str
    }
    return str.slice(-1) + flipString(str.slice(0, -1))
}

console.log(flipString("click"))

const countUp = n => {
    if (n <= 1) {
        return [n]
    }
    return [...countUp(n - 1), n]
}
console.log(countUp(9))

const F = n => n in [0, 1] ? n : F(n-1) + F(n-2)

console.log(F(5))

0, 1, 1, 2, 3, 5, 8, 13, 21 

// fib(4)
// fib(3) + fib(2) 
// fib(2) + fib(1) + fib(1) + fib(0)
// fib(1) + fib(0) + 1 + 1 + 0
// 1 + 0 + 1 + 1 + 0


const oddNumbersOnly = (start, end) => {
    if (start % 2 == 1 && start == end) {
        return [start]
    } else if (start % 2 == 0 && start + 1 == end) {
        return [end]
    } else if (start % 2 == 0 && end % 2 == 0) {
        return [start + 1, ...oddNumbersOnly(start + 3, end -1)]
    } else if (start % 2 == 0 && end % 2 ==1) {
        return [start + 1, ...oddNumbersOnly(start + 3, end)]
    } else if (start % 2 == 1) {
        return [start, ...oddNumbersOnly(start + 2, end)]
    }
}

console.log(oddNumbersOnly(2, 11))


const upper = arr => {
    let item = arr[0];
    let newArr = [...arr]
    newArr.splice(0, 1)
    if (arr.length == 1) {
        return [item.toUpperCase()]
    }
    return [item.toUpperCase(), ...upper(newArr)]
}
let numbers = [1, 2, 3, 4, 5]
numbers.splice(0, 1)
console.log(numbers)

let fruits = ['apples', 'oranges', 'bananas', 'mangoes']
console.log(upper(fruits))
console.log(fruits)

//so you can see that the function upper() doesn't mutate the array


const fizzBuzz = () => {
    let arr = [];
    for (let i = 1; i < 101; i++) {
        if (i%3 == 0 && i%5 == 0) {
            arr.push('fizzbuzz')
        } else if (i%3 == 0) {
            arr.push('fizz')
        } else if (i%5 == 0) {
            arr.push('buzz')
        } else {
            arr.push(i)
        }
    }
    console.log(arr)
}

fizzBuzz()

console.log(5 > 7 || '' || 0 || null)

let rand = [0,1,2,3,4,5,6,7,8,9]
let addedId = 'ID'
for (let i = 1; i < rand.length; i++) {
    let mercy = rand[Math.floor(Math.random() * 5)]
    addedId += mercy
}

console.log(addedId)
console.log(...rand.slice(-1))
