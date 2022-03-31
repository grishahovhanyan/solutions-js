function numberOfMaxDividers(x, y) {
  let formXtoY = []

  for (let i = x; i <= y; ++i) {
    formXtoY.push(countOfDividers(i))
  }

  return formXtoY.indexOf(Math.max(...formXtoY)) + x
}

function countOfDividers(num) {
  let count = 1

  for (let i = 1; i <= num / 2; ++i) {
    count = num % i == 0 ? ++count : count
  }

  return count
}


const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {
  let from = +prompt('(Max dividers) from ...')
  let to = +prompt('to ...')

  alert(numberOfMaxDividers(from, to))
})
