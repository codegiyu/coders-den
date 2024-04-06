// CLASSES

class Person {
    static _setSkillsUsed = 0
    static _numberOfPersonsCreated = 0

    constructor(name = "John Doe", age = "18", gender = "non-binary") {
        // console.log({This: this});
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.personType = "Human";
        this.money = 0;
        this.skills = [];

        Person._numberOfPersonsCreated += 1
    }

    introduction () {
        const text = `I am ${this.name}, and I am ${this.age} years old.`
        return text
    }

    get getBalance() {
        return `₦${this.money}`;
    }

    get getSkills() {
        return this.skills.join(", ");
    }

    set setBalance(amount) {
        this.money += amount;
    }

    set setSkills(skill) {
        if (Array.isArray(skill)) {
            this.skills.push(...skill);
        } else if (typeof skill === "string") {
            this.skills.push(skill);
        }

        Person._setSkillsUsed += 1
    }

    static getSetSkillsUsed() {
        return Person._setSkillsUsed;
    }

    static get getNumberOfPersonsCreated() {
        return Person._numberOfPersonsCreated;
    }
}

const randomDude = new Person("Michael", undefined, 35);
const randomDudess = new Person("Michaela", 30, "female");
console.log({randomDude})
randomDude.age = 35
console.log({randomDude})
console.log({randomDudess})
console.log(randomDude.introduction())
console.log(randomDudess.introduction())
console.log(randomDude.getBalance)
randomDude.setBalance = 7000;
console.log(randomDude.getBalance)

randomDude.setSkills = "Github"
randomDude.setSkills = "HTML"
randomDude.setSkills = ["JS", "CSS"]
randomDude.setSkills = {false: true}
console.log(randomDude.getSkills)
console.log(Person.getSetSkillsUsed())
console.log(Person.getNumberOfPersonsCreated)


const obj = {
    type: "pixels",
    whatType(name) {
        obj.name = name
        return this.type
    }
}
console.log({obj})
obj.rice = "white";
console.log({obj});
console.log({type: obj.whatType("world", "hello")})
console.log({obj});

const arr = [1, [2], 3 ];
const spreadWahala = ([array, second]) => {
    return array
}
console.log(spreadWahala(arr))

const newObj = {key: "value"}
console.log(newObj)
console.log(newObj.__proto__)
newObj.__proto__ = {hello: "world"}
console.log(newObj.__proto__)

class CodersDenMember {
    constructor(name = "John Doe", stack = []) {
        this.name = name;
        this.stack = stack;
        this.affiliation = "Coder's Den"
    }
}

class Intermediate extends CodersDenMember {
    constructor(name, stack) {
        super()
        this.level = "Intermediates"; 
    }
}

const Josephine = new Intermediate("Jomasy", ["HTML", "CSS", "JS"])
console.log({Josephine})