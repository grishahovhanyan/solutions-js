function aPowN(num, degree) {
  if (degree === 0) {
    return 1
  }

  return num * aPowN(num, degree - 1)
}

const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {
  let number = +prompt('Enter number.')
  let degree = +prompt('Enter degree to calculate (number^degree)')

  alert(aPowN(number, degree))
})
