// PROMISES

//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('', skills)
    }, 2000)
}

const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
}

// doSomething(callback)

// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 11);

        if (randomNum > 5) {
            resolve(randomNum)
        } else {
            reject(`Sorry, your score of ${randomNum} is a failing score`);
        }
    }, 2000)
})

const debounce = new Promise((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, 4000)
})

// doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))


// ASYNC AND AWAIT (ASYNC AWAIT)

const myFunc = async () => {
    try {
        const result = await doPromise;
        console.log({result})
    
        const obj = {name: "Giyu"}
        obj.location = "Abj"
        console.log(obj)
        
    } catch (error) {
        console.error({error})
    } finally {

    }
}

async function doAll() {
    try {
        const bothResults = await Promise.all([debounce, doPromise]);
        console.log({bothResults})
    } catch (error) {
        console.error({error})
    }
}
// doAll();

async function getAllCountries() {
    try {
        const result = await fetch("https://restcountries.com/v3/all")
        console.log({result});

        const data = await result.json()
        console.log({data})
    } catch (error) {
        console({error});
    }
}
getAllCountries();