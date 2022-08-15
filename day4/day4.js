// let driverAge = Number(prompt('In what year were you born?', ''));
// if (driverAge >= 18) {
//     alert(`You are old enough to drive.`)
// } else if (driverAge == 17) {
//     alert(`You will be allowed to drive in ${18 - driverAge} year.`)
// } else {
//     alert(`You will be allowed to drive in ${18 - driverAge} years.`)
// }


// let myAge = 26;
// let yourAge = Number(prompt('Enter your age:', ''));
// if (myAge - yourAge == 1) {
//     alert(`I am ${myAge - yourAge}  year older than you`);
// } else if (myAge - yourAge > 1) {
//     alert(`I am ${myAge - yourAge}  years older than you`);
// } else if (yourAge - myAge == 1 ) {
//     alert(`I am ${yourAge - myAge}  year younger than you`);
// } else if (yourAge - myAge > 1 ) {
//     alert(`I am ${yourAge - myAge}  years younger than you`);
// } else {
//     alert(`We are the same age`);
// }


let a = 2;
let b = 4;
let ifCompare = (a, b) => {
    if (a > b) {
        return `${a} is greater than ${b}`;
    } else {
        return `${a} is less than ${b}`;
    }
}
console.log(ifCompare(4, 3));


a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);


let num = Number(prompt('Enter a number:', ''));
num % 2 ? alert(`${num} is an odd number`) : alert(`${num} is an even number`);


let grade = (score) => {
    switch(true) {
        case (score >= 80 && score <= 100) :
            return 'A';
            break;
        case (score >= 70 && score < 90) :
            return 'B';
            break;
        case (score >= 60 && score < 70) :
            return 'C';
            break;
        case (score >= 50 && score < 60) :
            return 'D';
            break;
        case (score >= 0 && score < 50) :
            return 'F';
            break;
        default:
            return 'Not a valid score';
    }
}
console.log(grade(62));


let season = (month) => {
    switch(month.toLowerCase()) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
            break;
        case 'december':
        case 'january':
        case 'february':
            return 'Autumn';
            break;
        default:
            return 'Invalid month';
    }
}
console.log(season('JaNuary'));


let dayType = (input) => {
    let day = input.toLowerCase();
    let output = input.slice(0,1).toUpperCase() + input.slice(1, input.length).toLowerCase();
    switch(true) {
        case day === 'saturday':
        case day === 'sunday':
            return `${output} is a weekend.`;
            break;
        case day === 'monday':
        case day === 'tuesday':
        case day === 'wednesday':
        case day === 'thursday':
        case day === 'friday':
            return `${output} is a working day.`;
            break;
        default:
            return `${output} is not a valid day of the week.`;
    }
}
console.log(dayType('wedNesDay'));