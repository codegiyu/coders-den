// let disc;
// // const getDiscValue = () => {
// //     setTimeout(() => {
// //         return disc = 4
// //      }, 3000)
// // }

// //  let jockey = getDiscValue * 20;
// // setTimeout(rendr, 3000)

// let fim = setTimeout(() => {
//     console.log(re= 4)
// }, 1000)

const callfront = (value, result) => {
    if (result) {
      return result
    }
}

const backcall = (value) => value

const doSomething = (result, failure) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills) {
            console.log(result("", skills))
        } else {
            console.log(failure("error happened due to this"))
        }
    }, 2000)
    
}
  
doSomething(callfront, backcall)

let proms = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills) {
            resolve(skills)
        } else {
            reject("error happened due to this")
        }
    }, 2000)
})

let goodResult;
let failureReason;

proms
.then(item => {console.log(item)}, error => {console.log(error)})
// .catch(meti => failureReason = meti)

console.log(goodResult)
console.log(failureReason)

