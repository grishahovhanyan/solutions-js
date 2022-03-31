function perimeter(x1, y1, x2, y2, x3, y3, x4, y4) {
  let perim = 0

  perim += segmentLength(x1, y1, x2, y2)
  perim += segmentLength(x2, y2, x3, y3)
  perim += segmentLength(x3, y3, x4, y4)
  perim += segmentLength(x1, y1, x4, y4)

  return perim.toFixed(2)
}

function segmentLength(x1, y1, x2, y2) {
  let length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))

  return length
}

const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {
  let arrCoord = []
  let par = 'x'
  let index = 1
  for (let i = 0; i < 8; ++i) {
    arrCoord.push(+prompt(`${par}${index}`))
    par = par == 'x' ? 'y' : 'x'

    switch (i) {
      case 1: index = 2
        break
      case 3: index = 3
        break
      case 5: index = 4
        break
    }
  }

  alert(perimeter(...arrCoord))
})
