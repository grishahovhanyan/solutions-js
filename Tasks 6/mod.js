function maxFromBucket(bucket, minOfSeq) {
  let maxRepeatNumIndex = 0// index of bucket[0]

  for (let i = 1; i < bucket.length; i++) {
    if (bucket[i] === undefined) {
      continue
    }

    if (bucket[i] >= bucket[maxRepeatNumIndex]) {
      maxRepeatNumIndex = i
    }
  }

  // find the max repeat number
  let mod = maxRepeatNumIndex + minOfSeq
  return mod
}

function modOfSequence(sequence) {
  let bucket = []
  let minOfSequence = Math.min(...sequence)

  for (let i = 0; i < sequence.length; i++) {//  
    let indexToCheck = sequence[i] - minOfSequence

    if (bucket[indexToCheck] === undefined) {
      bucket[indexToCheck] = 1
    } else {
      bucket[indexToCheck]++
    }
  }

  let modOfArray = maxFromBucket(bucket, minOfSequence)
  return modOfArray
}


const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {
  let seqArr = prompt('Enter sequence (a1 a2 a3 ...): from -1000 to 1000')
  seqArr = seqArr.split(' ').map(num => +num)

  alert(seqArr + '\n' + 'mod -> ' + modOfSequence(seqArr))
})
