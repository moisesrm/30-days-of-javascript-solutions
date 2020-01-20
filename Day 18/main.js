const countriesURL = 'https://restcountries.eu/rest/v2/all'
const catsURL = 'https://api.thecatapi.com/v1/breeds'

let arrayOfCountries = []
let arrayOfCats = []

//LEVEL 1
fetch(countriesURL)
  .then(res => res.json())
  .then(countries => countries.map(country => {
    console.log(country.name)
    console.log(country.capital)
    console.log(country.languages)
    console.log(country.population)
    console.log(country.area)
    arrayOfCountries.push(country)
  }))
  .catch()

//LEVEL 2
fetch(catsURL)
  .then(res => res.json())
  .then(cats => cats.map(cat => {
    console.log(cat.name)
    arrayOfCats.push(cat)
  }))
  .catch()


//LEVEL 3
//Exercise 3.1
let average_weight = {min: 0, max: 0}
arrayOfCats.map(cat => {
    let weights = cat.weight.metric.split('-')
    average_weight.min += parseInt(weights[0])
    average_weight.max += parseInt(weights[1])
})

Math.trunc(average_weight.min/arrayOfCats.length)
Math.trunc(average_weight.max/arrayOfCats.length)

//Exercise 3.2
arrayOfCountries.sort((a,b) => {
  if(a.area > b.area){ return 1 }
	if(a.area < b.area){ return -1 }
  return 0
}).slice(0,10)

//Exercise 3.3
let languages = {}
arrayOfCountries.map(countrie => {
  countrie.languages.map(language => {
    if(languages[language.name] === undefined){
      languages[language.name] = 0
    }
    languages[language.name]++
  })
})

Object.entries(languages).sort((a,b) => {
	if(a[1] > b[1]){ return -1 }
	if(a[1] < b[1]){ return 1 }
	return 0
})