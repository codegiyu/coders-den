// CONSOLE METHODS

// CONSOLE.LOG() && CONSOLE.INFO()
console.group(".log() method")
console.log('30 Days of JavaScript', 30, "Days")
console.info('%d %s of JavaScript %s', "thirty", {}, "is nice")
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.groupEnd()


// CONSOLE.DEBUG()
console.group(".debug() method")
console.debug(
  '%c30 Days%c_%cOf%c %cJavaScript',
  'color:green',
  'color:blue',
  'color:red',
  '',
  'font-size:20px; color: purple; margin: 55px; font-family: cursive'
) // log output green red and yellow text
console.groupEnd()


// CONSOLE.WARN()
console.group(".warn() method")
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
console.groupEnd()


// CONSOLE.ERROR()
console.group(".error() method")
console.error('This is an error message')
console.error('We all make mistakes%s', ", don't we?")
console.groupEnd()


// CONSOLE.TABLE()
console.group(".table() method")
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)
const countries2 = [
    ['Finland', 'Helsinki', ['Random', 'Two']],
    {name: "Nonso", country: "Nigeria", Value: "4"},
    "random",
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries2)
const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: {"name": 'Norway'},
      city: ['Oslo'],
    //   age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
]
console.table(users)
console.groupEnd()


// CONSOLE.TIME() && CONSOLE.TIMEEND()
console.group(".time() method")
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')
console.groupEnd()

// CONSOLE.ASSERT()
console.group(".assert() method")
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(0, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
console.groupEnd()

// CONSOLE.GROUP()


// CONSOLE.COUNT()
console.group(".count() method")
const func = () => {
    console.count(undefined)
}
func()
func()
func()

const func2 = () => {
    console.count(2, 5)
}
func2()
func2()
func2()
console.groupEnd()