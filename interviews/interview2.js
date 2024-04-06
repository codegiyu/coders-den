function century(year) {
    return Math.floor((year - 1) / 100) + 1;
}

  console.log(century(2022))

function maskify(cc) {
    return cc.length > 4 ? cc.slice(0, -4).replace(/\d/g, '#') + cc.slice(-4) : cc
}

console.log(maskify('134455667889'))

function digPow(n, p){
    let digiArr = String(n).split('');
    let result = digiArr.reduce((acc, curr, idx) => acc + (curr ** (p + idx)),0) / n
    return Number.isInteger(result) ? result : -1
}

console.log(digPow(89, 1))