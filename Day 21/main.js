//LEVEL 1
//Exercise 1.1
document.querySelector('p')

//Exercise 1.2
document.querySelector('#paragraph_1')
document.querySelector('#paragraph_2')
document.querySelector('#paragraph_3')
document.querySelector('#paragraph_4')

//Exercise 1.3
document.querySelectorAll('p')

//Exercise 1.4
document.querySelectorAll('p').forEach((e) => console.log(e.innerHTML))

//Exercise 1.5
let listOfPs = document.querySelectorAll('p')
listOfPs[listOfPs.length - 1].textContent = "Fourth Paragraph"

//Exercise 1.6
document.querySelectorAll('p').forEach((e, i) => {
  if(i == 0){
    e.setAttribute('class', `pragraphs-${i}`)
    e.setAttribute('id', `para-${i}`)
  }

  if(i == 1){
    e.className = `pragraphs-${i}`
    e.id = `para-${i}`
  }

  if(i == 2){
    e.classList.add('class', `pragraphs-${i}`)
    e.classList.add('id', `para-${i}`)
  }

  if(i == 3){
    e.class = `pragraphs-${i}`
    e.classList.add('id', `para-${i}`)
  }
})

//LEVEL 2
document.querySelectorAll('p').forEach((e, i) => {
  if(i == 0){
    e.setAttribute('class', `pragraphs-${i}`)
    e.setAttribute('id', `para-${i}`)
    e.setAttribute('style', 'background-color:green')
    e.textContent = "FIRST !"
  }

  if(i == 1){
    e.className = `pragraphs-${i}`
    e.id = `para-${i}`
    e.setAttribute('style', 'background-color:red')
    e.textContent = "SECOND !"
  }
  
  if(i == 2){
    e.classList.add('class', `pragraphs-${i}`)
    e.classList.add('id', `para-${i}`)
    e.setAttribute('style', 'background-color:green')
    e.textContent = "THIRD !"
  }
  
  if(i == 3){
    e.class = `pragraphs-${i}`
    e.classList.add('id', `para-${i}`)
    e.setAttribute('style', 'background-color:red')
    e.textContent = "URHG LAST AGAIN !"
  }
})

