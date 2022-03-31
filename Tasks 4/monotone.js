function isMonotone(sequence) {
  let seqArr = sequence.split(' ').map(x => +x)
  if (isAscending(seqArr)) {
    return 'Ascending'
  } else if (isDescending(seqArr)) {
    return 'Descending'
  } else {
    return 'Neither'
  }

}

function isAscending(seqArr) {
  for (let i = 0; i < seqArr.length - 1; i++) {
    if (seqArr[i] >= seqArr[i + 1]) {
      return false
    }
  }

  return true
}

function isDescending(seqArr) {
  for (let i = 0; i < seqArr.length - 1; i++) {
    if (seqArr[i] <= seqArr[i + 1]) {
      return false
    }
  }

  return true
}

const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  let seq = prompt('Enter sequence.(a1 a2 a3 .... )')

  alert(isMonotone(seq))
})

