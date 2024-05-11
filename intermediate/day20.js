// WRITING CLEAN CODE
const name = 'Giyu';
const ONE_HOUR_IN_SECONDS = 60 * 60;
console.log({}+[1,2]);
console.log({} + []);
console.log({}-[]);
console.log({} - []);

const mainFunc = () => {
    const varA = subFunc1();
    const varB = subFunc2();

    return varA + varB;
}
console.log(mainFunc());

// Hoisting 
function subFunc1() {
    return 7;
}

function subFunc2() {
    return 17;
}

const obj = {
    name: "Giyu",
    getName() {
        return this.name;
    },
    getNameArrow: () => this.name,
}

console.log({ dec: obj.getName(), arrow: obj.getNameArrow() });
console.log("Function declaration: ", obj.getName())

let num = 7;
num += 17;
num = num + 17;