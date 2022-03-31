function comparisonBigNumbers(num1Str, num2Str) {// Will return sign
  let numOneArr = num1Str.split('').map(num => +num)
  let numTwoArr = num2Str.split('').map(num => +num)

  if (numOneArr.length > numTwoArr.length) {
    return '>'
  } else if (numOneArr.length < numTwoArr.length) {
    return '<'
  } else {
    for (let i = max - 1; i >= 0; i--) {
      if (numOneArr[i] > numTwoArr[i]) {
        return '>'
      }

      if (numOneArr[i] < numTwoArr[i]) {
        return '<'
      }
    }
  }

  return '='
}


const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {
  let firstNumString = prompt('Enter first number.')
  let secondNumString = prompt('Enter second number')

  let sign = comparisonBigNumbers(firstNumString, secondNumString)

  alert(firstNumString + ` ${sign} ` + secondNumString)
})
