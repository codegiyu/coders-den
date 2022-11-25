let mass = document.getElementById("mass");
let select = document.getElementById("select");
let btn = document.getElementById("btn");
let planetContainer = document.getElementById("planet-container");
let textContainer = document.getElementById("text-container");
let planetImg = document.getElementsByClassName("planet-image")[0];
let circle = document.getElementById("circle");
let message = document.getElementById("message");
let planetName = document.getElementById("planet-name");
let weight = document.getElementById("weight");
let planets = ["MERCURY", "VENUS", "EARTH", "MOON", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE","PLUTO"];
let planetSources = ["./images/mercury.png", "./images/venus.png", "./images/earth.png", "./images/moon.png", "./images/mars.png", 
                    "./images/jupiter.png", "./images/saturn.png", "./images/uranus.png", "./images/neptune.png", "./images/pluto.png"];
let planetRatios = {
    "MERCURY": 3.724, 
    "VENUS": 8.918, 
    "EARTH": 9.8, 
    "MOON": 1.627, 
    "MARS": 7.84, 
    "JUPITER": 22.932, 
    "SATURN": 10.388, 
    "URANUS": 9.016, 
    "NEPTUNE": 11.662, 
    "PLUTO": 0.588
}
let massInput;

const loadOptions = () => {
    let options = planets.map((item) => `<option value="${item}" class="font-medium text-black">${item}</option>`).join("")
    select.innerHTML += options
    return window.removeEventListener("load", loadOptions)
}

const changeImage = () => {
    let index = planets.findIndex(item => item === select.value)
    planetImg.src = planetSources[index]
}

const handleClick = () => {
    try {
        textContainer.classList.replace("hidden", "flex")
        if (mass.value === "" || mass.value === "0" || mass.value.toLowerCase === "zero") {
            message.textContent = "Mass is required"
            console.log("just mass")
            if (!circle.classList.contains("hidden")) circle.classList.add("hidden")
            if (!select.value) planetContainer.classList.add("hidden")
        } else if (!select.value) {
            planetContainer.classList.add("hidden")
            message.textContent = "You didn't choose a planet yet"
            console.log("just planet")
            if (!circle.classList.contains("hidden")) circle.classList.add("hidden")
        } else if (mass.value != "" && words(mass.value) != "Invalid" && select.value) {
            massInput = words(mass.value)
            planetContainer.classList.remove("hidden")
            message.textContent = "The weight of the object on"
            planetName.textContent = select.value
            circle.classList.remove("hidden")
            weight.textContent = `${(massInput * planetRatios[select.value]).toFixed(2)} N`
            console.log((massInput))
            console.log("main")
        } else {
            message.textContent = "Mass entered is invalid"
            console.log("invalid")
            if (!circle.classList.contains("hidden")) circle.classList.add("hidden")
        }
    } catch (error) {
        message.textContent = error.message
        if (!circle.classList.contains("hidden")) circle.classList.add("hidden")
        console.log("error")
    }
}

window.addEventListener("load", loadOptions)

select.addEventListener("change", changeImage)

btn.addEventListener("click", handleClick)

function words(str) {
    if (!isNaN(Number(str))) return Number(str)

    let numbersObj = {
        "one": 1,
        1: 1,
        "two": 2,
        2: 2,
        "three": 3,
        3: 3,
        "four": 4,
        4: 4,
        "five": 5,
        5: 5,
        "six": 6,
        6: 6,
        "seven": 7,
        7: 7,
        "eight": 8,
        8: 8,
        "nine": 9,
        9: 9,
        "ten": 10,
        10: 10,
        "eleven": 11,
        11: 11,
        "twelve": 12,
        12: 12,
        "thirteen": 13,
        13: 13,
        "fourteen": 14,
        14: 14,
        "fifteen": 15,
        15: 15,
        "sixteen": 16,
        16: 16,
        "seventeen": 17,
        17: 17,
        "eighteen": 18,
        18: 18,
        "nineteen": 19,
        19: 19,
        "twenty": 20,
        20: 20,
        "thirty": 30,
        30: 30,
        "fourty": 40,
        40: 40,
        "forty": 40,
        40: 40,
        "fifty": 50,
        50: 50,
        "sixty": 60,
        60: 60,
        "seventy": 70,
        70: 70,
        "eighty": 80,
        80: 80,
        "ninety": 90,
        90: 90,
        "hundred": 100,
        100: 100,
        "thousand": 1000,
        1000: 1000,
        "million": 1000000,
        1000000: 1000000,
        "billion": 1000000000,
        1000000000: 1000000000,
        "trillion": 1000000000000,
        1000000000000: 1000000000000,
        "and": "and",
    }

    let wordsArr = str.trim().split(" ")

    if (wordsArr.some(word => numbersObj[word] == undefined)) return "Invalid"
    
    let array = wordsArr.reduce((acc, curr) => {
        if (!acc.length) acc.push(numbersObj[curr])
        else if (curr === "and") {
        } else if (
            numbersObj[curr] > acc[acc.length - 1] 
            && String(numbersObj[curr]).length > String(acc[acc.length - 1]).length 
            && (numbersObj[curr] === 100 || numbersObj[curr] === 1000 || numbersObj[curr] === 1000000 
                || numbersObj[curr] === 1000000000 || numbersObj[curr] === 1000000000000)
            ) {
                acc[acc.length - 1] = acc[acc.length - 1] * numbersObj[curr]
        } else {
            acc.push(numbersObj[curr])
        }
        return acc
    }, [])

    return array.reduce((acc,curr) => acc + curr, 0)
}