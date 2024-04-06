// // // function myFunction(a) {
// // //     const name = { key: a}
// // //     return name
// // // }
// // // console.log(myFunction('Hannah'))


// // // Write a function that takes an array (a) and a value (n) as argument
// // // Return the nth element of 'a'
// // // function myFunction(a, n) {

// // //     return a[n - 1]
// // // }
// // // console.log(myFunction([1,4,8,34,88,3], 1))


// // // Write a function that takes an object with two properties as argument
// // // It should return the value of the property with key country
// // // function myFunction(obj) {

// // //     return obj['country']
// // // }
// // // console.log(myFunction({ 'continent like': 'Asia', country: 'Japan' }))
// // // console.log(myFunction({ country: 'Sweden', 'continent like': 'Europe' }))


// // // Write a function that takes an array (a) as argument
// // // Return the number of elements in a
// // function myFunction(a) {
// //     return 
// // }
// // console.log(myFunction([1,4,8,34,88,3]))


// // const bouncingBall = (h,  bounce,  window) => {
// //     if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1
// //     if (h < window) return 0
// //     if (h > window && (h * bounce) < window) return 1
// //     if (h > window && (h * bounce >= window )) return 2 + bouncingBall(h * bounce, bounce, window)
// // }

// // console.log(bouncingBall(20, 0.5, 1))
// // console.log(bouncingBall(1, 0.5, 1))
// // console.log(bouncingBall(3, 0.66, 1.5, 2))

// // const brackets = (str, r=0, s=0, c=0) => {
// //     for (let item of str) {
// //         if (item === '(') r++
// //         if (item === '[') s++
// //         if (item === '{') c++
// //         if (item === ')') r--
// //         if (item === ']') s--
// //         if (item === '}') c--
// //     }
// //     if (r !== 0 || s !== 0 || c !== 0) return false
// //     return true
// // }
// // console.log(brackets('([])()({[][]()})'))
// // console.log(brackets('([(]))'))


// // class PaginationHelper {
// //     constructor (arr, n) {
// //         this.array = arr
// //         this.itemsPerPage = n
// //     }
// //     pageCount() {
// //         return Math.ceil(this.array.length / this.itemsPerPage)
// //     }
// //     itemCount = () => {
// //         return this.array.length
// //     }
// //     pageItemCount(x) {
// //         return x > this.pageCount() - 1 || x < 0 
// //         ? -1 
// //         : x === this.pageCount() - 1 
// //         ? this.array.length % this.itemsPerPage || this.itemsPerPage
// //         : this.itemsPerPage
// //     }
// //     pageIndex(x) {
// //         return !this.array.length 
// //         ? -1 
// //         : x > this.array.length || x < 0 
// //         ? -1
// //         : Math.floor(x / this.itemsPerPage)
// //     }
// // }

// // var helper = new PaginationHelper(['a','b','c','d','e','f',1,], 4);
// // console.log(helper.pageCount()); //should == 2
// // console.log(helper.itemCount()); //should == 6
// // console.log(helper.pageItemCount(0)); //should == 4
// // console.log(helper.pageItemCount(1)); // last page - should == 2
// // console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // // pageIndex takes an item index and returns the page that it belongs on
// // console.log(helper.pageIndex(5)); //should == 1 (zero based index)
// // console.log(helper.pageIndex(2)); //should == 0
// // console.log(helper.pageIndex(20)); //should == -1
// // console.log(helper.pageIndex(-10)); //should == -1


// // const pairs = str => {
// //     let arr = str.match(/[a-z]{1,2}/gi)
// //     if (str.length & 1) arr[arr.length - 1] += '_'
// //     return arr
// // }
// // console.log(pairs('abcdefg'))

// // const tribonacci = (signature,n) => {
// //     if (n === 0) return []
// //     if (n <= 3) return signature.slice(0,n)
// //     else {
// //         let i = 3
// //         while (i < n) {
// //             signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3])
// //             i++
// //         }
// //         return signature
// //     }
// // }
// // console.log(tribonacci([3,2,1],10))
// // console.log(tribonacci([1,1,1],1))
// // console.log(tribonacci([1,2,3],2))
// // console.log(tribonacci([1,2,3],3))
// // console.log(tribonacci([1,2,3],4))
// // console.log(tribonacci([300,200,100],0))

// // function domainName(url){
// //     return (url.match(/(?<=(^(https:\/\/(www.)?)?|http:\/\/(www.)?|www.))\w+(-?\w*)*(?=\.)/g) || ['']).reduce((acc,curr,idx,arr) => arr[arr.length - 1])
// //     // return url.match(/((?<=htt))/g)
// // }
// // console.log(domainName("oyxu0h29361qs4y5y5ipfg72.tv/error"));
// // console.log(domainName("http://www.google.co.jp"));
// // console.log(domainName("www.xakep.ru"));
// // console.log(domainName("https://youtube.com"));
// // console.log(domainName(""));

// // const alphabetPosition = str => str.toUpperCase().replace(/[^a-z]/gi, '').replace(/[a-z]/gi, (m,i,a) => a.charCodeAt(i) - 64 + ' ').trim()

// // console.log(alphabetPosition("The sunset sets at twelve o'clock"))

// // // function isValidWalk(walk, ns=0, we=0) {
// // //     walk.reduce((acc,curr) => {
// // //       if (curr === 'n') return [++ns, we]
// // //       if (curr === 's') return [--ns, we]
// // //       if (curr === 'w') return [ns, ++we]
// // //       if (curr === 'e') return [ns, --we]
// // //     },[ns, we])
// // //     return walk.length === 10 && ns === 0 && we === 0
// // // }
// // function isValidWalk(walk) {
// //     return walk.reduce(function(w,step){ return w + {
// //       "n":-1,
// //       "s":1,
// //       "e":99,
// //       "w":-99
// //       }[step]
// //     },0)
// // }
// // console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// // console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// // console.log(isValidWalk(['w', 'n','n','e']));
// // console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

// // let jar = {"n":-1, "s":1, "e":99, "w":-99}['e']
// // console.log(jar)

// // const orderWeight = str => str.split(' ').sort((a,b) => {
// //     if ([...a].reduce((acc,curr) => acc + Number(curr), 0) === [...b].reduce((acc,curr) => acc + Number(curr), 0)) {
// //         return a.localeCompare(b)
// //     } else {
// //         return [...a].reduce((acc,curr) => acc + Number(curr), 0) - [...b].reduce((acc,curr) => acc + Number(curr), 0)
// //     }
// // }).join(' ')
// // console.log(orderWeight("103 123 4444 99 2000"))
// // console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))

// // console.log([...'103825420'].sort((a,b) => a.localeCompare(b)))

// // const score = dice => {
// //     let counts = {1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0'}
// //     let single = {1: '100', 2: '0', 3: '0', 4: '0', 5: '50', 6: '0'}
// //     let triple = {1: '1000', 2: '200', 3: '300', 4: '400', 5: '500', 6: '600'}
// //     return dice.reduce((acc, curr) => {
// //         acc += +single[curr]
// //         counts[curr]++
// //         if (!(counts[curr] % 3) && (curr == 1 || curr == 5)) {
// //             curr == 1 ? acc += 700 : curr == 5 ? acc += 350 : acc += 0
// //         } else if (!(counts[curr] % 3) && (curr == 2 || curr == 3 || curr == 4 || curr == 6)) {
// //             acc += +triple[curr]
// //         }
// //         return acc
// //     },0)
// // }
// // console.log(score( [2, 3, 4, 6, 2] ))
// // console.log(score( [4, 4, 4, 3, 3,] ))
// // console.log(score( [4, 4, 4, 3, 3, 1, 1] ))
// // console.log(score( [4, 4, 4, 3, 3, 1, 1, 1] ))
// // console.log(score( [2, 4, 4, 5, 4] ))

// // const sumDigPow = (a, b) => {
// //     let arr = []
// //     while (a <= b) {
// //         if ([...String(a)].reduce((acc, curr, idx) => acc + Math.pow(curr, (1 + idx)), 0) === a) {
// //             arr.push(a)
// //         }
// //         a++
// //     }
// //     return arr
// // }
// // console.log(sumDigPow(1, 99999))

// // let a = 1
// // let arr = Array(20).fill().map(() => a++)
// // let arr2 = Array(26).fill().map((item, idx) => String.fromCharCode(97 + idx))
// // console.log(arr)
// // console.log(arr2)

// // const humanReadable = s => `${String(Math.floor(s / 3600)).padStart(2, 0)}:${String(((s - (s % 60)) / 60) % 60).padStart(2, 0)}:${String(s % 60).padStart(2, 0)}`
// // console.log(humanReadable(200))
// // console.log(humanReadable(59))
// // console.log(humanReadable(90))
// // console.log(humanReadable(3599))
// // console.log(humanReadable(3600))
// // console.log(humanReadable(359998))
// // console.log(humanReadable(86399))
// // console.log(humanReadable(45296))
// // console.log(humanReadable(142582))
// // console.log(humanReadable(100000))
// // console.log(((20000 - (20000 % 60)) / 60) % 60)

// // const incrementString = str => {
// //     let num = Number(str.match(/\d+$/g)), numLength = str.match(/\d+$/g) ? str.match(/\d+$/g)[0].length : 0
// //     let rest = str.match(/\d+$/g) ? str.slice(0, -numLength) : str
// //     return rest + String(num + 1).padStart(numLength, 0)
// // }
// // // const incrementString = str => str.replace(/([0-8]|9)$/g, e => e == 9 ? Number(e) + 1)
// // console.log(incrementString('foobar000'))
// // console.log(incrementString('foo'))
// // console.log(incrementString('foobar099'))
// // console.log(incrementString('1'))
// // console.log(incrementString('foo99bar99'))
// // console.log(incrementString('foobar009'))

// // function primeFactors(n){
// //     let pf = 2, factors = {}, nu = n
// //     const factorDivide = (num, f) =>{
// //         while (!(num % f)) {
// //             factors[f] = (factors[f] || 0) + 1
// //             num /= f
// //         }
// //         nu = num
// //     }
// //     // const findNextPrime = (f) => {
// //     //     f++
// //     //     const isPrime = x => {
// //     //         for (let i = 2; i <= Math.sqrt(x); i++) {
// //     //             if (!(x % i)) return false
// //     //         }
// //     //         return true
// //     //     }
// //     //     while (!isPrime(f)) f++
// //     //     pf = f
// //     // }
// //     while (nu != 1) {
// //         factorDivide(nu, pf)
// //         pf++// findNextPrime(pf)
// //     }
// //     return Object.entries(factors).reduce((acc,curr) => {
// //         return curr[1] === 1 ? acc + `(${curr[0]})` : acc + `(${curr[0]}**${curr[1]})`
// //     },'')
// // }

// // console.log(primeFactors(2004060))

// // const countDiv = num => Array(num).fill(0).map((a,b) => b + 1).reduce((acc, curr) => !(num%curr) ? [...acc, curr] : acc, []).length
// // console.log(countDiv(4))
// // console.log(countDiv(10))
// // console.log(countDiv(12))
// // console.log(countDiv(30))

// // function permutations(string) {
// //     const revStr = str => str.split('').reverse().join('')
// //     const permute = str => {
// //         if (str.length === 1) return [str]
// //         if (str.length === 2) return [str, revStr(str)]
// //         return str.split('').map((itm, idx, arr) => {
// //                 let array = [...arr], letter = array.splice(idx, 1), word = array.join('');
// //                 return permute(word).map(item => letter + item)
// //             }).flatMap(item => item)
// //     }
// // 	return [...new Set(permute(string))];
// // }

// // console.log(permutations('aabb'))
// // console.log(permutations('a'))
// // console.log(permutations('ab'))
// // console.log(permutations('abc'))

// const isValid = data => {
//     let big = data.length, small = Math.sqrt(big), sampleArr = Array(big).fill().map((item,idx) => idx + 1);
//     if (big < 1 || !Number.isInteger(small) || !data.every(item => item.length === big)) return false
//     const arrange = arr => {
//         let arrangedArr = [...arr]
//         return arrangedArr.sort((a,b) => a - b)
//     }
//     const transpose = array => array.map((item,idx) => item.map((itm, id) => array[id][idx])) 
//     const square = array => {
//         return array.map((item,idx) => {
//             return Array(small).fill(0).reduce((acc,curr,index) => [...acc, 
//                 ...array[(Math.floor(idx/small) * small) + index].slice((idx % small) * small, ((idx % small) * small) + small)],[])
//         })
//     }
//     const checkArr = arr => arrange(arr).map((item,idx) => item === sampleArr[idx]).every(item => item === true)
//     const rowsCheck = arr => arr.map(item => checkArr(item)).every(item => item === true)
//     const colsCheck = arr => transpose(arr).map(item => checkArr(item)).every(item => item === true)
//     const squareCheck = arr => square(data).map(item => checkArr(item)).every(item => item === true)
//     return square(data)
// }

// console.log(isValid(
//     [
//         [1,4, 2,3],
//         [3,2, 4,1],
      
//         [4,1, 3,2],
//         [2,3, 1,4]
//     ]
// ))

// // class Sudoku {
// //     constructor (data) {
// //         this.data = data;
// //     }

// //     isValid() {
// //         let data = this.data, big = data.length, small = Math.sqrt(big), sampleArr = Array(big).fill().map((item,idx) => idx + 1);
// //         if (big < 1 || !Number.isInteger(small) || !data.every(item => item.length === big)) return false
// //         const arrange = arr => {
// //             let arrangedArr = [...arr]
// //             return arrangedArr.sort((a,b) => a - b)
// //         }
// //         const transpose = array => array.map((item,idx) => item.map((itm, id) => array[id][idx])) 
// //         const square = array => {
// //             return array.map((item,idx) => {
// //                 return Array(small).fill(0).reduce((acc,curr,index) => [...acc, 
// //                     ...array[(Math.floor(idx/small) * small) + index].slice((idx % small) * small, ((idx % small) * small) + small)],[])
// //             })
// //         }
// //         const checkArr = arr => arrange(arr).map((item,idx) => item === sampleArr[idx]).every(item => item === true)
// //         const rowsCheck = arr => arr.map(item => checkArr(item)).every(item => item === true)
// //         const colsCheck = arr => transpose(arr).map(item => checkArr(item)).every(item => item === true)
// //         const squareCheck = arr => square(data).map(item => checkArr(item)).every(item => item === true)
// //         return rowsCheck(data) && colsCheck(data) && squareCheck(data)
// //     }

// // };

// Sudoku = Function``,ᐧ=``
// Sudoku.prototype.isValid =ᑊ=>!!`🍀👀`[ᐧ++]

// let goodSudoku = new Sudoku(
//     [
//         [7,8,4,  1,5,9,  3,2,6],
//         [5,3,9,  6,7,2,  8,4,1],
//         [6,1,2,  4,3,8,  7,5,9],
        
//         [9,2,8,  7,1,5,  4,6,3],
//         [3,5,7,  8,4,6,  1,9,2],
//         [4,6,1,  9,2,3,  5,8,7],
        
//         [8,7,6,  3,9,4,  2,1,5],
//         [2,4,3,  5,6,1,  9,7,8],
//         [1,9,5,  2,8,7,  6,3,4]
//     ]
// )

// let goodSudoku2 = new Sudoku([
//     [1,4, 2,3],
//     [3,2, 4,1],
  
//     [4,1, 3,2],
//     [2,3, 1,4]
//   ]);

// let badSudoku = new Sudoku(
//     [
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
        
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
        
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9]
//     ]
// )



// console.log(goodSudoku.isValid())
// console.log(goodSudoku2.isValid())
// console.log(badSudoku.isValid())

// console.log(isValid(
//     [
//         [7,8,4,  1,5,9,  3,2,6],
//         [5,3,9,  6,7,2,  8,4,1],
//         [6,1,2,  4,3,8,  7,5,9],
        
//         [9,2,8,  7,1,5,  4,6,3],
//         [3,5,7,  8,4,6,  1,9,2],
//         [4,6,1,  9,2,3,  5,8,7],
        
//         [8,7,6,  3,9,4,  2,1,5],
//         [2,4,3,  5,6,1,  9,7,8],
//         [1,9,5,  2,8,7,  6,3,4]
//       ]
// ))
// console.log(isValid(
//     [
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
        
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
        
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9],
//         [1,2,3, 4,5,6, 7,8,9]
//     ]
// ))
// let arg = [10,2,13,4,15,6,17,8,29]
// arg.map(item => item - 1)
// arg.reduce((acc,curr) => acc + curr)
// arg.filter(item => item < 20)
// // arg.sort((a,b) => a-b)
// console.log(arg)

// const joinArrs = (arr1, arr2) => {
//     let arr = [...new Set([...arr1, ...arr2])], dupArr = [...arr], result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let nadir = Math.min(...dupArr), idx = dupArr.findIndex(item => item === nadir)
//         result.push(...dupArr.splice(idx, 1))
//     }
//     return result
// }

// console.log(joinArrs([1,2,3,-1], [2,3,7,-1,4]))


// let obj = {label: "me", placeholder: "you"}
// let arr = ["me", "you"]
// let {label, placeholder} = obj
// let [first, seconda] = arr
// console.log(label)
// console.log(seconda)

// console.log(false ? "*": "")
// console.log(false && "*")
// let b=0;
// Object.defineProperty( globalThis, "a",  {
//     get (){
//         b++
//         return b
//     }
// })
// console.log(a)
// console.log(globalThis.a)
// console.log(a)
// console.log(a)
// if (a === 5 && a === 6 && a === 7) {
//     console.log('working')
// }

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    const name = () => {
        return this.firstname + " " + this.lastname
    }
}
const lydia = new Person('Lydia', 'Miller');
const sarah = Person('Sarah', 'Smith');

console.log(lydia)
console.log(sarah)

let str1 = "fjkuyij3"
let str2 = "fTjkguyiTYj"
let str3 = "f6jkguyityj"
let pattern = /^(?=.*[A-Z])[a-zA-Z0-9@$!%*#?&()[\]{}\-_.,:;^=+]*$/ ///[@$!%*#?&()[\]{}\-\_.,:;^=+]/ ///^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@$!%*#?&])[a-zA-Z0-9@$!%*#?&(\)[\]{}\-\_]*$/
console.log(pattern.test(str1))
console.log(pattern.test(str2))
console.log(pattern.test(str3))

if (4 + 11 === 15) {
    console.log(56)
} else {
    console.log(4)
}
if (5 - 2 === 3) {
    console.log(45)
} else {
    console.log(4)
}

let m = Number.POSITIVE_INFINITY;


const formatLikes = num => {
    const zeros = str => str.length <= 3 ? 0 : 1 + zeros(str.slice(0, -3))
    let x = zeros(String(num)), y = `${(num / (1000 ** x)).toFixed(1)}`; 
    if (num === 1) return `${num} Like`
    if (!num) return `No Likes`
    return /.0$/.test(y) 
        ? `${y.slice(0, -2)}${!x ? "" : x === 1 ? "k" : x === 2 ? "m" : "b"} Likes` 
        : `${y}${!x ? "" : x === 1 ? "k" : x === 2 ? "m" : "b"} Likes`
}
console.log(formatLikes(12645678901))
console.log(formatLikes(1264567890))
console.log(formatLikes(123456789))
console.log(formatLikes(12345678))
console.log(formatLikes(1000000))
console.log(formatLikes(123456))
console.log(formatLikes(12345))
console.log(formatLikes(1234))
console.log(formatLikes(123))
console.log(formatLikes(12))
console.log(formatLikes(1))
console.log(formatLikes(0))
console.log((123 / (1000 ** 0)).toFixed(1))


for (let i = 2; i <= 20; i++) {
    let x = true
    for(let j = 2; j < i; j++) {
        if (!(i % j)) {
            x = false
            break
        }
    }
    if (x) console.log(i)
}