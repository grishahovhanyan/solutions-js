function stringDegree(str, deg) {
  let tempStr = str
  if (deg >= 0) {
    if (deg === 0) {
      return ''
    }

    for (let i = 1; i < deg; i++) {
      str = str.concat(tempStr)
    }

    return str
  } else {
    let pieceArray = []
    let pieceLength = str.length / (deg * -1)
    if (pieceLength % 1 !== 0) {
      return undefined
    }

    if ((deg * -1) === 1) {
      return str
    }

    let j = 1
    for (let i = 0; i < str.length; i += pieceLength) {
      let piece = str.slice(i, pieceLength * j++)
      pieceArray.push(piece)
    }

    let isPieceUniq = [...new Set(pieceArray)]

    if (isPieceUniq.length === 1) {
      return isPieceUniq[0]
    } else {
      return undefined
    }
  }
}

const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {
  let text = prompt('Enter text.')
  let deg = +prompt('Enter number.')

  alert(text + ' in degree ' + deg + '\n' + stringDegree(text, deg))
})
