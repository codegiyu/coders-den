const countdown = number => {
    if (number == 1) {
        return [1]
    }
    return [number, ...countdown(number - 1)]
}

console.log(countdown(8))

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

const countUp = (a, n) => {
    if (a == n - 1){
        return [a]
    } else {
        return [a, ...countUp(a + 1, n)]
    }
}
console.log(countUp(1, 10))

const secondCountUp = n => {
    if (n <= 1) {
        return [n]
    }
    return [...secondCountUp(n - 1), n]
}
console.log(secondCountUp(9))

const fib = n => {

    if (n in [0, 1]) {
        return n
    } else if (n < 0) {
        return 'Please input a positive integer'
    }
    return fib(n-1) + fib(n-2)
}

console.log(fib(4))

0, 1, 1, 2, 3, 5, 8, 13, 21 

fib(4)
fib(3) + fib(2) 
fib(2) + fib(1) + fib(1) + fib(0)
fib(1) + fib(0) + 1 + 1 + 0
1 + 0 + 1 + 1 + 0


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
