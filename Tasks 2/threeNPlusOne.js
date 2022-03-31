function hypCollatz(num) {
  const resultArr = [num]

  while (num !== 1) {
    num = num % 2 ? num * 3 + 1 : num / 2
    resultArr.push(num)
  }

  return resultArr
}


const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {
  const number = +prompt('Input number.')
  alert(hypCollatz(number))
})
