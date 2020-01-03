//Exercise 1
var nameChallenge = "30 Days Of JavaScript"

//Exercise 2
console.log(`${nameChallenge}`);

//Exercise 3
console.log(nameChallenge.length)

//Exercise 4
console.log(nameChallenge.toUpperCase())

//Exercise 5
console.log(nameChallenge.toLowerCase())

//Exercise 6
console.log(nameChallenge.substr(3,5))

//Exercise 7
console.log(nameChallenge.slice(3,-1))

//Exercise 8
var sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.substr(30,24))

//Exercise 9
console.log(sentence.includes('Script'))

//Exercise 10
console.log(snetence.split(' '))

//Exercise 11
console.log(nameChallenge.split(' '))

//Exercise 12
var companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(nameChallenge.split(','))

//Exercise 13
console.log(nameChallenge.replace('JavaScript', 'Python'))

//Exercise 14
console.log(nameChallenge.charAt(15))

//Exercise 15
console.log(nameChallenge.charCodeAt(15))

//Exercise 16
console.log(nameChallenge.indexOf('a'))

//Exercise 17
console.log(nameChallenge.lastIndexOf('a'))

//Exercise 18
console.log(sentence.indexOf('because'))

//Exercise 19
console.log(sentence.lastIndexOf('because'))

//Exercise 20
console.log(sentence.search('because'))

//Exercise 21
console.log(nameChallenge.trim())

//Exercise 22
console.log(nameChallenge.startsWith('30'))

//Exercise 23
console.log(nameChallenge.endsWith('JavaScript'))

//Exercise 24
console.log(nameChallenge.match(/a/ig))

//Exercise 25
console.log(sentence.match(/because/ig))

//Exercise 26
var firstPart = "30 Days of "
var language = 'JavaScript'
console.log(firstPart.concat(language))

//Exercise 27
console.log(nameChallenge.repeat(2))

//Exercise 28
var loveSentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(loveSentence.match(/(love)/ig).length)

//Exercise 29
var salarySentence = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
var gains = salarySentence.match(/[0-9]+/g)
var totalAnnual = ( ( parseInt(gains[0]) + parseInt(gains[2]) ) * 12 ) + parseInt(gains[1])
console.log(totalAnnual)

//Exercise 30
var crazySentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?"
console.log(crazySentence.replace(/[^A-Za-z\s]*/g,''))