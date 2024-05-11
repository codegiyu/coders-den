// DOCUMENT OBJECT MODEL (DOM)

// Getting Elements with JS
console.log({document: document});
console.log({head: document.head});
console.log({body: document.body});
console.log({html: document.documentElement});

// 1. By Tagname (returns an HTMLCollection)
const h1s = document.getElementsByTagName("h1");
const firstTitle = h1s.item(0);
const secondTitle = h1s[0];
console.log({h1s, firstTitle, secondTitle});


// 2. By ClassName (returns an HTMLCollection)
const titles = document.getElementsByClassName("title dark:text-white");
console.log({titles});

for (let i = 0; i < titles.length; i++) {
    console.log({ [i + 1]: titles[i].id }); // { 1: "first-title" }
}

// 3. By Id (returns the HTMLElement or null)
const thirdTitle = document.getElementById("third-title");
console.log({thirdTitle});

// 4. querySelector (returns)
const firstTitle1 = document.querySelector("#first-title.title.dark-text");
const firstNameInput1 = document.querySelector("[name=firstname]");

console.log({
    firstTitle1, 
    firstNameInput1, 
});

// 5. querySelectorAll (returns a NodeList)
const form = document.querySelector("form");
const inputFields = form.querySelectorAll("[name]");
const firstInput = inputFields[0];
const inputsValues = [...inputFields.values()];
const inputsArr = Array.from(inputFields);
const h1sArr = Array.from(h1s);

const fruits = (...args) => {
    const allParams = [args];
    return allParams;
}
console.log(fruits("mango", "orange"))

console.log({
    form, 
    inputFields,
    firstInput,
    inputsValues,
    inputsArr,
    h1sArr
});

// SETTING ATTRIBUTES
firstInput.setAttribute("value", "Giyu");
firstInput.setAttribute("disabled", "");
firstInput.setAttribute("data-color", "blue");
// inputFields[1].setAttribute("disabled", false);

inputFields[1].disabled = false; // how to set boolean attributes
const strFalse = String("");
console.log({strFalse, type: typeof strFalse});

// GETTING ATTRIBUTES
const firstInputName = firstInput.getAttribute("name");
const firstInputDisabled = firstInput.getAttribute("disabled");
const firstInputColor = firstInput.getAttribute("data-color");
const firstInputDataset = firstInput.dataset;
const firstInputDataColor = firstInput.dataset.color;
const firstInputTabName = firstInput.dataset.tabname;
const firstInputChairHeight = firstInput.dataset.chairHeight;

console.log({
    firstInputName,
    firstInputDisabled,
    firstInputColor,
    firstInputDataset,
    firstInputDataColor,
    firstInputTabName,
    firstInputChairHeight,
    disabled: firstInput.disabled
})

// CLASSLIST
// add, contains, remove, replace, toggle, toString
console.log({beforeAdd: thirdTitle.classList.toString()});

thirdTitle.classList.add("jomasy");

console.log({afterAdd: thirdTitle.classList.toString()});

thirdTitle.classList.add("sausage", "sus");

console.log({afterAddMany: thirdTitle.classList.toString()});

console.log({"contains-green": thirdTitle.classList.contains("green")});
console.log({"contains-text-green": thirdTitle.classList.contains("text-green")});

thirdTitle.classList.remove("jomasy");

console.log({afterRemove: thirdTitle.classList.toString()});

thirdTitle.classList.replace("theme-light", "theme-dark");

console.log({afterReplace: thirdTitle.classList.toString()});

thirdTitle.classList.toggle("bg-black");

console.log({afterToggleOnce: thirdTitle.classList.toString()});

thirdTitle.classList.toggle("bg-black");

console.log({afterToggleTwice: thirdTitle.classList.toString()});


// INNERHTML
let thisInnerHTML = "<p>Hello World</p>";
const htmlAddition = "<span>Yes, I'm in!</span>";

thisInnerHTML += htmlAddition; 
console.log({thisInnerHTML})

console.log({formInnerHtml: form.innerHTML});

const fourthTitle = h1s[3];
fourthTitle.innerHTML += "Fourth Title <span>-Will this work?-</span>";

// setTimeout(() => {
//     fourthTitle.innerText += "\n\nFourth Title - innerText <span>-Will this work?-</span>";
// }, 15000);

// setTimeout(() => {
//     fourthTitle.textContent += "\n\nFourth Title - textContent <span>-Will this work?-</span>";
// }, 25000);

// innerText, textContent, innerHTML
const textContainer = document.querySelector(".text-container");
console.log({
    textContent: textContainer.textContent,
    innerText: textContainer.innerText,
    innerHTML: textContainer.innerHTML
})

// textContent: 
// Just some random text.
// This is a ball
// Hello world
// Do you get what I'm saying?

// innerText: Just some random text.

// This is a ball

// Hello world

// Do you get ?

// innerHTML: 
// Just some random text.
// <p class="text">This is a ball</p>
// <p class="text">Hello world</p>
// <p class="text">Do you get <span class="">what I'm saying</span>?</p>


// MANIPULATING STYLES
thirdTitle.style.marginTop = "70px";
thirdTitle.style.color = "green";
thirdTitle.style.backgroundImage = "linear-gradient(90deg, #e28910, #20ab24)";
console.log({styles: thirdTitle.style.color})

// GET COMPUTED STYLES
const thirdTitleStyle = getComputedStyle(thirdTitle);
console.log({thirdTitleStyle})
console.log({thirdTitleTranslateX: thirdTitleStyle.translate})