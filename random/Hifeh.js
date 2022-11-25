let boxContainer = document.getElementById(".box-container")
// This is just a sample. Use the actual id of the container of your boxes. The one you gave display grid

let numArr = Array(32).fill(0).map((item,idx) => {
    if ([2,3,5,7,9,11,13,17,19,23,29,31].includes(idx)) return [idx, "prime"]
    else if (idx % 2 === 0) return [idx, "even"]
    else return [idx, "odd"]
})
console.log(numArr)

/* The code below is just for teaching purposes */

// Breaking it down
console.log(Array(32))
console.log(Array(32).fill(0))
let sampleArr = [0,0,0,0,0,0]
sampleArr.map((item,idx) => {
    if ([2,3,5,7,9,11,13,17,19,23,29,31].includes(idx)) console.log([idx, "prime"])
    else if (idx % 2 === 0) console.log([idx, "even"])
    else console.log([idx, "odd"])
})

/* The above is just for teaching purposes */

// Next is to loop through numArr and dynamically create boxes

numArr.forEach((item) => {
    let box = `<div class="bla bla bla ${item[1]}">
                    ${item[0]}
                </div>`
    
    boxContainer.innerHTML += box
})

//Quokka is showing those errors because this file is not connected to any HTML
// This code iside box on line 28 is just a sample. Copy one of your boxes and put there.
// Then comment out or remove the actual box codes from your html.
// Remember that each item in numArr is a small array with a number and a string
// Something like [2, "prime"]
// So item[0] is the number and item[1] is the class that will give it colour
// Have fun and don't forget to experiment and learn