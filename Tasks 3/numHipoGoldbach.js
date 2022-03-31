function isPrime(num) {
  if (num === 2)
    return true

  if (num % 2 === 0 || num === 1) {
    return false
  }

  for (let i = 3; i * i <= num; i++) {
    if (num % i === 0)
      return false
  }

  return true
}

function numHipoGoldbach(num) {
  for (let i = 1; i <= num; ++i) {
    if (isPrime(i)) {
      if (isPrime(num - i)) {
        return '' + i + '+' + (num - i) + '=' + num
      }
    }
  }

  return false
}


const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  let number = +prompt('Enter number')

  alert(numHipoGoldbach(number))
})
