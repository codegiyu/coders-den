let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log("Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon".split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let because = "You cannot end a sentence with because because because is a conjunction";
console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith(""));
console.log(challenge.match(/a/gi));
console.log("30 Days of".concat(" ").concat("JavaScript"));
console.log(challenge.repeat(2));

//  Level 2
let quote1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote1);

let quote2 = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."';
console.log(quote2);

console.log(typeof('10') === typeof(10));
console.log(typeof('10') === typeof(toString(10)));

console.log(parseFloat('9.8') == 10);
console.log(Math.ceil(parseFloat('9.8')) == 10);

console.log('python'.includes('on') && 'jargon'.includes('on'));

console.log('I hope this course is not full of jargon'.includes('jargon'));

console.log(Math.floor(Math.random() * 101));

console.log(50 + Math.floor(Math.random() * 51));

console.log(Math.floor(Math.random() * 256));

let javascript = 'JavaScript';
console.log(javascript.charAt(Math.floor(Math.random() * (javascript.length + 1))));

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

console.log(because.substring(31, 54));


//  Level 3
let loveQuote = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(loveQuote.match(/love/gi).length);

console.log(because.match(/because/gi).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const cleanedSentence = sentence.replace(/[@#%&;!$]/g, "");
let onlySentenceWords = sentence.replace(/[@#%&;!$?.,]/g, "");
console.log(onlySentenceWords);
let sentenceWords = onlySentenceWords.split(' ');
let uniqueSentenceWords = [];
let uniqueSentenceWordsFrequencies = [];
for (let i = 0; i < sentenceWords.length; i++) {
    if (!uniqueSentenceWords.includes(sentenceWords[i])) {
        uniqueSentenceWords.push(sentenceWords[i]);
    }
}
console.log(uniqueSentenceWords);
for (let i = 0; i < uniqueSentenceWords.length; i++) {
    let wordSearch = new RegExp(`\\b${uniqueSentenceWords[i]}\\b`, 'gi');
    uniqueSentenceWordsFrequencies.push(onlySentenceWords.match(wordSearch).length);
}
console.log(uniqueSentenceWordsFrequencies);
let maxFrequency = Math.max(...uniqueSentenceWordsFrequencies);
console.log(Math.max(...uniqueSentenceWordsFrequencies));
let maxFrequencyIndex = uniqueSentenceWordsFrequencies.indexOf(maxFrequency);
console.log(uniqueSentenceWordsFrequencies.indexOf(maxFrequency));
let mostRepeatedWord = uniqueSentenceWords[maxFrequencyIndex];
console.log(mostRepeatedWord);

const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let [monthlySalary, annualBonus, monthlyCourse] = income.match(/\d+/g);
[monthlySalary, annualBonus, monthlyCourse] = [parseInt(monthlySalary), parseInt(annualBonus), parseInt(monthlyCourse)];
console.log([monthlySalary, annualBonus, monthlyCourse]);
const annualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourse * 12);
console.log(annualIncome);