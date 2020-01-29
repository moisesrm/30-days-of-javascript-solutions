let gravityCalculator = (function(){

  let planets = [
    { image: 'earth.png',    gravity: 9.8   },
    { image: 'jupiter.png',  gravity: 9.8   },
    { image: 'mars.png',     gravity: 9.8   },
    { image: 'mercury.png',  gravity: 9.8   },
    { image: 'moon.png',     gravity: 9.8   },
    { image: 'neptune.png',  gravity: 9.8   },
    { image: 'pluto.png',    gravity: 9.8   },
    { image: 'saturn.png',   gravity: 9.8   },
    { image: 'uranus.png',   gravity: 9.8   },
    { image: 'venus.png',    gravity: 9.8   },
  ]

  return {
    calculate: () => {
      let index_planet = document.getElementsByName('planet')[0].value
      let weigth = document.getElementsByName('weigth')[0].value
      if(weigth.length > 0){
        let gravity = document.getElementById('gravity')
        let img = document.getElementById('planet-img')
        img.setAttribute('src', `https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/24_Day/24_day_starter/images/${planets[index_planet].image}?raw=true`)
        gravity.textContent = Math.trunc(planets[index_planet].gravity * weigth)
      }
    }
  }
})()