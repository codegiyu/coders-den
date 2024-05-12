// EVENT LISTENERS
const regForm = document.getElementById("reg-form");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const inputs = regForm.querySelectorAll("[name]");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// console.log({regForm});

const inputValues = {};

inputs.forEach(input => {
    input.addEventListener("input", handleInput);
})
// firstNameInput.addEventListener("change", handleChange);
parent.addEventListener("click", handleParentClick);

const MAX_NAME_LENGTH = 10;

function handleInput(e) {
    // const { target } = e;
    // let value = target.value;
    // console.log({ inputValue: value });

    const value = e.target.value;
    const name = e.target.name;

    inputValues[name] = value;

    console.log({inputValues});
    // lastNameInput.value = value;
    // const targetParent = e.target.parentElement;
    // const errorEl = targetParent.querySelector(".error");

    // console.log({targetParent, errorEl});

    // if (value.includes("-")) {
    //     alert("Please use alphabets and spaces only");
    // }

    // if (Number(e.target.value) > 31) {
    //     errorEl.innerText = `${e.target.value} is an invalid input`;
    // } else {
    //     errorEl.innerText = ""
    // }

    // target.value = target.value.slice(0, MAX_NAME_LENGTH);
    // value = value.slice(0, MAX_NAME_LENGTH);
}

function handleChange() {
    console.log("Change");
}

function handleParentClick(e) {
    const { target, currentTarget } = e;
    console.log({ target, currentTarget });
}