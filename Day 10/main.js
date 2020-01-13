const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// LEVEL 1
//Exercise.1.1
const anEmptySet = new Set()

//Exercise.1.2
const listOfNumbers = new Set()
for(let number = 0; number < 11; number++)
  listOfNumbers.add(number)

//Exercise.1.3
listOfNumbers.delete(2)

//Exercise.1.4
listOfNumbers.clear()

//Exercise.1.5
const aStringArray = ["A","B","C","D","E"]
const aStringSet = new Set(aStringArray)

//Exercise.1.6
const lengthCountries = countries.reduce((aCountry,bCountry) => { 
  if(typeof aCountry != "object"){
    aCountry = [[aCountry,aCountry.length]]
  }
  aCountry.push([bCountry, bCountry.length])
  return aCountry
})
const listLengthCountries = new Map(lengthCountries)

// LEVEL 2
//Exercise.2.1
const c = new Set([...a,...b])

//Exercise.2.2
let bSet = new Set(b)
const d = a.filter(number => b.has(number))