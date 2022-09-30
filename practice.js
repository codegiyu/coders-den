// for loop
// while loop
// do while loop
// for of loop
// for in loop

let arr = [10,20,30,40,50], i = 1, sum = 0


// do {
//     arr.push(i)
//     i++
// } while (i < 6)

// // 1, 3, 5

// console.log(arr)
let arr2 = []
// console.log(arr2.length)
for (number of arr) {
    // sum = arr.indexOf(number)
    arr2.push(arr.indexOf(number))
}

// console.log(sum)

// console.log(arr2)


// let obj2 = {
//     name: {e:'Hannah'},
//     location: 'Oyo',
//     level: 500
// }
// console.log('location' in obj2)
// let str = 'HANNAH '
// let [a, b, n, ...rest] = arr
// console.log([...str.toLowerCase()])

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let newSentence = sentence.replace(/[%$@&#!?.,;]/g, '').split(' ')
let obj = newSentence.reduce((acc, curr) => {
    if (curr in acc) {
        acc[curr]++
    } else {
        acc[curr] = 1
    }
    return acc
}, {})
let result = ['result', 0];

for (word in obj) {
    if (obj[word] > result[1]) {
        result[0] = word
        result[1] = obj[word]
    }
}

// let result = Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]

// console.log(result)

let object = {
    'I': 4,
    'am': 2,
}

// console.log(object['I'])

let str = 'some-people-like-soup'

// str = 'emos'
 
// str = str.split('').reverse().join('')

// console.log(str)
let fr = []
str.replace(/s(o)/g, (char1,b, index) =>  fr.push(index))

// console.log(fr)

const descendingOrder = n => Number([...String(n)].sort((a,b) => b - a).join(''))

console.log(descendingOrder(1583389362))

const arrgg = [[1,2,3,4,5], [5,6,7,8,9], [20,21,34,56,100]]
let small = arrgg.reduce((acc, curr) => Math.min(...curr) + acc,0)

// for(let num of arrgg){ 
//   small += num.sort((a, b)=> a - b)[0]
// }
console.log(small)

// [] -> 'No one likes this'
// ['Peter'] -> 'Peter likes this'
// ['Jacob', 'Alex'] -> 'Jacob and Peter like this'

const Nat = arr => {
    if (arr.length === 0) {
        return 'No one likes Natacha'
    } else if (arr.length === 1) {
        return arr[0] + ' likes this'
    } else if (arr.length >= 2 && arr.length <= 3) {
        return arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1) + ' like this'
    } else if (arr.length > 3) {
        return arr.slice(0, 2).join(', ') + ' and ' + (arr.length - 2) + ' others like this'
    }
}

console.log(Nat([]))


const Natty = num => num.toString(2).match(/1/g).length
console.log(Natty(1234))


const getSum = (a,b) => {
   let min = Math.min(a,b), max = Math.max(a,b), sum = 0;
   for (let i = min; i <= max; i++) {
        sum += i
   }
   return sum
}

console.log(getSum(2, -6))

const correctWord = (arr1, arr2) => {
    let [a, ...y] = arr2
    return [a, ...arr1, ...y]
}

console.log(correctWord([1,2,3], [5,7,4]))

console.log([1,2,3,4].slice(3,3))

const findEvenIndex = (arr) =>{
  let check = -1, end = arr.length;
  const sumArr = array => array.reduce((acc, curr) => acc + curr,0)
  for (let i = 0; i < arr.length; i++) {
    if (sumArr(arr.slice(0, i)) === sumArr(arr.slice(i + 1, end))) {
        check = i;
        break;
    }
  }
  return check
}
// return arr.reduce((acc, curr, idx, arr) => {
//     if (sumArr(arr.slice(0, idx)) === sumArr(arr.slice(idx + 1, end))) acc = idx
//     return acc
// },-1)

console.log(findEvenIndex([1,2,3,4,3,2,1]))

var re = /s/g, str2 = "scissors";
while ((match = re.exec(str2)) != null) {
    console.log(match['index']);
}

console.log(str2.match(/s/))
console.log(/s/g.exec(str2))

console.log(str2.split('').reduce((acc, curr, idx) => {
    if (curr === 's') acc.push(idx)
    return acc
},[]))

const rgb = (r, g, b) => [r,g,b].map(item => Math.max(0, Math.min(255, item)).toString(16).padStart(2, '0').toUpperCase()).join('')

console.log(rgb(200, 0, 179))

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
num = 2000
console.log(Math.max(0, Math.min(255, num)))

console.log('8'.padStart(4, '0'))

const method = x => Array.isArray(x) ? `[${x}]` : `${x}`

// console.log(method([true]))

// Number.prototype.toStrings = function(item) {
//     return `${this}`
// }
// Boolean.prototype.toStrings = function(item) {
//     return `${this}`
// }
// Array.prototype.toStrings = function(item) {
//     return `[${this}]`
// }
[Number, Array, Boolean].forEach(obj => obj.prototype.toString = function() { return JSON.stringify(this) } )
console.log([6].toString())
console.log((6).toString())
console.log(true.toString())


// const productFib = prod => {
//     const F = n => n in [0, 1] ? n : F(n-1) + F(n-2)
//     let x = 0, fib1 = F(x), fib2 = F(x + 1);
//     while (fib1 * fib2 < prod) {
//         // fib1 = F(x);
//         // fib2 = F(x + 1);
//         result = fib1 * fib2;
//         x++
//     }
//     return result == prod ? [fib1, fib2, true] : [fib1, fib2, false]
// }

// console.log(productFib(360684711361584))

// const yearDays = year => (year % 100 === 0 && year % 400 !== 0) || year % 4 !== 0 ? `${year} has 365 days` : `${year} has 366 days`
function yearDays(year) {
    return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
  }

console.log(yearDays(2205))


let aanu = [255, 1000, 1000000, 2082, 37892026]

console.log(aanu.sort((a,b) => a-b).reduce((acc, curr, idx, arr) => arr[0] + arr[1]))

const anyVariable = 'sEnteNCe' 

const anything = (n) => {
    // return n.slice(0,3).toUpperCase() + n.slice(3).toLowerCase()
    return n.split('').map((item, idx) => idx % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join('')
}
console.log(anything(anyVariable))