let obj = {key: "value"}
console.log(obj)
obj.key2 = "another value"
let go = 'five'
obj[go] = "five"
console.log(obj)
console.log(Object.entries(obj))

let obj2 = {
    go: "value1", 
    [go]: "value2"
}

console.log(obj2)

let set = new Set()
console.log(set)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

//   [
//     {English:3},
//     {French:2},
//     {Spanish:1}
// ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

  let langArr = []
for (let guage of setOfLanguages) {
    let filang = languages.filter(Else => Else === guage)
    langArr.push({[guage]: filang.length})
}

console.log(langArr)

  let experiment = new Set()
  console.log(experiment)

  setOfLanguages.add("Urhobo")
  console.log(setOfLanguages)

  console.log(setOfLanguages.size)

  setOfLanguages.delete("Finnish")
  console.log(setOfLanguages)

  setOfLanguages.add("Finnish")

  console.log(setOfLanguages.has("English"))

  let newLanguages = new Set(languages)
  console.log(newLanguages)

  newLanguages.clear()
  console.log(newLanguages)

  let counts = []

  for (const lang of setOfLanguages) {
    let filteredLang = languages.filter(lng => lng === lang)
    console.log(filteredLang)
    counts.push({lang, counts: filteredLang.length})
  }

  console.log(counts)

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log([...new Set(numbers)])

let newNumbers = []

for (let num of setOfNumbers) newNumbers.push(num)

console.log(newNumbers)

let a = [1, 2, 3, 4, 4, 5]
let b = [3, 4, 4, 5, 6]

console.log([...new Set([...a, ...b])])

let c = b.filter(num => a.includes(num))
console.log([...new Set(c)])

let d = b.filter(num => !a.includes(num))
console.log([...new Set(d)])

let imap = new Map()
console.log(imap)

let countries = [ ['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo'] ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)
  map.set(["Nigeria"], "Abuja")
  map.set(true, "very true")
  console.log(map)
  console.log(map.get(['Nigeria']))
  console.log(map.get(true))
  console.log(map.has("Russia"))

//   Create a set containing 0 to 10 using loop

let numbersSet = new Set()
for (let i = 0; i <= 10; i++) numbersSet.add(i)

console.log(numbersSet)