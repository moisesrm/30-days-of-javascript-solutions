//Exercise 1
var emptyArray = []

//Exercise 2
var numberArray = [1,2,3,4,5,6,7,8,9]

//Exercise 3
console.log(numberArray.length)

//Exercise 4
var mixedDataTypes = ["1",2,3.14,true]

//Exercise 5
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Exercise 6
console.log(itCompanies)

//Exercise 7
console.log([...itCompanies.keys()])

//Exercise 8
var firstCompany = 0
var middleCompany = Math.trunc(itCompanies.length / 2)
var lastCompany = itCompanies.length - 1
console.log(itCompanies[firstCompany])
console.log(itCompanies[middleCompany])
console.log(itCompanies[lastCompany])

//Exercise 9
itCompanies.map((company) => console.log(company))

//Exercise 10
itCompanies.map((company) =>  console.log(company.toUpperCase()))

//Exercise 11
var sentence = itCompanies.join(", ") + " are big IT companies."
var lastComma = sentence.lastIndexOf(",")
sentence = sentence.substr(0,lastComma) + " and" + sentence.substr(lastComma + 1)
console.log(sentence)

//Exercise 12
var company = prompt("Wich company are you looking for ?").toLowerCase()
var companyFound = itCompanies.find(itCompany => company == itCompany.toLowerCase())
var sentence = (companyFound != undefined) ? companyFound : "Not Found"
console.log(sentence)

//Exercise 13
console.log( itCompanies.filter(company => ( company.match(/o/) && company.match(/o/gi).length > 1 ) ) )

//Exercise 14
var oCompanies = []
itCompanies.map(company => {
  if( company.match(/o/) && company.match(/o/gi).length > 1 ) {
    oCompanies.push(company)
  }
})
console.log(oCompanies)

//Exercise 15
console.log(itCompanies.sort())

//Exercise 16
console.log(itCompanies.reverse())

//Exercise 17
console.log(itCompanies.slice(3))

//Exercise 18
console.log(itCompanies.slice(0,-3))

//Exercise 19
console.log(itCompanies.slice(0,-3))

//Exercise 20
console.log(itCompanies.slice(0,3).concat(itCompanies.slice(4)))

//Exercise 21
itCompanies.shift()
console.log(itCompanies)

//Exercise 22
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies.filter((company, index) => index != middleCompany))

//Exercise 23
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
itCompanies.pop()
console.log(itCompanies)

//Exercise 24
var itCompanies = []

//Exercise 25
// files countries.js and webTechs.js

//Exercise 26
var text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
console.log(text.replace(/[\.,]/gi, '').split(' ').length)

//Exercise 27
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"

//Exercise 28
var countryFounded = countries.find(country => country == "Ethiopia")
countryFounded ? countryFounded.toUpperCase() : countries.push("Ethiopia")

//Exercise 29
var sassFounded = webTechs.find(tech => tech == "Sass")
sassFounded ? "Sass is a CSS preprocess" : webTechs.push("Sass")

//Exercise 30
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Exercise 31
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
var arrayLength = ages.length
ages.sort()
var min = ages[0]
var max = ages[arrayLength - 1]
console.log(`Min ${min}`)
console.log(`Max ${max}`)
var middle = arrayLength/2;
( (arrayLength % 2) == 0 ) ? console.log(`Middle: ${ages[middle]}`) : console.log(`Middles: ${ages[middle]} ${ages[middle + 1]}`)
Math.trunc(ages.reduce((a,b) => a + b)/arrayLength)

console.log(Math.abs(min - ages[middle]) == Math.abs(max - ages[middle]))

//Exercise 32
var middleIndexCountry = Math.trunc(countries.length/2)
console.log(countries[middleIndexCountry])

//Exercise 33
var middleIndexCountry = Math.floor(countries.length/2)
var newCountries = [countries.slice(0,middleIndexCountry), countries.slice(middleIndexCountry)]
if((countries.length % 2) == 1){
  newCountries[0].push("Brazil")
}