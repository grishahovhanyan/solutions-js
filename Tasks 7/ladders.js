let countOfLadders = 0

function numberOfLadders(countOfCubs, firstTownHeight = 0) {
  countOfLadders++
  for (let i = firstTownHeight + 1; i < countOfCubs / 2; i++) {
    numberOfLadders(countOfCubs - i, i)
  }
  return countOfLadders
}


const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {
  let cubCount = +prompt('Enter Cubs count.')

  alert(numberOfLadders(cubCount))
})
