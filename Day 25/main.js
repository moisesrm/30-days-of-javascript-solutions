let listOfTop10 = (function(){
  let languages = {}
  let population = {}
  let total_population = Object.entries(countries).reduce((total, country) => {
    return (typeof total == "number") 
      ? (total + country[1].population) 
      : (total[1].population + country[1].population) 
  })

  countries.map(country => {
    population[country.name] = country.population
    country.languages.map(language => {
      if(languages[language] === undefined){
        languages[language] = 0
      }
      languages[language]++
    })
  })

  let populationsTop10 = Object.entries(population).sort((a,b) => {
    if(a[1] > b[1]){ return -1 }
    if(a[1] < b[1]){ return 1 }
    return 0
  })
  .slice(0,11)

  let languagesTop10 = Object.entries(languages).sort((a,b) => {
    if(a[1] > b[1]){ return -1 }
    if(a[1] < b[1]){ return 1 }
    return 0
  }).slice(0,11)

  let mountPercentHtml = (list) => {
    let name_html = ""
    let perc_html = ""
    let value_html = ""
    list.map(values => {
      name_html += `<span class='country'>${values[0]}</span><br/>`
      perc_html += `<span class='percentual' style='padding: 0px ${values[1]}px'></span><br/>`
      value_html += `<span class='value'>${values[1]}</span><br/>`
    })

    return `<table><tr><td>${name_html}</td><td>${perc_html}</td><td>${value_html}</td><tr></table>`
  }
  
  return {
    languages: () => document.getElementById('list').innerHTML = mountPercentHtml(languagesTop10),
    population: () => {
      let name_html = `<span class='country'>World</span><br/>`
      let perc_html = `<span class='percentual' style='padding: 0px 100px'></span><br/>`
      let value_html = `<span class='value'>${total_population}</span><br/>`
      populationsTop10.map(values => {
        let value = (values[1]*100)/total_population
        name_html += `<span class='country'>${values[0]}</span><br/>`
        perc_html += `<span class='percentual' style='padding: 0px ${value}px'></span><br/>`
        value_html += `<span class='value'>${values[1]}</span><br/>`
      })

      let html = `<table><tr><td>${name_html}</td><td>${perc_html}</td><td>${value_html}</td><tr></table>`
      document.getElementById('list').innerHTML = html
    },
  }
})()