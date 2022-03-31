function canBeObtainedByCirShift(seqOneStr, seqTwoStr) {
  let seqOneArray = seqOneStr.split(' ')
  let seqTwoArray = seqTwoStr.split(' ')
  let matchIndex = -1

  for (let i = 0; i < seqOneArray.length; i++) {
    if (seqOneArray[0] === seqTwoArray[i]) {
      matchIndex = i
      break
    }
  }

  if (matchIndex === -1) {
    return 'No'
  }

  matchIndex = (matchIndex + 1) % seqOneArray.length
  for (let i = 1; i < seqOneArray.length; i++) {
    if (seqOneArray[i] !== seqTwoArray[matchIndex]) {
      return 'No'
    }

    matchIndex = (matchIndex + 1) % seqOneArray.length
  }

  return 'Yes'
}


const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  let sequenceOneStr = prompt('Enter first sequence (a1 a2 a3  ...).')
  let sequenceTwoStr = prompt('Enter second sequence (b1 b2 b3 ...).')

  alert('from ' + sequenceOneStr + ' to ' + sequenceTwoStr + '\n' + canBeObtainedByCirShift(sequenceOneStr, sequenceTwoStr))
})

