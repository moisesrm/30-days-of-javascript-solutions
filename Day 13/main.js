//LEVEL 1
//Exercise 1.1
console.table(countries)

//Exercise 1.2
countries.map(country => console.table(country))

//Exercise 1.3
console.group("Countries")
countries.map(country => console.table(country))
console.groupEnd

//LEVEL 2
//Exercise 2.1
console.assert(10 > 2 * 10, '10 is grater than 2 * 10')

//Exercise 2.1
console.warn('x may not be grater than 2 * 10')

//Exercise 2.3
console.erro('x is not grater than 2 * 10')

//Exercise 3
let i = 0; 
let arrayNumbers = [...Array(10).keys()]

console.time('WHILE')
  while(i < 10){ console.count('While Loop'); i++ }
console.timeEnd('WHILE')

console.time('FOR')
  for(i = 0; i < 10; i++){ console.count('For Loop'); }
console.timeEnd('FOR')

console.time('FOR OF')
  for(i of arrayNumbers){ console.count('For Loop'); }
console.timeEnd('FOR OF')

console.time('FOR EACH')
  arrayNumbers.forEach(number => console.count('For Loop') )
console.timeEnd('FOR EACH')