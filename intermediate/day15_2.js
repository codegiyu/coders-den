// CLASSES 2

function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;

    

    this.introduction = function () {
        const text = `This is a ${this.color} ${this.name}.`
        return text
    }
}

Pen.prototype.showPrice = function(){
    return `Price of ${this.name} is ${this.price}`;
}


const pen1 = new Pen("Marker", "Blue", "$3");
const pen2 = new Pen("Biro", "red", "$1");

pen1.inkLevel = 80
console.log(pen1);
console.log(pen2);
console.log(pen1.introduction());
console.log(pen1.showPrice());


const func1 = (x) => {

}

func1()
func1()

// INHERITANCE, PROTOTYPE AND PROTOTYPE CHAIN

    
const AppleInc = {
    name: "Apple",
    logo: "Apple fruit",
    operating_system: "Apple Software",
    store: "Apple Store",
    on () {
       return "Turning on your " + this.name + " device"
    },
    off () {
       return "Turning off your " + this.name + " device"
    },
    checkLogo() {
        return this.logo
    },
    getDevice() {
       console.log("I just bought my " + this.name + " from " + this.store)
    }
}

const iPhone = {
    name: "iPhone",
    operating_system: "ios",
    on() {
        return "Starting Siri and turning on your " + this.name + " device"
    }
}

console.log(iPhone) 
iPhone.__proto__ = AppleInc // NEVER DO THIS IN REAL-LIFE. ONLY FOR DEMONSTRATION PURPOSE
console.log(iPhone) // logs iPhone with AppleInc as its prototype.
console.log(iPhone.on())
console.log(iPhone.off())
console.log(iPhone.checkLogo())



    
const Company = {
    category: "Technology",
    getNews () {
       console.log("viewing " + this.category + " news on my " + this.name + " device")
    }
}

const iPhoneX = {
    name: "iPhoneX",
    operating_system: "ios"
}

AppleInc.__proto__ = Company // NEVER DO THIS IN REAL-LIFE. ONLY FOR DEMONSTRATION PURPOSE
iPhoneX.__proto__ = AppleInc // NEVER DO THIS IN REAL-LIFE. ONLY FOR DEMONSTRATION PURPOSE

// let's buy an iPhoneX from the Apple store, then let's turn on and off our iPhoneX.
console.log(iPhoneX)
console.log(iPhoneX.getDevice())
console.log(iPhoneX.on())
console.log(iPhoneX.off())
console.log(iPhoneX.getNews())

  

// EXTENDS


class CodersDenMember {
    constructor(name = "John Doe", stack = []) {
        console.log({stack})
        this.name = name;
        this.stack = stack;
        this.affiliation = "Coder's Den"
    }
}

class Intermediate extends CodersDenMember {
    constructor(name, stack, language) {
        super(name, stack);
        console.log({stack})
        this.language = language;
        this.level = "Intermediates"; 
    }
}

class Special extends Intermediate {
    constructor(name,_,language,  award) {
        super(name,undefined, language );
        this.award = award;
    }
}

// const Kenneth = new CodersDenMember("Kenneth", ["HTML"])
// const Jomasy = new Intermediate("Jomasy", ["HTML", "JS"], "JS");
const Israel = new Special("Israel", ["JS"], "TS", "World Best")
console.log({Israel})

// console.log(typeof Jomasy);
// console.log(Jomasy instanceof Pen);


// Firebase Timestamp issue
// Timestamp || FieldValue
// created_at instanceof Timestamp ? created_at.toDate() : null