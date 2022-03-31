function numberGuesser(from, to) {
  alert(`Remember one number (${from} to ${to}).`)
  let yourNumber = Math.round((from + to) / 2)
  let tempNumber = Math.round(yourNumber / 2)
  let userInput

  for (let i = 1; i <= 10; i++) {
    alert(`My attempt number ${i}: ${yourNumber}`)
    userInput = +prompt('Is what your number.')
    if (userInput === 0) {
      alert(`I did it in ${i} tries! Your number is ${yourNumber}.`)
      return
    } else if (userInput === 1) {
      yourNumber += tempNumber
    } else if (userInput === -1) {
      yourNumber -= tempNumber
    }

    tempNumber = Math.round(tempNumber / 2)
  }

  alert(`I didn't guess in 10 tries.So you cheated !!!`)
  return
}


const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  let interval = prompt('Enter in which interval you remembered the number.[from ... to]')
  let from = +interval.split(' ')[0]
  let to = +interval.split(' ')[1]

  numberGuesser(from, to)
})
