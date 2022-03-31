function sumOfDigits(num) {
  let sumOfDig = 0

  while (num) {
    sumOfDig += num % 10
    num = Math.floor(num / 10)
  }

  return sumOfDig
}

const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {
  const num = +prompt('Input any number.')

  alert(`The sum of digits of ${num} is ${sumOfDigits(num)}.`)
})
