function sumOfDigits(number) {
  return number % 10 + Math.floor((number / 10) % 10) + Math.floor(number / 100)
}


const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {
  const number = +prompt('Input number(A three-digit number must be entered)', 111)

  alert(sumOfDigits(number))
})
