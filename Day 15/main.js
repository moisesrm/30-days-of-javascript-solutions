//LEVEL 1 & 2
//Exercise 1.1 && 2.1
class Animal{
  name
  age
  color
  legs
  #sound

  constructor( name = '', age = '', color = '', legs = '' ){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  set sound(sound){ this.#sound = sound }
  get sound(){ return this.#sound }

  toString () {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Color: ${this.color}
      Legs: ${this.legs}
      Say hi ${this.name}: ${this.#sound}`
  }
}

class Dog extends Animal{
  constructor( name = '', age = '', color = '', legs = '' ){
    super(name, age, color, legs)
  }
}

class Cat extends Animal{
  constructor( name = '', age = '', color = '', legs = '' ){
    super(name, age, color, legs)
  }
}