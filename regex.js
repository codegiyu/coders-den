let quote1 = "The the quote he is beens"
let quote2 = "0803832384"
let regex = /[\]\\\-\^]/g
console.log(/[3]/g.test(quote1))
console.log(quote1.search(/z/i))
console.log(quote1.match(regex))
console.log(quote1.match(/be.n/gi))
console.log(quote1.match(/\b[a-z]{3}\b/gi))
console.log(quote1)
const checkPhoneNum = str => /^0(706|803|810|906)\d{7}$/.test(str) ? 'Valid MTN phone number' : 'Invalid MTN phone number'
console.log(checkPhoneNum('08038323847'))

// \b - word bounders
// \d - number
// \D - non-number
// \w - alphabet, number and underscore
// \s - whitespace
// . - wildcard ( everything except \n)
// ? - 0 or 1
// + - 1 or more
// * - 0 or more
// {2} - exactly 2
// {2,} - 2 or more
// {2,4} - 2 t0 4