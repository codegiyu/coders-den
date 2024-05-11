// WEB STORAGES
// setItem, getItem, removeItem, clear, key

const userObj = {
    firstName: "Goodness",
    lastName: "Uche",
    age: 34,
    address: "Abroad",
    isMarried: false
}

localStorage.setItem("user", userObj);
// const firstName = (JSON.parse(localStorage.getItem("user")) ?? [])[0];
// console.log(firstName)
// console.log(localStorage.getItem("users"))

// localStorage.setItem("test", "random entry")
// console.log(localStorage.length)
// localStorage.removeItem("test")

// console.log(localStorage.key(1))

// localStorage.clear()



// ?? is nullish coalescing operator
console.log(null ?? 70); // 70
console.log(0 ?? 70); // 0
console.log(undefined ?? 70); // undefined
console.log("" ?? 70); // 70
console.log("0" ?? 70); // "0"


// || is OR operator
console.log(null || 70); // 70
console.log(0 || 70); // 0
console.log(undefined || 70); // 70
console.log("" || 70); // ""
console.log("0" || 70); // "0"


// && is AND operator
console.log(null && 70); // false
console.log(0 && 70); // 
console.log(undefined && 70); // false 
console.log("" && 70); // ""
console.log("0" && 70); // 70