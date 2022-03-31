function canBeBig(num) {
  let arrDigits = num.split('')

  arrDigits.sort((x, y) => y - x)
  const newNum = +arrDigits.join('')

  return newNum > num
}

const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {
  const number = prompt('Input number.')

  alert(canBeBig(number))
})
