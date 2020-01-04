//Exercise 1.1
var firstName = "Moises"
var lastName = "Machado"
var country = "Brazil"
var city = "Chicago"
var age = 25
var isMarried = true
var year = 2020

//Exercise 1.2
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//Exercise 2
let operandOne = 4
let operandTwo = 3

console.log(operandOne + operandTwo)
console.log(operandOne % operandTwo)
console.log(operandOne / operandTwo)
console.log(operandOne * operandTwo)

//Exercise 3.1
console.log( (operandOne + operandTwo) > 5)
console.log( (operandOne % operandTwo) > 0)
console.log( (operandOne / operandTwo) > -1)

//Exercise 3.2
console.log( (operandOne + operandTwo) == 5)
console.log( typeof(operandOne % operandTwo) == String)
console.log( operandOne === operandTwo)

//Exercise 4
4 > 3     // true
4 >= 3    // true
4 < 3     // false
4 <= 3    // false
4 == 4    // true
4 === 4   // true
4 != 4    // false
4 !== 4   // false
4 != '4'  // false
4 == '4'  // true
4 === '4' // false

//Exercise 5
4 > 3 && 10 < 12     // true
4 > 3 && 10 > 12     // false
4 > 3 || 10 < 12     // true
4 > 3 || 10 > 12     // true
!(4 > 3)             // false
!(4 < 3)             // true
!(false)             // true
!(4 > 3 && 10 < 12)  // false
!(4 > 3 && 10 > 12)  // true
!(4 === '4')         // true

//Exercise 6
var date = new Date()

//Exercise 6.1
console.log(date.getFullYear())

//Exercise 6.2
console.log(date.getMonth()+1)

//Exercise 6.3
console.log(date.getDate())

//Exercise 6.4
console.log(date.getDay())

//Exercise 6.5
console.log(date.getHours())

//Exercise 6.6
console.log(date.getMinutes())

//Exercise 6.7
console.log(Math.trunc(dateObj.getTime()/1000))

//Exercise 6.8.1
var hour = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`

//Exercise 6.8.1
console.log(`${dateObj.getFullYear()}-${dateObj.getMonth() +1}-${dateObj.getDay()} ${hour}`)

//Exercise 6.8.2
console.log(`${dateObj.getDay()}-${dateObj.getMonth() +1}-${dateObj.getFullYear()} ${hour}`)

//Exercise 6.8.3
console.log(`${dateObj.getDay()}/${dateObj.getMonth() +1}/${dateObj.getFullYear()} ${hour}`)