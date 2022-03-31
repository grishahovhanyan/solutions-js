function drawCross(x, y) {
  if (x % 2 === 0 || y % 2 === 0) return 'The cross cannot be created.'

  let crossArr = new Array(x)
  let start = Math.floor((x - y) / 2)
  let end = start + y - 1

  for (let i = 0; i < crossArr.length; ++i) {
    crossArr[i] = []
    for (let j = 0; j < crossArr.length; ++j) {
      if ((i >= start && i <= end) || (j >= start && j <= end)) {
        crossArr[i][j] = '*'
      } else {
        crossArr[i][j] = ' '
      }
    }
    crossArr[i] = crossArr[i].join('')
  }

  console.log(crossArr)
}


const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
  let length = +prompt('Enter length.')
  let width = +prompt('Enter width.')

  drawCross(length, width)
})
