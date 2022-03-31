function colorOfBoard(str) {
  /* Solution 1 */
  // let letter = str[0]
  // let number = +str[1]
  // let letterN
  // switch (letter) {
  //   case 'a': letterN = 1
  //     break
  //   case 'b': letterN = 2
  //     break
  //   case 'c': letterN = 3
  //     break
  //   case 'd': letterN = 4
  //     break
  //   case 'e': letterN = 5
  //     break
  //   case 'f': letterN = 6
  //     break
  //   case 'g': letterN = 7
  //     break
  //   case 'h': letterN = 8
  // };

  // if (number % 2 === 1 && letterN % 2 === 1 || number % 2 === 0 && letterN % 2 === 0) {
  //   return 'black'
  // } else {
  //   return 'white'
  // }

  /* Solution 2 (letters to ASCII)*/
  let letterN = str[0].charCodeAt() - 96
  let number = +str[1]

  if (number % 2 === 1 && letterN % 2 === 1 || number % 2 === 0 && letterN % 2 === 0) {
    return 'black'
  } else {
    return 'white'
  }

}

const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
  let cord = prompt('Enter coordinates.')

  alert(colorOfBoard(cord))
})
