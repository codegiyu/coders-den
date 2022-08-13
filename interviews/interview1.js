function myArrayFunction(arr, b) {
    arr = arr.filter(item => item != b);
    return arr;
}

console.log(myArrayFunction([1,2,3], 2));
console.log(myArrayFunction([1,2,'2'], '2'));
console.log(myArrayFunction([false,'2',1], false));
console.log(myArrayFunction([1,2,"2",1], 1));

function reverseString(str) {
    let strArr = str.split("");
    let reverse = strArr.reverse();

    return reverse.join("");
}

console.log(reverseString("hello"));

function joinArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);

    let uniqueItems = [];
    newArr.forEach(element => {
        if(!uniqueItems.includes(element)) {
            uniqueItems.push(element);
        }        
    });

    return uniqueItems;
}

console.log(joinArray([1,2,3], [3,4,5]));


let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",'v',"w",'x',"y","z"];

function fearNotLetter(str) {
    let missing = [];
    alphabet.forEach(element => {
        if(!str.split("").includes(element)) {
            missing.push(element)
        }
    })
    return missing[0];
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjhl"));