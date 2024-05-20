// EVENT LISTENERS
const regForm = document.getElementById("reg-form");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const inputs = regForm.querySelectorAll("[name]");
const submitBtn = regForm.querySelector(".submit-btn");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const passwordCheckEls = document.querySelectorAll(".password-check-single");
// console.log({regForm});

const inputValues = {};

inputs.forEach(input => {
    input.addEventListener("input", handleInput);
})

// ADDING ONCLICK LISTENER TO SUBMIT BUTTON
// submitBtn.addEventListener("click", handleSubmitBtnClick);

// ADDING ONSUBMIT LISTENER TO FORM
regForm.addEventListener("submit", handleSubmitBtnClick);

// firstNameInput.addEventListener("change", handleChange);
parent.addEventListener("click", handleParentClick);

const MAX_NAME_LENGTH = 10;

function handleSubmitBtnClick(e) {
    e.preventDefault();
    console.log({inputValues});
}

function handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    inputValues[name] = value;

    if (name === "password") {
        handlePasswordChecks(value);
    }

    if (name === "cpassword") {
        confirmPasswordWhatever(value);
    }

    {

        // const { target } = e;
        // let value = target.value;
        // console.log({ inputValue: value });
    
        // const type = e.target.type;
    
        // if (type === "radio") {
        //     console.log({radioEl: e.target});
        // }
    
    
        // console.log({inputValues});
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
}

function handlePasswordChecks(value) {
    if (/[A-Z]/.test(value)) {
        passwordCheckEls[0].dataset.status = "passed";
    } else {
        passwordCheckEls[0].setAttribute("data-status", "failed");
    }
    
    if (/[a-z]/.test(value)) {
        passwordCheckEls[1].dataset.status = "passed";
    } else {
        passwordCheckEls[1].setAttribute("data-status", "failed");
    }
    
    if (/[0-9]/.test(value)) {
        passwordCheckEls[2].dataset.status = "passed";
    } else {
        passwordCheckEls[2].setAttribute("data-status", "failed");
    }
    
    if (/[!@#$%^&*(){}[\]:;]/.test(value)) {
        passwordCheckEls[3].dataset.status = "passed";
    } else {
        passwordCheckEls[3].setAttribute("data-status", "failed");
    }
    
    value.length >= 8
       ? passwordCheckEls[4].dataset.status = "passed"
       : passwordCheckEls[4].setAttribute("data-status", "failed");

}

function confirmPasswordWhatever(value) {
    // Get current value of

    console.log({cpassword: value, password: inputValues.password});
    if (inputValues.password === value) {
        passwordCheckEls[5].dataset.status = "passed"
    } else {
        passwordCheckEls[5].dataset.status = "failed"
    }
}

// function handleChange() {
//     console.log("Change");
// }

function handleParentClick(e) {
    const { target, currentTarget } = e;
    console.log({ target, currentTarget, child });

    if (!child.contains(target)) {
        console.log("not child")
    } else {
        console.log("child");
    }
}


// inputs[0].addEventListener("input", (e) => {
//     let first = e.target.value;
//     inputs[1].value = first;
// });