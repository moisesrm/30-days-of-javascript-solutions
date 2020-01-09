//Exercise 1
function fullName(){
  console.log("Moises Machado")
}

//Exercise 2
function fullName(firstName, lastName){
  console.log(`${firstName} ${lastName}`)
}

//Exercise 3
function addNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber
}

//Exercise 4
function areaOfRectangle(length, width){
  return length * width
}

//Exercise 5
function perimeterOfRectangle(length, width){
  return 2 * (length + width)
}

//Exercise 6
function volumeOfRectPrism(length, width, height){
  return length * width * height
}

//Exercise 7
function areaOfCircle(radius){
  return 3.14 * pow(radius,2)
}

//Exercise 8
function circumOfCircle(radius){
  return 2 * 3.14 * radius
}

//Exercise 9
function calculateDensity(mass, volume){
  return mass/volume
}

//Exercise 10
function calculateSpeed(distance, time){
  return distance/time
}

//Exercise 11
function calculateWeight(mass){
  let gravity = 9.807
  return mass * gravity
}

//Exercise 12
function convertCelciusToFahrenheit(celcius){
  return (celcius * 9/5) + 32
}

//Exercise 13
function calculateBMI(weight, height){
  let bmi = weight / pow(height,2)
  if(bmi < 18.5){ return "Underweight" }
  if(bmi <= 24.9){ return "Normal weight" }
  if(bmi <= 29.9){ return "Overweight" }
  return "Obese"
}

//Exercise 14
function checkSeason(month){
  month = month.toLowerCase()
  if(["september","october","november"].includes(month)){
    return "The season is Autumn"
  }else if(["december","january","february"].includes(month)){
    return "The season is Winter"
  }else if(["march","april","may"].includes(month)){
    return "The season is Spring"
  }
  
  return "The season is Summer"
}

//Exercise 15
function findMax(listOfNumbers){  
  return listOfNumbers.sort().pop()
}

//Exercise 16
function solveLinEquation(a, b, c){
  var x, y
  x = -(c/a)
  y = -((a*x + c)/b)
  return [x,y]
}

//Exercise 17
function solveQuadratic(a, b, c){
  var x1, x2
  x1 = (-b + Math.sqrt( pow(b,2) - 4 * a * c ))/ 2 * a
  x2 = (-b - Math.sqrt( pow(b,2) - 4 * a * c ))/ 2 * a
  return [x1,x2]
}

//Exercise 18
function printArray(values){
  console.log(values)
}

//Exercise 19
function swapValues(...values){
  return values.reverse()
}

//Exercise 20
function reverseArray(array){
  var i = 0, lastIndex = array.length - 1, newArray = []
  for(i = lastIndex; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}

//Exercise 21
function capitalizeArray(array){
  return array.map(value => value.toUpperCase())
}

//Exercise 22
function addItem(a){
  return [a]
}
29
//Exercise 23
function removeItem(i){
  var anArray = ['a','b','c','d','e','f']
  return [...anArray.slice(0,i), ...anArray.slice(i+1)]
}

//Exercise 24
function sumOfNumbers(range){
  var a = 0
  for(let i = 0; i < range; i++){
    a += i 
  }
  return a 
}

//Exercise 25
function sumOfOdds(range){
  var a = 0
  for(let i = 0; i < range; i++){
    a += (i%2 != 0) ? i : 0
  }
  return a 
}

//Exercise 26
function sumOfEvens(range){
  var a = 0
  for(let i = 0; i < range; i++){
    a += (i%2 == 0) ? i : 0
  }
  return a 
}

//Exercise 27
function evensAndOdds(range){
  var evens = 0, odds = 0
  for(let i = 0; i < range; i++){
    if((i%2) == 0){
      evens++
    }else{
      odds++
    }
  }
  return `The number of odds are ${odds}.\nThe number of evens are ${evens}.`
}

//Exercise 28
function sum(...numbers){
  var sum = 0
  for(let number of numbers){
    sum += number
  }
  return sum
}

//Exercise 29
function randomIp(){
  let re = RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')
  let generateIp = () => {
    let ip = []
    for(let a = 0; a < 3; a++){
      ip.push(`${Math.trunc(Math.random()*255)}`)
    }
    return ip.join(".")
  }
  let ip = generateIp()
  while(!ip.match(re)){
    ip = generateIp()
  }

  return ip
}

//Exercise 30
function randomMac(){
  let re = RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')
  let generateMac = () => {
    let mac = []
    for(let i = 0; i < 6; i++){
      let bits = `${Math.trunc(Math.random()*16).toString(16)}${Math.trunc(Math.random()*16).toString(16)}`
      mac.push(`${bits.toUpperCase()}`)
    }
    return mac.join(":")
  }
  let mac = generateMac()
  while(!mac.match(re)){
    mac = generateMac()
  }
  
  return mac
}

//Exercise 31
function randomHexaNumberGenerator(){
  return `${Math.trunc(Math.random()*Math.pow(10,10)).toString(16)}`
}

//Exercise 32
function userIdGenerator(){
  let id = '', toupper = 0, letter = ''
  while(id.length < 7){
    randChar = (Math.trunc(Math.random() * 32)) + 94
    letter = String.fromCharCode(randChar)
    toUpper = Math.trunc(Math.random() * 2)
    if(randChar >= 65 || randChar <= 90){
      if(!toUpper){
        letter = letter.toLowerCase()
      }
    }
    if(( (randChar >= 65) || (randChar <= 90) ) || ((randChar >= 48) || (randChar <= 57)) ){
      id += letter
    }
  }
  return id
}

//Exercise 33
function userIdGenerator(){
  let ids = [], id = '', toupper = 0, letter = '', nIds = 0, lengthId = 0 
  nIds = parseInt(prompt("How many id(s) to generate ?"))
  lengthId = parseInt(prompt("What will be the length of the id(s) generates ?"))
  for(let i = 0; i < nIds; i++){
    id = ''
    while(id.length < lengthId){
      randChar = (Math.trunc(Math.random() * 32)) + 94
      letter = String.fromCharCode(randChar)
      toUpper = Math.trunc(Math.random() * 2)
      if(randChar >= 65 || randChar <= 90){
        if(!toUpper){
          letter = letter.toLowerCase()
        }
      }
      if(( (randChar >= 65) || (randChar <= 90) ) || ((randChar >= 48) || (randChar <= 57)) ){
        id += letter
      }
    }
    ids.push(id)
  }
  return ids
}

//Exercise 34
function rgbColorGenerator(){
  let red = Math.trunc(Math.random() * 255)
  let green = Math.trunc(Math.random() * 255)
  let blue = Math.trunc(Math.random() * 255)
  return `rgb(${red},${green},${blue})`
}

//Exercise 35
function arrayOfHexaColors(){
  let red = Math.trunc(Math.random() * 255).toString(16)
  let green = Math.trunc(Math.random() * 255).toString(16)
  let blue = Math.trunc(Math.random() * 255).toString(16)
  return [red,green,blue]
}

//Exercise 36
function arrayOfRgbColors(){
  let red = Math.trunc(Math.random() * 255)
  let green = Math.trunc(Math.random() * 255)
  let blue = Math.trunc(Math.random() * 255)
  return [red,green,blue]
}

//Exercise 37
function convertHexaToRgb(){
  let rgbColor = "#a3e12f"
  rgbColor = rgbColor.slice(1)
  let red = rgbColor.slice(0,2)
  let green = rgbColor.slice(2,4)
  let blue = rgbColor.slice(-2)
  return [red,green,blue]
}

//Exercise 38
function convertRgbToHexa(){
  let rgbColor = "rgb(5, 55, 175)".replace('rgb', '').replace(/[\(\)]/g,'')
  rgbColor = rgbColor.slice(1)
  let red = rgbColor.slice(0,2)
  let green = rgbColor.slice(2,4)
  let blue = rgbColor.slice(-2)
  return [red,green,blue]
}

//Exercise 39
function generateColors(color, number){
  let hexa = () => `#${arrayOfHexaColors().join('')}`
  let rgb = () => rgbColorGenerator()
  let colors = []
  for(let i = 0; i < number; i++){
    colors.push(eval(`${color}()`))
  }
  
  return colors
}

//Exercise 40
function shuffleArray(numbers){
  let length = numbers.length 
  for(let i = 0; i < length; i++){
    let index = Math.trunc(Math.random()*(length-1))
    let aux = numbers[i]
    numbers[i] = numbers[index]
    numbers[index] = aux
  }
  return numbers
}

//Exercise 41
function factorial(number = 1){
  if([0,1].includes(number)){
    return 1
  }
  let sum = number * factorial(number-1)
  return sum
}

//Exercise 42
function isEmpty(param){
  return [undefined, null].indexOf(param) != -1
}

//Exercise 43
function sum(number){
  return number + number
}

//Exercise 44
function sumOfArrayItems(numbers){
  let arrayOfNonNumbers = numbers.filter(number => typeof(number) != "number")
  if(arrayOfNonNumbers.length > 0){
    return "Not all elements were numbers"
  }

  return eval(numbers.join("+"))
}

//Exercise 45
function avg(numbers){
  let arrayOfNonNumbers = numbers.filter(number => typeof(number) != "number")
  if(arrayOfNonNumbers.length > 0){
    return "Not all elements were numbers"
  }
  
  return eval(numbers.join("+"))/numbers.length
}

//Exercise 46
function modifyArray(elements){
  if(elements[4] != undefined){
    elements[4] = elements[4].toUpperCase()
  }
  return elements
}

//Exercise 47
function isPrime(number){
  for(let n = 2; n < number; n++){
    if(number%n == 0){
      return false
    }
  }
  return true
}

//Exercise 48
function hasUniqueItens(itens){
  for(let i = 0; i < itens.length; i++){
    if(itens.filter(n => n === itens[i]).length > 1){
      return false
    }
  }
  return true
}

//Exercise 49
function hasSameType(itens){
  itens = itens.map(i => typeof(i))
  for(let i = 0; i < itens.length; i++){
    if(itens.filter(n => n != itens[i]).length > 1){
      return false
    }
  }
  return true
}

//Exercise 50
function isValidVariable(varName){
  return varName.match(/[^A-Za-z$_]/) == null
}

//Exercise 51
function sevenRandomNumbers(){
  var randNumbers = [], i = 0
  while(randNumbers.length <= 7){
    i = Math.trunc(Math.random() * 100)
    if(randNumbers.indexOf(i) == -1){
      randNumbers.push(i)
    }
  }
  
  return randNumbers
}

//Exercise 52
function reverseCountries(countries){
  var copy = countries
  return countries.reverse()
}