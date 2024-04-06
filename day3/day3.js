let firstName = "Code";
let lastName = "Giyu";
let country = "Nigeria";
let city = "Abj";
let age = 26;
let isMarried = false;
let year = new Date().getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' == typeof 10);

console.log(parseInt('9.8') == 10);

console.log(25 > 20) 
console.log(0 !== true) 
console.log(""!== true)  
console.log(10 == '10') 
console.log(3 !== NaN) 

console.log(false == null)
console.log(0 == true) 
console.log("" == true) 
console.log(5 == NaN)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let python = 'python'
let jargon = 'jargon'
console.log(python.length > jargon.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!(python.includes('on') && jargon.includes('on')))

let dateToday = new Date();
let thisYear = dateToday.getFullYear();
console.log(thisYear);

let thisMonth = dateToday.getMonth() +  1;
console.log(thisMonth);

console.log(dateToday.toLocaleDateString())

let thisDay = dateToday.getDate();
console.log(thisDay);

let thisHour = dateToday.getHours();
console.log(thisHour);

let thisMinute = dateToday.getMinutes();
console.log(thisMinute);

console.log(dateToday.getTime());


let base =  Number(prompt('What is the length of the base of your triangle?', ''));
let height =  Number(prompt('What is the height of your triangle?', ''));
let areaOfTriangle = 0.5 * base * height;
console.log(areaOfTriangle);
alert(`The area of your triangle is ${areaOfTriangle}`);

let a = Number(prompt('What is the length of the first side of your triangle?', ''));
let b = Number(prompt('What is the length of the second side of your triangle?', ''));
let c = Number(prompt('What is the length of the third side of your triangle?', ''));
let perimeterOfTriangle = a + b + c;
console.log(perimeterOfTriangle);
alert(`The perimeter of your triangle is ${perimeterOfTriangle}`);

let length =  Number(prompt('What is the length of your rectangle?', ''));
let width =  Number(prompt('What is the width of your rectangle?', ''));
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(areaOfRectangle);
console.log(perimeterOfRectangle);
alert(`The area of your rectangle is ${areaOfRectangle} and its perimeter is ${perimeterOfRectangle}`);

const pi = 3.14;
let radius = Number(prompt('What is the radius of your circle?', ''));
let areaOfCircle = pi * radius * radius
let circumferenceOfCircle  = 2 * pi * radius
console.log(areaOfCircle);
console.log(circumferenceOfCircle);
alert(`The area of your circle is ${areaOfCircle} and its circumference is ${circumferenceOfCircle}`);

let linearSlopeCalc = (y, m, c) => {
    let slope = m/y;
    let yIntercept = c/y;
    let xIntercept = -c/m;

    return {
        'slope': slope,
        'yIntercept': yIntercept,
        'xIntercept': xIntercept,
        'statement': `The slope of the line is ${slope}, its y-intercept is ${yIntercept} and its x-intercept is ${xIntercept}.`
    }
}
const slope1 = linearSlopeCalc(1, 2, -2).slope;
console.log(slope1);

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2);

let compareSlopes = (a, b) => {
    if (Math.abs(a) < Math.abs(b)) {
        return "Line 2 is steeper than line 1";
    } else if (Math.abs(a) > Math.abs(b)) {
        return "Line 2 is steeper than line 2";
    } else {
        return "Both lines have the same slope";
    }
}

const slopesComparison = compareSlopes(slope1, slope2);
console.log(slopesComparison);

let quadEqSolver = x => x**2 + (6 * x) + 9;
console.log(quadEqSolver(0));
console.log(quadEqSolver(3));
console.log(quadEqSolver(-3));

let hours = Number(prompt('How many hours do you work a week?', ''));
let rate = Number(prompt('How much do you earn per hour?', ''));
let earnings = hours * rate;
console.log(`Your weekly earnings is ${earnings}`);
alert(`Your weekly earnings is ${earnings}`);


if(firstName.length > 7) {
    console.log('My name is long.')
}else {
    console.log('My name is short.')
}

if(firstName.length > lastName.length) {
    console.log(`My first name, ${firstName}  is longer than my family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
    console.log(`My first name, ${firstName}  is shorter than my family name, ${lastName}.`);
} else {
    console.log(`My first name, ${firstName}  is just as long as my family name, ${lastName}.`);
}
    

let myAge = 45;
let yourAge = 25;
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge}  years older than you`);
} else if (myAge < yourAge) {
    console.log(`I am ${yourAge - myAge}  years younger than you`);
} else {
    console.log(`We are the same age`);
}


let birthYear = Number(prompt('In what year were you born?', ''));
let drivingCriteria = thisYear - birthYear;
if(drivingCriteria >= 18){
    alert(`You are ${drivingCriteria}. You are old enough to drive.`)
}else {
    alert(`You are ${drivingCriteria}. You will be allowed to drive after ${18 - drivingCriteria} years`)
}


let userAge = Number(prompt('How many years have you lived?', ''));
let oneYearInsecs = 60 * 60 * 24 * 365;
if (userAge < 100) {
    alert(`You have lived ${userAge * oneYearInsecs} seconds. You have ${(100 - userAge) * oneYearInsecs} left to live. Have fun😉`);
} else if (userAge == 100) {
    alert(`You have lived ${userAge * oneYearInsecs} seconds. You have surpassed your expected lifespan by ${(userAge - 100) * oneYearInsecs} seconds`);
} else {
    alert(`You have lived ${userAge * oneYearInsecs} seconds. Talk true Boss. How you do am?`)
}


console.log(`${thisYear}-${thisMonth}-${thisDay} ${thisHour}:${thisMinute}`);
console.log(`${thisDay}-${thisMonth}-${thisYear} ${thisHour}:${thisMinute}`);
console.log(`${thisDay}/${thisMonth}/${thisYear} ${thisHour}:${thisMinute}`);


let dateVal = (x) => {
    if (x.toString().length >= 2) {
        return x;
    } else {
        return `0${x.toString()}`;
    }
}
console.log(`${thisYear}-${dateVal(thisMonth)}-${dateVal(thisDay)} ${dateVal(thisHour)}:${dateVal(thisMinute)}`);