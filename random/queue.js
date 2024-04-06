let arr = [6,10,4,7,2,9,1,5], n = 3;


/// RAJAH'S CODE

// function queueTime(arr, n) {
//     let counter = 0
//     function checker(array) {
//         let filteredArray = array.filter(each => each > 0)
//         if (filteredArray.length === 1) return counter += filteredArray[0]

//         let min = Math.min(...filteredArray)
//         let subtractedArray = filteredArray.slice(0,n).map(each => each - min)
//         let modifiedArray = [...subtractedArray, ...filteredArray.slice(n)]

//         counter += min
//         checker(modifiedArray)
//     }
//     checker(arr)
//     return counter
// }
// console.log(queueTime(arr, n))


/// OLA'S CODE

// function queueTime(arr, n) {
//     if (!arr.length) return 0

//     let newArr = [...arr]
//     for (let i = 0; i < n; i++) {
//         if (newArr[i] === 1) {
//             newArr[n] ? newArr.splice(i, 1, ++newArr.splice(n,1)[0]) : newArr.splice(i,1)
//         }
//         newArr[i] ? newArr[i]-- : null
//     }
//     return 1 + queueTime(newArr, n)
// }
// console.log(queueTime(arr, n))


// for (let i = 0; i < n; i++) {
//     if (arr[i] === 1) {
//         arr[n] ? arr.splice(i, 1, ++arr.splice(n,1)[0]) : arr.splice(i,1)
//     }
//     arr[i] ? arr[i]-- : null
// }
// console.log(arr)

// for (let i = 0; i < n; i++) {
//     if (arr[i] === 1) {
//         arr[n] ? arr.splice(i, 1, ++arr.splice(n,1)[0]) : arr.splice(i,1)
//     }
//     arr[i] ? arr[i]-- : null
// }
// console.log(arr)

// for (let i = 0; i < n; i++) {
//     if (arr[i] === 1) {
//         arr[n] ? arr.splice(i, 1, ++arr.splice(n,1)[0]) : arr.splice(i,1)
//     }
//     arr[i] ? arr[i]-- : null
// }
// console.log(arr)


/// MY CODE

// const queueTime = (customers, n) => {
//     let queue = Array(n).fill(0), line = [...customers], time = 0;
//     const fillQueue = () => {
//         while (queue.find(el => el === 0) !== undefined && line.length) {
//             queue[queue.findIndex(el => el === 0)] = line[0]
//             line.shift()
//         }
//     }
//     fillQueue()
//     while (queue.find(el => Boolean(el) === true) !== undefined) {
//        queue = queue.map(item => item === 0 ? item : item - 1)
//        if (queue.find(el => el === 0) !== undefined && line.length) fillQueue()
//        time++
//     }
//     return time
// }
// console.log(queueTime(arr, n))