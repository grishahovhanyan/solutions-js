function circleShift(seqString, k) {
  let seqArr = seqString.split(' ').map(num => +num)
  let correctK = k % seqArr.length
  let newArr = []

  for (let i = seqArr.length - correctK; i < seqArr.length; i++) {
    newArr.push(seqArr[i])
  }
  for (let i = 0; i < seqArr.length - correctK; i++) {
    newArr.push(seqArr[i])
  }

  return newArr.join(' ')
}


const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {
  let shiftK = +prompt('Enter "k".(to shift)')
  let seqStr = prompt('Enter sequence (a1 a2 a3 ...)(In string).')

  alert(seqStr + '\n' + 'after shift -> ' + circleShift(seqStr, shiftK))
})
