const obj = {
    state: "yolo"
}

console.log(JSON.stringify(obj));

const arr = [[0, { name: "Jay" }], [1, { name: "Bee" }]]

const pick = arr.find(item => item[0] === 0)
console.log
pick[1].name = "Muahaha"
pick[0] = 2

console.log(0 / 6)
console.log(new Date("31 Dec, 2022" || 0))
console.log("?hgtu".split("?"))
console.log(new Date('2023-9-6') <= new Date('2023-9-6'))
console.log(new Date(2023, 8 - 2))

console.log(arr.sort((a, b) => a[0] - b[0]));
console.log([8, 4, 3, 9, 2].sort((a, b) => a < b ? 1 : -1))

let str = '?country=AND&state=LAG'

console.log(str.split("?")[1].split("&"))

const languages = {
    prs: {
        common: "Dari"
    },
    pus: {
        common: "Pashto"
    },
    tuk: {
        common: "Turkmen"
    },
}
// [ [ 'prs', { common: 'Dari' } ],
//   [ 'pus', { common: 'Pashto' } ],
//   [ 'tuk', { common: 'Turkmen' } ] ]
// Dari, Pashto, Turkmen
console.log(Object.entries(languages).map(item => item[1].common).join(", "))

const borders = ["IRN", "TSA", "RSA"].reduce((acc, curr) => {
    acc[curr] = true;
    return acc
}, {})
console.log(borders)

function getDateParams(str) {
    const dateString = new Date(str);
    const monthStr = dateString.toDateString().slice(4, 7)
    const day = dateString.getDate();
    const month = dateString.getMonth() + 1;
    const year = dateString.getFullYear();

    return { day, month, monthStr, year };
}

function formatDate(str) {
    const { monthStr, day } = getDateParams(str);
    return `${day} ${monthStr}`;
}

const fiveTimePeriods = (start, end) => {
    let startTime = new Date(start).getTime();
    let endTime = new Date(end).getTime();
    const timeDiff = endTime - startTime;
    const singlePeriod = Math.floor(timeDiff / 5);
    const periods = [];

    for (let i = 0; i < 5; i++) {
        const currStart = startTime + (singlePeriod * i)
        const currEnd = currStart + singlePeriod

        periods[i] = {
            start: new Date(currStart).toISOString(),
            end: new Date(currEnd).toISOString(),
            period: `${formatDate(currStart)} - ${formatDate(currEnd)}`
        }
    }

    return periods
}
console.log(fiveTimePeriods("2023-8-1", "2023-8-2"))
console.log(new Date('2023-07-31T23:00:00.000Z'))
console.log(JSON.parse(JSON.stringify("rdh")))
const arr2 = [
    { name: "hello" },
    { name: "hi" },
    { name: "yam" },
    { name: "wolrd" },
    { name: "brain" },
]
console.log(arr2.sort())
let arr3 = [...new Set([9, 3, 8, 2].concat(7, 6, 3, 0))]
let f = 7
let n = arr3.filter(item => item !== f)
console.log(n)
console.log(new Date(null || '2023-08-23T17:06:40.681+0000'))

console.log(Object.assign({ background: "#fefefe" }, { background: "black" }))

const dna = (str) => str.replace(/T|A|G|C/g, (char) => {
    const exchange = {
        T: "A",
        A: "T",
        G: "C",
        C: "G"
    }
    // console.log(Object.keys(exchange).length)
    return exchange[char]
})
console.log(dna("ATTGC"));
console.log(dna("GTAT"));

console.log(['100', '10', '1'].sort())

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log("" == 0)
const today = new Date();
// const month = today.getMonth();
// const year = today.getFullYear();
const dateArr = today.toString().split(" ")
console.log(today.toLocaleDateString("en-Gb"));
console.log(today.toLocaleTimeString("en-Gb", {
    hour12: true,
    timeStyle: "short"
}));
const [, month,, year] = dateArr;
console.log(month, year);
// console.log(months[month]);
// console.log(year);
console.log(new Date("2023-11-18T20:25:24.897Z") - new Date("2023-10-03T12:55:12.633+00:00")); //4001412264
console.log(new Date("2023-10-03T12:51:12.633+00:00") - new Date("2023-10-03T12:55:12.633+00:00"));
console.log(new Date("2023-10-03T12:51:12.633+00:00") - new Date("2023-10-03T12:55:12.633+00:00"));
console.log(new Date("2023-10-03T12:51:12.633+01:00") - new Date("2023-10-03T12:55:12.633+00:00"));
console.log(new Date(Date.now() + 0).getTime()); // 1696333872633 - GMT+2
console.log(new Date(Date.now() + 100000).toISOString()); // 1696333872633 - GMT+2
console.log(1000 * 60 * 4); // milliseconds in 4 minutes
console.log((1000 * 60 * 4) + (1000 * 60 * 60)); // milliseconds in 1 hour + 4 minutes
console.log(new Date(0))

console.log(new Date("2024", 1, 5, 14) > new Date())

const offset = 6

const newArr = Array.from({length: 10 + offset}, (_,idx) => idx < offset ? null : ++idx - offset) //Array(10).fill(0).map((_,idx) => idx + 1);
console.log(newArr);

let num = 0;
console.log(num);
console.log(num++);
console.log(num);

const timeObj = [{time: 123456}, {time: 145768}, {time: 135768}]
const sortedTimes = timeObj.sort((a,b) => b.time - a.time)
console.log(sortedTimes) // Greatest first
console.log(new Date(1698002158442).toLocaleDateString("en-gb"));
console.log((20000)/*.toFixed(2)*/.toLocaleString())

const address = "No 25 ABC Quarters, FHA Phase 5, Lugbe, Abuja, FCT"
console.log(address.length)
console.log(new Date().toLocaleString("en-US", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: "2-digit",
    minute: "2-digit"
}))

const getDateTime = (sec, nano) => {
    const milli = Number(sec * 1000) + Number(nano / 1000);

    return new Date(milli);
}
console.log(getDateTime("1699958068", "135000000"));
const arr6 = [1, 2, 3, 4]
console.log(arr6.splice(5, 1))
console.log(arr6)
console.log(arr6.findIndex((item) => item === 4))

console.log(new Date() - (24*60*60*1000));
console.log(new Date(1705335650808))
console.log((6 / 7).toFixed(0))

const appDateFormat = (date) => {
    const thatDate = date.toLocaleDateString("en-gb", {
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    })

    return thatDate.replace(/\d+/, (num) => {
        const ordinal = {
            0: "th",
            1: "st",
            2: "nd",
            3: "rd",
            4: "th",
            5: "th",
            6: "th",
            7: "th",
            8: "th",
            9: "th"
        }

        return num + ordinal[num.slice(-1)]
    })
}

console.log(appDateFormat(new Date(2023, 11, 1, 7, 70)))
console.log(1706059875979 - 1701555924656)

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  
  const locale = 'en-us'; // You can change the locale as needed
  
  const formatter = new Intl.DateTimeFormat(locale, options);
  const formattedDate = formatter.format(new Date());
  
  console.log(formattedDate);
  console.log(new Date(2024, 5).toLocaleDateString("en-gb", {
    // hour: "numeric",
    // minute: "numeric",
    month: "numeric",
    day: "numeric",
    year: "numeric"
  }).split("/").reverse().join("-"));

  console.log([2,4,1,9,5].sort((a,b) => b-a))

new function name() {
    console.log("hello")
}

function test5() {
    const r = new function(){console.log(5);return null}
    
    console.log({r});
}
test5();

console.log(new Date().toLocaleDateString("en-gb", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
}).split("/").reverse().join("-"));

console.log(new Date().toLocaleString("en-us", {
    minute: "2-digit",
    hour: "2-digit",
    day: "2-digit",
    month: "long",
    year: "numeric"
}))