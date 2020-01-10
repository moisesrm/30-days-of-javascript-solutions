const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
{ product: 'banana', price: 3 },
{ product: 'mango', price: 6 },
{ product: 'potato', price: ' ' },
{ product: 'avocado', price: 8 },
{ product: 'coffee', price: 10 },
{ product: 'tea', price: '' }
]

/** Exercise 1
 * forEach: interate each element dont return 
 * map: interate each element and return a modify array
 * filter: interate each element and return a modify array only with elements that pass on the condition
 * reduce: interate each element with an accumulate and return the previous return of the interaction
 */

//Exercise 2
let show = (a) => console.log(typeof a == 'number')
let anArray = [1,2,3,4,5]
anArray.forEach(show)
anArray.map(show)
anArray.filter(show)
anArray.reduce(show)

//Exercise 3
countries.forEach(country => console.log(country))

//Exercise 4
names.forEach(name => console.log(name))

//Exercise 5
numbers.forEach(numbers => console.log(numbers))

//Exercise 6
countries.map(country => country.toUpperCase())

//Exercise 7
countries.map(country => country.length)

//Exercise 8
numbers.map(number => Math.pow(number,2))

//Exercise 9
names.map(name => name.toUpperCase())

//Exercise 10
products.map(product => product.price)

//Exercise 11
countries.filter(country => country.match(/land/gi))

//Exercise 12
countries.filter(country => country.length == 6)

//Exercise 13
countries.filter(country => country.length >= 6)

//Exercise 14
countries.filter(country => country.startsWith('E'))

//Exercise 15
products.filter(product => typeof product.price == "number")

//Exercise 16
products.map(product => product.price)
  .filter(price => typeof price == "number")
  .reduce((sum, price) => sum + price)

//Exercise 17
products.reduce((sum,product) => {
  let val = 0
  if(typeof sum == "object"){ sum = sum.price }
  if(typeof product.price == "number"){ val = product.price }
  return sum + val
})

//Exercise 18
function getStringLists(anArray){
  return anArray.map(el => ek.toString())
}

//Exercise 19
numbers.reduce((sum,number) => sum + number)

//Exercise 20
countries.reduce((frase,country) => {
  if(countries[countries.length - 1] == country){ 
    return `${frase} and ${country} are north European countries`
  }
	return `${frase}, ${country}`
})

/** Exercise 21
 * some - test if some elements is pass the condition
 * every - test all elements
 */

//Exercise 22
names.some(name => name.length > 7)

//Exercise 23
countries.every(country => country.match(/land/gi))

/** Exercise 24
 * find - search by element and return the element
 * findIndex - search by element and return the index
 */

//Exercise 25
countries.find(country => country.length == 6)

//Exercise 26
countries.findIndex(country => country.length == 6)

//Exercise 27
countries.findIndex(country => country == "Norway")

//Exercise 28
countries.findIndex(country => country == "Russia")

//Exercise 29
function categorizeCountries(){}

//Exercise 30
let rankLettes = []

file_countries.map(country => { 
  let letter = country.name.slice(0,1)
  let el = rankLetters.find(r => r.letter == letter)
  if(el == undefined){
    el = {quantity: 0, letter: letter}
    rankLetters.push(el)
  }
  el.quantity++
  let index = rankLetters.indexOf(el)
  rankLetters[index] = el
})

console.log(rankLettes)

//Exercise 31
function getFirstTenCountries(countries){
  return countries.slice(0, 10)
}

//Exercise 32
function getLastTenCountries(countries){
  return countries.slice(-10)
}

//Exercise 33

rankLetters.sort((a,b) => {
  if(a.quantity > b.quantity){ return -1 }
  if(a.quantity < b.quantity){ return 1 }
  if(a.letter > b.letter){ return -1 }
  if(a.letter < b.letter){ return 1 }
  return 0
})

console.log(rankLettes[0])


//Exercise 34
file_countries.sort((a,b) => {
  if(a.name > b.name){ return 1 }
  if(a.name < b.name){ return -1 }
  if(a.capital > b.capital){ return 1 }
  if(a.capital < b.capital){ return -1 }
  if(a.population > b.population){ return 1 }
  if(a.population < b.population){ return -1 }
  return 0
})