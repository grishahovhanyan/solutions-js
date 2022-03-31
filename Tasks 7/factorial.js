// with recursion
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1
  }

  return num * factorial(num - 1)
}

const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
  let number = +prompt('Enter number to calculate factorial(number!).')

  alert(factorial(number))
})
