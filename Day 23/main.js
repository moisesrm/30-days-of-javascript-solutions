//LEVEL 1
function generateLvl1(){
  let n_number = document.getElementById("numbers").value
  let html_lvl1 = ""
  for(let number = 0; number < n_number; number++){
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
}

let counter = {}
document.body.addEventListener('keypress', e => {
   counter[e.key] = (counter[e.key] == undefined) ? 1 : counter[e.key]+1
 })


