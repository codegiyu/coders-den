// export default countriesArr
let countriesArr = [1,2];

// function getCountries() {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(response => {
//         console.log(response.json())
//     })
//     .then(data => {
//         let arr = data.map(item => item.name.common)
//         countriesArr = [...arr].sort()
//         console.log(countriesArr)
//         console.log(response)
//     })
// }

// async function getCountries() {
//     const list = fetch('https://restcountries.com/v3.1/all')
//     countriesArr = await list.json()//.map(item => item.name.common).sort()
//     console.log(countriesArr)
// }

// getCountries()

export const countries = [...countriesArr];