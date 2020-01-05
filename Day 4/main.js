//Exercise 1
var age = parseInt(prompt("Enter your age:"))
if(age >= 18){
  console.log("You are old enough to drive")
}else{
  var yearsWaiting = 18 - age
  console.log(`You are left with ${yearsWaiting} years to drive.`)
}

//Exercise 2
var yourAge = parseInt(prompt("Enter your age:"))
var myAge = 25
var ageSentence = "older"
var diference = yourAge - myAge
if(yourAge < myAge){
  diference = myAge - yourAge
  ageSentence = "younger"
}
console.log(`You are ${diference} years ${ageSentence} than me.`)

//Exercise 3
let a = 4
let b = 3
let sentence = (a > b) ? "greater" : "less"
console.log(`${a} is ${sentence} than ${b}`)

//Exercise 4
var score = 25
if((score >= 80) && (score <= 100)){
  console.log("You get an A")
}else if((score >= 70) && (score <= 79)){
  console.log("You get an B")
}else if((score >= 60) && (score <= 69)){
  console.log("You get an C")
}else if((score >= 50) && (score <= 59)){
  console.log("You get an D")
}else{
  console.log("You get an F")
}

//Exercise 5
var month = "January"
if((month == "September") || (month == "October") || (month == "November")){
  console.log("The season is Autumn")
}else if((month == "December") || (month == "January") || (month == "February")){
  console.log("The season is Winter")
}else if((month == "March") || (month == "April") || (month == "May")){
  console.log("The season is Spring")
}else{
  console.log("The season is Summer")
}

//Exercise 6
var number = 2
var sentence = ( (number % 2) == 0 ) ? "even" : "odd"
console.log(`${number} is an ${sentence} number`)

//Exercise 7
var day = prompt("What is the day is today ?").toLowerCase()
var sentence = "work"
if((day == "saturday") || (day == "sunday")){
  sentence = "weekend"
}
day = day.slice(0,1).toUpperCase() + day.substr(1,day.length).toLowerCase()
console.log(`${day} is a ${sentence} day.`)

//Exercise 8
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var month = prompt("Enter month:")
month = month.slice(0,1).toUpperCase() + month.substr(1,month.length).toLowerCase()
var numberOfMonth = months.indexOf(month) + 1
var year = new Date().getFullYear()
var numberOfDays = new Date(year, numberOfMonth, 0).getDate()
console.log(`${month} has ${numberOfDays} days`)