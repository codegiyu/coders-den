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


const productFib = prod => {
    let x = 0, fib = [1, 0]
    while (fib[0] * fib[1] < prod) {
        fib.unshift(fib[0] + fib[1])
        x++
    }
    return fib[0] * fib[1] == prod ? [fib[1], fib[0], true] : [fib[1], fib[0], false]
}

console.log(productFib(944284794478904)) 

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

let two = 'two-words'
console.log(two.substring(1,1))
// const capitals = str => str.split('').map((item, idx, arr) => arr.slice(0, idx).join('').toLowerCase() + arr[idx].toUpperCase() + arr.slice(idx + 1).join('')).filter(item => item.match(/[A-Z]/))

const capitals = str => str.replace(/(-|_)./g, m => [...m][1].toUpperCase()) //str.match(/[a-z]+/gi).map((item, idx) => idx > 0 ? item[0].toUpperCase() + item.slice(1) : item).join('')
console.log(capitals(two))


const firstNonRepeatingLetter = s => s.split('').reduce((acc,curr) => {
    let pattern = curr.match(/[\?\[\\\*\+\(\)]/) !== null ? '' : new RegExp(`${curr}`, 'gi')
    return pattern === '' ? acc : s.match(pattern).length === 1 ? [...acc, curr] : acc
},[])[0] || ''

console.log(firstNonRepeatingLetter('?'))

console.log([true, false, 'rt', 1, 0, null, [1, 3], {name: 'etj'}].filter(Boolean))

console.log('?'.match(/[\?\[\\\*\+\(\)]/))

const isPangram = str => new Set(str.toLowerCase().match(/[a-z]/g)).size < 26 ? false : true
console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

const queueTime = (customers, n) => {
    let queue = Array(n).fill(0), line = [...customers], time = 0;
    const fillQueue = () => {
        while (queue.find(el => el === 0) !== undefined && line.length) {
            queue[queue.findIndex(el => el === 0)] = line[0]
            line.shift()
        }
    }
    fillQueue()
    while (queue.find(el => Boolean(el) === true) !== undefined) {
       queue = queue.map(item => item === 0 ? item : item - 1)
       if (queue.find(el => el === 0) !== undefined && line.length) fillQueue()
       time++
    }
    
    return time
}
console.log(queueTime([1,2,3,4,5], 3))


let ar = [6,10,4,7,2,9,1,5], n = 3;
let dada = Array(n).fill().map((el, i) => [ar[i]])

console.log(dada)
for (let i = n; i < n + 1; i++) {
    let timeD = Array(dada.length).fill().map((el, idx) => dada[idx][dada[idx].length - 1] - ar[i])
    console.log(timeD)

    dada[timeD.indexOf(Math.min(...timeD))].push(ar[i])

    console.log(dada)
}

const totalTime = dada.map(ele => ele.reduce((acc, curr) => acc + curr))
console.log(totalTime)

// for (let i = 0; i < n; i++) {
//     if (ar[i] === 1) {
//         ar[n] ? ar.splice(i, 1, ++ar.splice(n,1)[0]) : ar.splice(i,1)
//     }
//     ar[i] ? ar[i]-- : null
// }
// console.log(ar)

// for (let i = 0; i < n; i++) {
//     if (ar[i] === 1) {
//         ar[n] ? ar.splice(i, 1, ++ar.splice(n,1)[0]) : ar.splice(i,1)
//     }
//     ar[i] ? ar[i]-- : null
// }
// console.log(ar)

// for (let i = 0; i < n; i++) {
//     if (ar[i] === 1) {
//         ar[n] ? ar.splice(i, 1, ++ar.splice(n,1)[0]) : ar.splice(i,1)
//     }
//     ar[i] ? ar[i]-- : null
// }
// console.log(ar)


console.log(ar.length)
console.log([0,0,0].find(el => Boolean(el) === true))
console.log(typeof ('2' ** 3))

const narcissistic = val => [...String(val)].reduce((acc, curr) => acc + curr ** String(val).length,0) === val
console.log(narcissistic(135))

function findUnique(arr) {
    let test = [...new Set(arr)]
    return arr[0] === test[0] && arr[1] === test[0]
    ? test[1]
    : arr[2] === test[0]
    ? test[1]
    : test[0]
}

console.log(findUnique([8,0,0,0]))
console.log(findUnique([8,'"8"',8,8,8,8]))
console.log(findUnique(['com', 'com', ['com'], 'com', ]))
console.log(findUnique([true, true, true, false, true, true]))

const oddChanger = arr => arr.reduce((acc,curr,idx,Arr) => (curr%2 ? [...acc, arr.filter(item => item%2).sort((a,b) => a - b).shift()] : [...acc, curr]),[])
// let [odds, indexes] = arr.reduce((acc,curr,idx) => curr % 2 == 1 ? [[...acc[0], curr], [...acc[1], idx]] : acc,[[],[]])
// for (let i in odds) {
//     arr[indexes[i]] = odds.sort((a,b) => a - b)[i]
// }
// return arr
console.log(oddChanger([5,8,6,3,4]))
console.log(oddChanger([9,8,7,6,5,4,3,2,1,0]))

const add = (str1, str2) => {
    let [num1, num2, base, remainder, result, sum] = [[...str1].reverse(), [...str2].reverse(), str1.length > str2.length ? str1 : str2, 0, [], 0]
    for (let i = 0; i < base.length; i++) {
        sum = (Number(num1[i]) || 0) + (Number(num2[i]) || 0) + remainder
        if (i < base.length - 1) {
            if (sum > 9) {
                result.push(`${sum - 10}`)
                remainder = 1
            } else {
                result.push(sum)
                remainder = 0
            }
        } else {
            result.push(...[...String(sum)].reverse())
        }
        
    }
    return result.reverse().join('')
}
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
console.log(add('91', '909'))
console.log(add('63', '99'))

let tail = [1,3,5,7,9,10]

// console.log(tail.sort((a, b) => b - a))
console.log(tail.reduce((acc, curr, index, arr) => {
    return [...acc, curr]
}, []))

const reverseWords = str => str.split(" ") //str.replace(/\w*/gi, word => word.split('').reverse().join(''))

console.log(reverseWords("The dog   jumped over the hen"))

const flipNum = num => {
    return Number(String(num).split("").reverse().join("").match(/\d{1,2}/g).reverse().join(""))
}
console.log(flipNum(123456789))

// let previousIndex = 2
// let currentIndex;

// setInterval(() => {
//     let arr = [1,4,9]
    
//     if (previousIndex === 2) {
//         currentIndex = 0
//         previousIndex = 0
//     } else if (previousIndex === 0) {
//         currentIndex = 1
//         previousIndex = 1 
//     } else if (previousIndex === 1) {
//         currentIndex = 2
//         previousIndex = 2
//     } 

//     console.log(arr[currentIndex])
// }, 2000)