//LEVEL 1
//Exercise 1.1
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

//Exercise 1.2
let [fin, est, sw, den, nor] = countries

//Exercise 1.3
let [width, height, area, perimeter] = rectangle

//LEVEL 2
//Exercise 2.1
users.map(({name,scores,skills,age}) => console.log(`${name},${scores},${skills},${age}`))

//Exercise 2.2
users.filter(({skills}) => skills.length <= 2)

//LEVEL 3
//Exercise 3.1
countries.map(({name,capital,languages,population}) => console.log(`NAME: ${name}\nCAPITAL: ${capital}\nLANGUAGES ${languages.join(", ")}\nPOPULATION: ${population}`))

//Exercise 3.2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let {name, skills, scores, jsScore = student[2][2], reactScore = student[2][3]} = student
console.log(name, skills, scores, jsScore, reactScore)

//Exercise 3.3
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function arrayToObject(arrayToConvert){
  return arrayToConvert.map(data => {
    let {0:name, 1:skills, 2:scores} = data
    return {name, skills, scores}
  })
}

//Exercise 3.4
const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
let newStudent = {...student}

newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
newStudent.skills.backEnd.push({skill: 'Express', level: 9})
newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')