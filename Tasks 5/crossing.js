function crossing(seqOne, seqTwo) {
  /* Solution 1 */
  let seqOneArr = seqOne.split(' ').map(num => +num)
  let seqTwoArr = seqTwo.split(' ').map(num => +num)

  let crossArr = []
  for (let i = 0; i < seqOneArr.length; i++) {
    if (seqTwoArr.includes(seqOneArr[i])) {
      crossArr.push(seqOneArr[i])
    }
  }

  return crossArr

  /* Solution 2 */
  // let seqOneArr = seqOne.split(' ').map(num => +num)
  // let seqTwoArr = seqTwo.split(' ').map(num => +num)
  // let crossArr = [...new Set(seqOneArr)]
  // crossArr = crossArr.filter(num => seqTwoArr.includes(num))

  // return crossArr
}

const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {
  let sequenceOneStr = prompt('Enter first sequence  (a1 a2 a3 ...).')
  let sequenceTwoStr = prompt('Enter second sequence (b1 b2 b3 ...).')

  alert('crossing ->' + crossing(sequenceOneStr, sequenceTwoStr))
})
