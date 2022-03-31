function missingDigit(strSeq, range) {
  /* Solution 1 */
  // let arrSeq = strSeq.split('').map(num => +num)

  // for (let i = 0; i < range; ++i) {
  //   if (!arr.includes(i + 1)) {
  //     return i + 1
  //   }
  // }

  /* Solution 2 */
  let arrSeq = strSeq.split('').map(num => +num)

  let givenSequenceSum = arrSeq.reduce((x, y) => x + y)
  let rangeArr = Array.from(Array(range + 1).keys())
  let fullRangeSum = rangeArr.reduce((x, y) => x + y)

  return fullRangeSum - givenSequenceSum
}


const button7 = document.getElementById('button7')
button7.addEventListener('click', () => {
  let range = +prompt('Enter "N"(digit counts).')
  let stringSeq = prompt(`Enter a unique digits from the range[1,... ${range}]`)

  alert(stringSeq + '\n Missing digit -> ' + missingDigit(stringSeq, range))
})