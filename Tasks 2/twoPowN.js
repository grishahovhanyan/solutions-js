function degreeOfTwo(num) {
  /* Solution 1 */
  // while (num) {
  //   if (num === 1) {
  //     return true
  //   } else {
  //     num = num % 2 === 0 ? Math.floor(num / 2) : 0
  //   }
  // }
  // return false

  /* Solution 2 */ (BitWise)
  let binaryNum = (num >> 0).toString(2).split('')
  let countOfOne = binaryNum.filter(x => x == 1).length

  return countOfOne === 1
}


const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {
  const number = +prompt('Input number.')

  alert(degreeOfTwo(number) ? 'Yes' : 'No')
})
