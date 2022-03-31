function sumOfDigits(num) {
  let numArr = num.toString().split('').map(x => +x)
  let result = numArr.reduce((x, y) => x + y)

  return result
}

function rootOfNumber(num) {
  /* Solution 1 (recursion) */
  let sum = sumOfDigits(num)

  return sum >= 10 ? rootOfNumber(sum) : sum

  /* Solution 2 */
  // let numArr = num.toString().split('').map(x => +x)
  // let result = 0

  // while (true) {
  //   result += num % 10
  //   num = Math.floor(num / 10)

  //   if (num === 0) {
  //     if (result >= 10) {
  //       num = result
  //       result = 0
  //     } else {
  //       return result
  //     }

  //   } else { continue }
  // }

  /* Solution 3*/
  // let digArr = num.toString().split('').map(x => +x)
  // let sum = digArr.reduce((x, y) => x + y)

  // return sum < 10 ? sum : sum % 9
}


const button8 = document.getElementById('button8')
button8.addEventListener('click', () => {
  const number = +prompt('Enter number to calculate "root".')

  alert(rootOfNumber(number))
})
