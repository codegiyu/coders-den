// ERROR HANDLING

// const testVar = undefined

// const value = testVar.prop

// window.addEventListener("error", (e) => {
//     console.log({error: e})
// })

// console.log(["yes", "no"].split())

try {
    let num = 10
    // console.log(num.toString(60))
    // throw 'Error2' // generates an exception with a string value
    // throw 42 // generates an exception with the value 42
    // throw true // generates an exception with the value true
    // throw new Error('Required') // generates an error object with the message of Required
    throw new SyntaxError('Required') // generates a syntax error object with the message of Required
    throw new RangeError('Required') // generates a range error object with the message of Required
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log({name: err.name, message:err.message, err})
} finally {
    console.log('In any case I will be executed')
}

console.log("yes")

const throwErrorExampleFun = () => {
    let message
    // let x = prompt('Enter a number: ')
    // try {
    //   if (x == '') throw 'empty'
    //   if (isNaN(x)) throw 'not a number'
    //   x = Number(x)
    //   if (x < 5) throw 'too low'
    //   if (x > 10) throw 'too high'
    // } catch (err) {
    //   console.log(err)
    // }

    return null

    x = "hello"
}
throwErrorExampleFun()

// let square = 2 x 2
// console.log(square)
// console.log('Hello, world")

console.log(decodeURIComponent("www.hel%20lo.com"))

const sampleRecursion = (n) => {
    if (n <= 1) return n;

    return n + sampleRecursion(n-1);
}

console.log(sampleRecursion(5))

// 5 + sR(4);
// 5 + 4 + sR(3);
// 5 + 4 + 3 + sR(2);
// 5 + 4 + 3 + 2 + sR(1);
// 5 + 4 + 3 + 2 + 1;

const newObj = {key: "value"}
console.log(newObj)
console.log(newObj.__proto__)
newObj.__proto__ = {hello: "world"}
console.log(newObj.__proto__)