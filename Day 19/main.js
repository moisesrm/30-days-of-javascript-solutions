//LEVEL 1
let sayHello = () => console.log("Hello")

//LEVEL 2
let sayHello = (function() {
  function inPortuguese () { console.log("Olá") }
  function inEnglish () { console.log("Hi") }
  function inSpanish () { console.log("Ola") }

  return {
    inPortuguese: inPortuguese,
    inEnglish: inEnglish,
    inSpanish: inSpanish,
  }
})()