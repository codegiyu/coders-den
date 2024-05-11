// CLOSURES

function userFunction() {
    let user = null;
    function setUserName(name) {
        if (!user) {
            user = {}
        }

        user.name = name;
    }

    function getUser() {
        return user;
    }

    return {
        setUserName,
        getUser
    }
}
const { setUserName, getUser } = userFunction();

console.log(getUser())
console.log(setUserName("Giyu"))
console.log(getUser())
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())

const var1 = {}
const var2 = undefined

console.log(!var1)
console.log(!var2)

function outerFunction() {
    let count = {
        value: 0
    };
    function plusOne() {
        count.value++
        return count.value
    }
    function minusOne() {
        count.value--
        return count.value
    }

    return {
        count,
        plusOne,
        minusOne
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.count)


// const [state, setState] = useState(0);

// CURRYING

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(add(3,8,7))

// function curryAdd(num1) {
//     return function(num2) {
//         return function(num3) {
//             return num1 + num2 + num3;
//         }
//     }
// }

const curryAdd = num1 => num2 => num3 => num1 + num2 + num3;

console.log(curryAdd(3)(8)(7))
const firstTwo = curryAdd(3)(8);
const plus5 = firstTwo(5);
const plus9 = firstTwo(9);
console.log(plus5, plus9)

const prop = obj => key => obj[key];

const userObj = {
    name: "Giyu",
    location: "Abuja"
}

const accessUser = prop(userObj)
console.log(accessUser("name"))


const infiniteAdd = (num1) => {
    return function (num2) {
        if (num2) {
            return infiniteAdd(num1 + num2)
        }

        return num1
    }
}

console.log(infiniteAdd(3)())
console.log(infiniteAdd(3)(8)())
console.log(infiniteAdd(3)(8)(7)())
console.log(infiniteAdd(3)(8)(7)(23)())
console.log(infiniteAdd(3)())

const newCat = "fashion"
const categories = {
    newCat: true,
}
console.log({categories})
const cats = {
    [newCat]: true
}
console.log({cats})



categories