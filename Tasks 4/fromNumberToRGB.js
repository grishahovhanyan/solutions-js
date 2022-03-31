function rgbToHex(rgb) {
  let copyRGB = rgb.slice(1, rgb.length - 1)
  let colorNums = copyRGB.split(';')

  let result = '#' + decToHex(colorNums[0])
    + decToHex(colorNums[1])
    + decToHex(colorNums[2])

  return result
}

function decToHex(colorN) {
  let leftPartOfHex = Math.floor(colorN / 16)
  leftPartOfHex = (leftPartOfHex >> 0).toString(16)
  let rightPartOfHex = colorN % 16
  rightPartOfHex = (rightPartOfHex >> 0).toString(16)

  return '' + leftPartOfHex + rightPartOfHex
}

const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {
  let rgbCode = prompt('Enter (r;g;b) code.')

  alert(rgbToHex(rgbCode))
})
