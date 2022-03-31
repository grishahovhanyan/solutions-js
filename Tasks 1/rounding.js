function rounding(number) {// rounding to hundredths(example in PDF)
  /* Solution 1 */
  // let lastPart = number % 100
  // let firstPart = Math.floor(number / 100)

  // return lastPart < 50 ? firstPart * 100 : (firstPart + 1) * 100

  /* Solution 2 */
  const hundred = 100
  const halfOfHundred = 100 / 2
  return Math.floor((number + halfOfHundred) / hundred) * hundred
}


const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  const number = +prompt('number = ')
  alert(rounding(number))
})
