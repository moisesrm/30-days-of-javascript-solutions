const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//Exercise 1
var x = 0
while(x < 11){
  console.log(x)
  x++
}

x = 0
do{
  console.log(x)
  x++
}while(x < 11)

//Exercise 2
var x = 10
while(x >= 0){
  console.log(x)
  x--
}

x = 10
do{
  console.log(x)
  x--
}while(x >= 0)

//Exercise 3
var n = 10
var i = 0
for(i = 0; i <= 10; i++){
  console.log(i)
}

//Exercise 4
var i = 1
for(i = 1; i <= 7; i++){
  console.log("#".repeat(i))
}

//Exercise 5
var i = 0
for(i = 0; i <= 10; i++){
  console.log(`${i} x ${i} = ${i*i}`)
}

//Exercise 6
var i = 0
console.log("i    i^2   i^3")
for(i = 0; i <= 10; i++){
  console.log(`${i}    ${Math.pow(i,2)}   ${Math.pow(i,3)}`)
}

//Exercise 7
var i = 0
for(i = 0; i <= 100; i++){
  if((i%2) == 0){
    console.log(`${i}`)
  }
}

//Exercise 8
var i = 0
for(i = 0; i <= 100; i++){
  if((i%2) == 1){
    console.log(`${i}`)
  }
}

//Exercise 9
var i = 0, n = 0
for(i = 0; i <= 100; i++){
  n = 2
  while(n < i){
    if(i%n == 0){
      break
    }
    n++
  }
  if(n == i){
    console.log(n)
  }
}

//Exercise 10
var sum = 0, i = 0
for(i = 0; i <= 100; i++){
  sum += i
}

//Exercise 11
var i = 0, evens = 0, odds = 0
for(i = 0; i <= 100; i++){
  if(i%2 == 0){
    evens += i
  }else{
    odds += i
  }
}

console.log(`The sum of all evens is ${evens}. And the sum of all odds is ${odds}.`)

//Exercise 12
console.log([evens,odds])

//Exercise 13
var randNumbers = [], i = 0
for(i = 0; i < 5; i++){
  randNumbers.push(Math.trunc(Math.random() * 100))
}

//Exercise 14
var randNumbers = [], i = 0
while(randNumbers.length <= 4){
  i = Math.trunc(Math.random() * 100)
  if(randNumbers.indexOf(i) == -1){
    randNumbers.push(i)
  }
}

//Exercise 15
var i = 0, randString = "", randChar
for(i = 0; i <= 6; i++){
  randChar = (Math.trunc(Math.random() * 32)) + 94
  randString += String.fromCharCode(randChar)
}
console.log(randString)

//Exercise 16
var i = 0, randString = "", randChar, numberChars = (Math.trunc(Math.random() * 100))
for(i = 0; i <= numberChars; i++){
  randChar = (Math.trunc(Math.random() * 32)) + 94
  randString += String.fromCharCode(randChar)
}
console.log(randString)

//Exercise 17
console.log(countries.map(country => country.toUpperCase()))

//Exercise 18
console.log(
  countries.map(country => {
    return [ country, country.toUpperCase().substr(0,3), country.length ]
  })
  )

//Exercise 19
var listLandCountries = countries.filter(country => country.match(/land/ig))
listLandCountries = (listLandCountries.length > 0) ? listLandCountries : "These are countries without land"
console.log(listLandCountries)

//Exercise 20
var listIaCountries = countries.filter(country => country.match(/ia$/ig))
listIaCountries = (listIaCountries) ? listIaCountries : "These are countries without ia"
console.log(listIaCountries)

//Exercise 21
countries.map(country => country.length)

//Exercise 22
countries.sort((country_a, country_b) => {
  if(country_a.length > country_b.length){ return  1 }
	else if(country_a.length < country_b.length){ return  -1 }
	return 0
}).reverse()[0]

//Exercise 23
countries.filter(country => country.length == 5)

//Exercise 24
webTechs.sort((tech_a, tech_b) => {
  if(tech_a.length > tech_b.length){ return  1 }
	else if(tech_a.length < tech_b.length){ return  -1 }
	return 0
}).reverse()[0]

//Exercise 25
webTechs.map(tech => [tech, tech.length])

//Exercise 26
['MongoDB', 'Express', 'React', 'Node'].map(tech => tech.slice(0,1)).join('')

//Exercise 27
var fullstack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
var i = 0
for(i = 0; i < fullstack.length; i++){
  console.log(fullstack[i])
}

//Exercise 28
var fruits = ['banana', 'orange', 'mango', 'lemon']
var fruitAux = '', lastFruitIndex = fruits.length - 1, i = 0
for(i = 0; i < (fruit.length/2); i++){
  fruitAux = fruits[i]
  fruits[i] = fruits[lastFruitIndex - i]
  fruits[lastFruitIndex - i] = fruitAux
}

//Exercise 29 
// Same as Exercise 19

//Exercise 30
// Same as Exercise 22

//Exercise 31
// Same as Exercise 19

//Exercise 32
countries.filter(country => country.length == 4)

//Exercise 33
countries.filter(country => country.split(" ").length >= 2)

//Exercise 34
// Same as Exercise 17
