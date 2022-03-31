function findElementIndexes(seqStr, findEl) {
  let seqArr = seqStr.split(' ')

  let elIndArr = seqArr.reduce((newArr, el, index) => {
    if (+el === findEl) {
      newArr.push(index + 1)
    }
    return newArr
  }, [])

  if (!elIndArr.length) {
    return -1
  } else {
    return elIndArr.reverse().join(' ')
  }
}


const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {
  let seqStr = prompt('Enter sequence (a1 a2 a3 ...).')
  let elToFind = +prompt('Element to find.')

  alert(seqStr + '\n' + 'indexes -> ' + findElementIndexes(seqStr, elToFind))
})
