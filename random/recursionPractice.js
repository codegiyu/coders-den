const countDown = number => {
    if (number === 1) {
        return [1]
    }
    return [number, ...countDown(number - 1)]
}
// [5, ...]
// [5, 4, ...]
// [5, 4, 3, ...]
// [5, 4, 3, 2, ...]

const countDownTwo = number => {
    let arr = []
    if (number === 1) {
        arr.push(number)
        return arr
    }
    arr.push(number)
    arr.push(...countDownTwo(number - 1))
    return arr
}
// [5, 4, 3, 2, 1]
// [4, 3, 2, 1 ]
// [3, 2, 1]
// [2, 1]
// [1]

console.log(countDown(5))
console.log(countDownTwo(5))

const four = () => 4
const five = () => 5
const sixAndSeven = () => [6, 7]

const arr2 = [...sixAndSeven(), five()]
// arr2.push(...sixAndSeven())
console.log(arr2)

const countUp = num => {
    // let arr = []
    // arr.unshift(num)
    if (num === 1) {
        return [num]
    }
    // arr.unshift(...countUp(num - 1))
    return [...countUp(num - 1), num]
}
console.log(countUp(5))

// [...countUp(4), 5]
// [1, 2, 3, 4, 5]
// [1]

const addArray = arr => {
    // let num = arr[0]
    let arr2 = [...arr]
    if (arr.length == 1) {
        return arr[0]
    }
    arr2.shift()
    return arr[0] + addArray(arr2)
}

let nums = [1,5,6,0,3,5]

console.log(addArray(nums))
console.log(nums)
console.log(nums.find((item, idx, arr) => item < 1) || null)
// 1 + [5,6,9,20,45]
// 1 + 5 + [6,9,20,45]
// 1 + 5 + 6 + [9,20,45]
// . 
// .
// .
// 1 + 5 + 6 + 9 + 20 + 45

// fling -> gnilf

const reverseString = str => {
    let char = str.slice(-1)
    if (str.length === 1) {
        return char
    }
    return char + reverseString(str.slice(0, -1))
}
console.log(reverseString('fling'))
// fling
// '' + 'g' + reverseString('flin')
// '' + 'g' + 'n' + reverseString('fli')

const fib = n => {
    if (n == 0 || n == 1) {
        return n
    }
    return fib(n-1) + fib(n-2)
}
console.log(fib(3))

// 0, 1, 1, 2, 3, 5, 8, 13, 21

// 4th fibonacci = 3rd + 2nd
// 3rd fibonacci = 2nd + 1st 
// 2nd fibonacci = 1 + 0

const fibo = num => {
    if (num === 1){
        return [0,1]
    }
    return [...fibo(num-1), (function fibon(n) {
        if (n == 0 || n == 1) {
            return n
        } else {
        return fibon(n-1) + fibon(n-2)}
    })(num)]
}
console.log(fibo(7))

// 4th fib = [0th, 1st, 2nd, 3rd, 4th] = [...fibo(3), fib(4)]
//                                       [...fibo(2), fib(3), fib(4)]
//                                       [...fibo(1), fib(2), fib(3), fib(4)]
//                                       [0, 1, 1, 2, 3]

const searchString = str => {
    let num = str[0], arr = [];
    str = str.slice(1)
    for (let i = 0; i < str.length; i++) {
        let substring = str[i], set = new Set([...substring]), k = i;
        while (k < str.length - 1) {
            
            if (set.size <= num) {
                substring += str[k+1]
                set = new Set([...substring])
                if (set.size > num) {
                    substring = substring.slice(0, -1)
                    break
                }
            }
            arr.push(substring)
            set = new Set([...substring])
            k++
        }
    }
    return arr//.reduce((acc, curr) => acc.length > curr.length ? acc : curr)
}

console.log(searchString('2aababacd'))

function toCamelCase(str){
    return str.replace(/[_-]/g, ' ').split(' ').map((item, idx) => idx > 0 ? item[0].toUpperCase() + item.slice(1) : item).join('')
    // return str.replace(/[_-](.)/g, (x, c) => c.toUpperCase())
}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("A-B-C"))