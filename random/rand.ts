

function randId(): string {
   return 'DPW' + String(Math.random()).slice(2,7);
}

console.log(randId());

const ordinalSuffixes: { [key: string]: string } = {
   0: "th",
   1: "st",
   2: "nd",
   3: "rd",
   4: "th",
   5: "th",
   6: "th",
   7: "th",
   8: "th",
   9: "th",
}

const troubledTeens: { [key: string]: string } = {
   11: "th",
   12: "th",
   13: "th",
   14: "th",
   15: "th",
   16: "th",
   17: "th",
   18: "th",
   19: "th"
}

export const ordinal = (num: string | number) => {
   const strNum = String(num);
   let result = "";

   switch (true) {
       case !!troubledTeens[strNum.slice(-2)]:
           result = strNum + "th";
           break;
   
       default:
           result = strNum + ordinalSuffixes[strNum.slice(-1)];
           break;
   }

   return result;
}
console.log(ordinal(90));
console.log(ordinal(901));
console.log(ordinal(19));
console.log(ordinal(12));
console.log(ordinal(4));
console.log(ordinal(2173));
console.log(new Date().toLocaleString("en-us", {
   hour: "2-digit",
   minute: "numeric",
   month: "short",
   day: "numeric",
   weekday: "short",
   year: "numeric"
 }).replace(/\d+/, (num) => ordinal(num)));

 console.log(new Date(0))