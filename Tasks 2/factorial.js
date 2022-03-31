function factorial(num) {
  let fact = 1

  for (let i = 2; i <= num; ++i)
    fact *= i

  return fact
}


const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  const num = +prompt('Input number.')

  alert(factorial(num))
})
