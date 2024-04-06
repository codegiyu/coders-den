// The goal of this kata is to implement trie (or prefix tree) using dictionaries 
// (aka hash maps or hash tables), where:

// the dictionary keys are the prefixes
// the value of a leaf node is None in Python, nil in Ruby, null in Groovy, JavaScript and Java, 
// and Nothing in Haskell.
// the value for empty input is {} in Python, Ruby, Javascript and Java (empty map), [:] in Groovy, 
// and Trie [] in Haskell.
// Examples:

// buildTrie() => {}
// buildTrie("") => {}
// buildTrie("trie") => {'t': {'tr': {'tri': {'trie': null}}}}
// buildTrie("tree") => {'t': {'tr': {'tre': {'tree': null}}}}
// buildTrie("A","to", "tea", "ted", "ten", "i", "in", "inn") => 
// {'A': null, 't': {'to': null, 'te': {'tea': null, 'ted': null, 'ten': null}}, 'i': {'in': {'inn': null}}}
// buildTrie("true", "trust") => {'t': {'tr': {'tru': {'true': null, 'trus': {'trust': null}}}}}
// buildTrie("trie", "trie") => { t: { tr: { tri: { trie: null } } } }
// buildTrie("total", "to") => { t: { to: { tot: { tota: { total: null } } } } }
// buildTrie("trie", "trie", "tries") => { t: { tr: { tri: { trie: { tries: null } } } } }

const buildTrie = (...words) => {

    const resolveLevel = (levelObj, level) => {
        console.log(levelObj)
        if (Array.isArray(levelObj)) {
            const result = {};

            for(let word of levelObj) {
                if (word) {
                    const firstLetter = word[0];
                    result[firstLetter] = result[firstLetter] ? [...result[firstLetter], word] : [word]
                }
            }

            return resolveLevel(result, level + 1)
        }

        for (let key in levelObj) {
            if (!levelObj[key]) continue;
            console.log(levelObj, level) // { t: { tr: { tri: { trie: null } } } }
            if (levelObj[key].length === 1) {
                const arrVal = levelObj[key][0]
                console.log(arrVal)
                if (arrVal.length < level) {
                    levelObj[key] = null
                } else {
                    levelObj[key] = resolveSingleLongWord(arrVal, level);
                }
            } else {

                const subObj = {};
                let shouldNotBeNull = true;
                let objectHasProperty = false;
                const array = levelObj[key]

                for (let i = 0; i < array.length; i++) {
                    const newKeys = array[i].slice(0, level)
                    
                    if (array[i].length >= level) {
                        subObj[newKeys] = subObj[newKeys] ? [...subObj[newKeys], array[i]] : [array[i]]
                        objectHasProperty = true;
                    } else if (!objectHasProperty && i === array.length - 1 && array[i] === newKeys) {
                        shouldNotBeNull = false
                    }
    
                }
                levelObj[key] = shouldNotBeNull ? subObj : null;
                resolveLevel(levelObj[key], level + 1)
            }


        }

        return levelObj
    }

    const resolveSingleLongWord = (word, level) => {
        console.log([word, level])
        if (word.length < level) {
            return null
        }

        return { [word.slice(0, level)] : resolveSingleLongWord(word, level + 1) }
    }

    return resolveLevel(words, 1);
}

const test = {
    "A": ["A"],
    "t": ["to", "tea", "ted", "ten", "tent"],
    "i": ["i", "in", "inn"]
}
let key = "A"
console.log(test[key]);
test[key] = null;
console.log(test);

const tLevel2 = {
    "to": null,
    "te": ["tea", "ted", "ten", "tent"]
}

const testObj = { [key]: "something" }
console.log(testObj)

const wordsArr = ["A","to", "tea", "ted", "ten", "i", "in", "inn", "tent"];
console.log(buildTrie(...wordsArr));
console.log(buildTrie(""))
console.log(buildTrie())
console.log(buildTrie("trie"))
console.log(buildTrie("trie", "trie"))
console.log(buildTrie("total", "to"))
console.log(buildTrie("trie", "trie", "tries"))
// console.log(buildTrie("tree"))

console.log(wordsArr.slice(-7))

// 0,1,1,2,3,5,8

console.log(2 in {2: undefined})

const fib = (n) => {
    if (n in [0,1]) return n;

    return fib(n-1) + fib(n-2);
}

console.log(fib(40))