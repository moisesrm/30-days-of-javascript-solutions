//LEVEL 1
let html_lvl1 = ""
for(let number = 0; number < 101; number++){
  let isPrime = true
  let span = true
  for(let n = 2; n < number; n++){
    if(number%n == 0){
      isPrime = false;
    }
  }
  span = `<span style='background:green'>${number}</span>`;
  if(isPrime && (number > 1)){
    span = `<span style='background:red'>${number}</span>`;
  }else if(number%2 != 0){
    span = `<span style='background:yellow'>${number}</span>`;
  }

  html_lvl1 += span;
}

document.getElementById('level1').innerHTML = html_lvl1;

//LEVEL 2
let html_lvl2 = '<span>' + countries.join('</span><span>') + '</span>'
document.getElementById('level2').innerHTML = html_lvl2;


