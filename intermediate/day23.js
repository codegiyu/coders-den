// EVENT LISTENERS

// const accordions = document.getElementsByClassName("accordion");
// const toggleButtons = document.getElementsByClassName("toggle-accordion");
const accordions = document.querySelectorAll(".accordion");
const toggleButtons = document.querySelectorAll(".toggle-accordion");
const thirdTitle = document.getElementById("third-title");

// Adding Event Listeners from HTML
function shoutHello2() {
    alert("Hello!");
}

const showHello = () => {
    alert("Hello");
}

thirdTitle.onclick = showHello;

thirdTitle.addEventListener("click", showHello);
thirdTitle.addEventListener("click", () => {
    console.log("Hello World");
})

const displayParagraph = (i) => {
    if (accordions[i].classList.contains("active")) {
        accordions[i].classList.remove("active");
        toggleButtons[i].innerText = "+";
    } else {
        accordions[i].classList.add("active");
        toggleButtons[i].innerText = "-";
    }
}

// With GetElementsByClassName
// for (let i = 0; i < toggleButtons.length; i++) {
//     toggleButtons[i].addEventListener("click", () => displayParagraph(i));
// }

// With QuerySelectorAll
toggleButtons.forEach((button, idx) => {
    button.addEventListener("click", () => displayParagraph(idx));
})