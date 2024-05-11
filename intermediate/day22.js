// MANIPULATING DOM OBJECTS
// CREATING HTML ELEMENTS

const textContainer = document.querySelector(".text-container");
const children = textContainer.children;
const secondText = children[1];
console.log({children});
// const imageEl = document.querySelector(".image");

const progressEl = document.createElement("progress");
progressEl.classList.add("den-level", "four");
progressEl.value = 4;
progressEl.max = 10;

// progressEl.parentElement = textContainer;
// progressEl.parentNode = textContainer;
textContainer.appendChild(progressEl);
// imageEl.appendChild(progressEl);
// setTimeout(() => {
//     textContainer.removeChild(secondText);
// }, 5000);
console.log({progressEl, secondText, children, newChildren: textContainer.children});

function removeSecondText() {
    textContainer.removeChild(secondText);
}

// textContainer.innerHTML += `
//     <button onclick="removeSecondText(event)">Remove second text</button>
// `

const button = document.createElement("button");
button.onclick = removeSecondText;
button.textContent = "Remove second Text";

textContainer.appendChild(button);

// Generating numbers
// Lay some groundwork in html and css
// Loop from 1 to 100
// Each time, create a p element and add the "number" class to it
// Check the current value in loop and decide if it is prime, 
// even or odd 
// and add the appropriate class to your p element
// Add the current value as a textContent to your p element
// Append the p element to numbers-container

function isPrime(n) {
    if (n < 2) return false;
    
    let result = true;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            result = false;
            break;
        }
    }

    return result;
}
// console.log(isPrime(2), isPrime(7), isPrime(6));
function generate1To100() {
    let numDiv = document.querySelector(".numbers-container");

    function numberClass(n) {
        if (isPrime(n)) {
            return "prime";
        } else if (n % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }

    for (let i = 1; i < 101; i++) {
        const paragraph = document.createElement("p");
        paragraph.classList.add("number", numberClass(i));
        paragraph.textContent = i;

        numDiv.appendChild(paragraph)
    }
}
generate1To100();
// 11 sqrt - 3.sth
61 / 31

const eddy = {
    location: "Abj"
}

eddy.name = "Giyu"

function isPrimeLogged(n) {
    if (n < 2) return false;
    
    let result = true;

    for (let i = 2; i <= n / 2; i++) {
        console.log({i, remainder: n % i})
        if (n % i === 0) {
            result = false;
            console.log(`${n} is not prime because it can be wholly divided by ${i}`);
            break;
        }
    }

    return result;
}
isPrimeLogged(7);