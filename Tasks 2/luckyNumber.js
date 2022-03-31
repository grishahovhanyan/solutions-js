

function isNumberHappy(num) {
  // let sumOfEvenPos = 0
  // let sumOfOddPos = 0
  // let temp = true //true -> odd position

  // while (num) {
  //   if (temp) {
  //     sumOfOddPos += num % 10
  //   } else {
  //     sumOfEvenPos += num % 10
  //   }

  //   temp = !temp
  //   num = Math.floor(num / 10)
  // }

  // return sumOfOddPos === sumOfEvenPos

  /* Solution 2 */
  let sumOfEvenPos = 0
  let sumOfOddPos = 0
  let copyNumArr = ('' + num).split('').reverse()

  for (let i = 0; i < copyNumArr.length; i += 2) {
    if (copyNumArr[i + 1] !== undefined) {
      sumOfOddPos += +copyNumArr[i]
      sumOfEvenPos += +copyNumArr[i + 1]
    } else {
      sumOfOddPos += +copyNumArr[i]
    }
  }

  return sumOfOddPos === sumOfEvenPos
}

const button7 = document.getElementById('button7')
button7.addEventListener('click', () => {
  const number = +prompt('Input number.')

  alert(isNumberHappy(number))
})