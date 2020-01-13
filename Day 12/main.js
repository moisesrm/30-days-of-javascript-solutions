//LEVEL 1
//Exercise 1.1

//Exercise 1.2
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints = points.sort((aNumber, bNumber) => {
  if(parseInt(aNumber) > parseInt(bNumber)){ return 1 }
  if(parseInt(aNumber) < parseInt(bNumber)){ return -1 }
  return 0
 })
let distance = eval(sortedPoints.slice(-2).join("+"))

//Exercise 1.3
// /^[a-z_?]+$/g

//LEVEL 2
//Exercise 2.1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords(paragraph){
  return paragraph.toLowerCase().replace(/[^a-z\s]/g,'')
    .split(" ").reduce((counter, word) => {
      if(typeof counter !== "object"){
        return [{count: 1, word: counter},{count: 1, word: word}]
      }

      let el = counter.find(wordCounter => wordCounter.word == word)
      if(el == undefined){
        el = {count: 0, word: word}
        counter.push(el)
      }
      let index = counter.indexOf(el)
      counter[index].count += 1
      return counter
    })
    .sort((a,b) => {
      if(a.count > b.count){ return -1 }
      if(a.count < b.count){ return 1 }
      if(a.word > b.word){ return -1 }
      if(a.word < b.word){ return 1 }
      return 0
    })  .sort((a,b) => {
      if(a.count > b.count){ return -1 }
      if(a.count < b.count){ return 1 }
      if(a.word > b.word){ return -1 }
      if(a.word < b.word){ return 1 }
      return 0
    })
    .slice(0,10)
}

//LEVEL 3
//Exercise 3.1
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function mostFrequentWords(sentence){
  return sentence.toLowerCase().replace(/[^a-z\s]/g,'')
    .split(" ").reduce((counter, word) => {
      if(typeof counter !== "object"){
        return [{count: 1, word: counter},{count: 1, word: word}]
      }

      let el = counter.find(wordCounter => wordCounter.word == word)
      if(el == undefined){
        el = {count: 0, word: word}
        counter.push(el)
      }
      let index = counter.indexOf(el)
      counter[index].count += 1
      return counter
    })
    .sort((a,b) => {
      if(a.count > b.count){ return -1 }
      if(a.count < b.count){ return 1 }
      if(a.word > b.word){ return -1 }
      if(a.word < b.word){ return 1 }
      return 0
    })  .sort((a,b) => {
      if(a.count > b.count){ return -1 }
      if(a.count < b.count){ return 1 }
      if(a.word > b.word){ return -1 }
      if(a.word < b.word){ return 1 }
      return 0
    })
}