function isDualNumber(num) {
  let digitsArr = num.toString().split('').map(x => +x)

  let uniqDigitsArr = Array.from(new Set(digitsArr))
  return uniqDigitsArr.length <= 2
}


const button9 = document.getElementById('button9')
button9.addEventListener('click', () => {
  const number = +prompt('Input number.')

  alert(isDualNumber(number) ? 'Dual' : 'Not dual')
})
