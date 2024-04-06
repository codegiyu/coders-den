interface A {
    apple: string;
}
interface B {
    bike: string;
}

function isA(obj: any): obj is A {
    return typeof obj === "object" && typeof obj.apple === "string";
}

console.log(isA({grape: "yes"}))

type MAXIMUM_ALLOWED_BOUNDARY = 5

type ComputeRange<
  N extends number,
  Result extends Array<unknown> = [],
> =
  /**
   * If length of Result is equal to N,
   * stop recursion and return Result
   */
  (Result['length'] extends N
    ? Result
    /**
     * Otherwise, call ComputeRange recursively with same N,
     * but with extendsd Result - add Result.length to current Result
     * 
     * First step:
     * Result is [] -> ComputeRange is called with [...[], 0]
     * 
     * Second step:
     * Result is [0] -> ComputeRange is called with [...[0], 1]
     * 
     * Third step:
     * Result is [0, 1] -> ComputeRange is called with [...[0, 1], 2]
     * 
     * ComputeRange is called until Result will meet a length requirement
     */
    : ComputeRange<N, [...Result, Result['length']]>
  )

// 0 , 1, 2 ... 998
type NumberRange = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]

// Pure js representation of ComputeRange utility type

const ComputeRange = (N: number, Result: number[] = []): number[] => {
  if (Result.length === N) {
      return Result
  }
  return ComputeRange(N, [...Result, Result.length])
}

const DefineRange = (MIN: number, totalNums: number, step: number = 1, Result: number[] = []): number[] => {
    if (Result.length === totalNums) {
        return Result;
    }

    return DefineRange(MIN, totalNums, step, [...Result, MIN + Result.length])
}

// type DefineRange2<MIN extends number, MAX extends number> = 

const DefineRange2 = (MIN: number, MAX: number): number[] => {
    const result: number[] = [MIN];
    let newNum: number = MIN;

    while (newNum < MAX) {

        newNum = Number(Number(newNum + 0.1).toFixed(1));

        result.push(newNum)
    }

    return result
}

console.log(ComputeRange(5))
console.log(DefineRange(5, 10))
console.log(DefineRange2(5, 6))

const allowedNums: NumberRange = 4; // anything greater is invalid

// type NumberInRange<Min extends number, Max extends number> =
//   Min extends Max ? Min : Min | NumberInRange<Min + 1, Max>;

// // Example: Create a type for numbers between 1 and 10
// type NumberBetweenOneAndTen = NumberInRange<1, 10>;

// // Usage
// const validNumber: NumberBetweenOneAndTen = 5; // Valid
// const invalidNumber: NumberBetweenOneAndTen = 15; // Error

const getCallDuration = (callStart: number|null, callEnd: number|null): string => {
  if (!callStart || !callEnd) return ""
  const duration = callEnd - callStart;
  const MILLISECS = 1000 // milliseconds in a second
  const totalSeconds = Math.floor(duration / MILLISECS);
  const timeArr: string[] = [];

  const secs = totalSeconds % 60;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 60;
  
  if (hours) timeArr.push(hours + " hr")
  if (mins) timeArr.push(mins + " min")
  if (secs) timeArr.push(secs + " sec")
  console.log({hours, mins, secs, duration, timeArr})

  return hours ? timeArr.slice(0,2).join(" ") : timeArr[0];
}

console.log(getCallDuration(1702311212359, 1702323212569))
console.log(getCallDuration(null, 1702323212569))
console.log(getCallDuration(1702311212359, null))
console.log(undefined == 0)


interface Message {
  sender: "You" | "Bro Bernard",
  message: string,
}