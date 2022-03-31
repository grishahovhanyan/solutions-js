function squareEquation(a, b, c, x) {
  let result

  if (x === 0) {
    result = c
  } else {
    result = a * x * x + b * x + c
  }

  return result
}

const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {
  let a = Math.floor(+prompt('Enter "a"(for the equation ax^2 + bx + c).'))
  let b = Math.floor(+prompt('Enter "b"(for the equation ax^2 + bx + c).'))
  let c = Math.floor(+prompt('Enter "c"(for the equation ax^2 + bx + c).'))
  let x = Math.floor(+prompt('... and enter "x".'))

  alert(squareEquation(a, b, c, x))
})
