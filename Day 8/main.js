//Exercise 1
let emptyObj = {}

//Exercise 2
let dog = {}
console.log(dog)

//Exercise 3
let dog = {
  name: "Nala",
  legs: 4,
  color: "Black",
  age: "5",
  bark: () => "woof woof",
  breed
}

//Exercise 4
console.log(`
${dog.name}\n
${dog.legs}\n
${dog.color}\n
${dog.age}\n
${dog.bark()}\n
`)

//Exercise 5
dog["breed"] = ""
dog["getDogInfo"] = () => `
Name: ${this.name}\n
Legs: ${this.legs}\n
Color: ${this.color}\n
Age: ${this.age}\n
Breed: ${this.breed}\n
Say hi ${this.name}: ${dog.bark()}\n
`
//Exercise 6
let personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],
  totalIncome: () => { 
    let total = 0.00
    this.incomes.map(income => total += income.value) 
    return total
  },
  totalExpense: () => { 
    let total = 0.00
    this.expenses.map(expense => total += expense.value) 
    return total
  },
  accountInfo: () => {
    console.log(`${this.firstName} ${this.lastName}`)
    console.group("INCOMES")
    this.incomes.map(income => console.log(`${income.description}: ${income.value}`))
    console.log(`TOTAL: ${this.totalIncome()}`)
    console.groupEnd
    console.group("EXPENSES")
    this.expenses.map(expense => console.log(`${expense.description}: ${expense.value}`))
    console.log(`TOTAL: ${this.totalExpense()}`)
    console.groupEnd
  },
  addIncome: () => {
    let newIncome = {description: "", value: 0.00}
    newIncome.description = prompt("Description: ")
    newIncome.value = parseFloat(prompt("Value: "))
    this.incomes.push(newIncome)
  },
  addExpense: () => {
    let newExpense = {description: "", value: 0.00}
    newExpense.description = prompt("Description: ")
    newExpense.value = parseFloat(prompt("Value: "))
    this.expenses.push(newExpense)
  },
  accountBalance: () => {
    let totalIncome = this.totalIncome()
    let totalExpense = this.totalExpense()
    console.log(`INCOMES TOTAL: ${totalIncome}`)
    console.log(`EXPENSES TOTAL: ${totalExpense}`)
    console.log(`TOTAL: ${totalIncome - totalExpense}`)
  }
}

//Exercise 7
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

Object.values(users).filter(user => user.points >= 50).length

//Exercise 8
Object.entries(users).filter(user => 
	user[1].skills.includes("MongoDB") && user[1].skills.includes("Express") && user[1].skills.includes("React") && user[1].skills.includes("Node")
  ).map(user => user[0])

//Exercise 9
users["Moises"] = {
    email: 'moises@moises.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'C', 'Node', 'C++', 'Python', 'Ruby', 'Shell', 'Java'],
    age: 25,
    isLoggedIn: false,
    points: 40
  }

//Exercise 10
Object.keys(users)

//Exercise 11
Object.values(users)

//Exercise 12
countries.map(country => console.log(`
name: ${country.name}
capital: ${country.capital}
populations: ${country.populations}
languages: ${country.languages.join(", ")}
`))

//Exercise 13
function mostSpokenLanguages(countries, nCountries){
  let rankLanguages = []

  countries.map(country => { 
    country.languages
      .map(language => {
        let el = rankLanguages.find(r => r.language == language)
        if(el == undefined){
          el = {quantity: 0, language: language}
          rankLanguages.push(el)
        }
        el.quantity++
        let index = rankLanguages.indexOf(el)
        rankLanguages[index] = el
      })
  })

  rankLanguages.sort((a,b) => {
    if(a.quantity > b.quantity){ return -1 }
    if(a.quantity < b.quantity){ return 1 }
    if(a.language > b.language){ return -1 }
    if(a.language < b.language){ return 1 }
    return 0
  })

  return rankLanguages.slice(0, nCountries)
}

//Exercise 14
function mostPopulatedCountries(countries, nCountries){
  let rankPopulation = []
  
  countries.map(country => { 
    rankPopulation.push({country: country.name, population: country.population})
  })
  
  rankPopulation.sort((a,b) => {
    if(a.population > b.population){ return -1 }
    if(a.population < b.population){ return 1 }
    if(a.country > b.country){ return -1 }
    if(a.country < b.country){ return 1 }
    return 0
  })
  
  return rankPopulation.slice(0, nCountries)
}

//Exercise 15
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
statistics = {
  count = () => ages.length,
  sum = () => eval(ages.join("+")),
  min = () => ages.sort()[0],
  max = () => ages.sort()[1],
  range = () => this.max() - this.min(),
  mean = () => ages.sort()[Math.trunc(this.count()/2)],
  median = () => Math.trunc(this.sum()/this.count()),
  mode = () => {
    let mode = {}
    ages.map(age => {
      let el = mode.find(i => i.age == age)
      if(el == undefined){
        el = {age, count: 0 }
        mode.push(el)
      }
      el.count++
      let index = mode.indexOf(el)
      mode[index] = el
    })
    mode.sort((a,b) => {
      if(a.count > b.count){ return -1 }
      if(a.count < b.count){ return 1 }
      return 0
    })
    return mode[0]
  },
  var: () => this.sum()/this.count()
}