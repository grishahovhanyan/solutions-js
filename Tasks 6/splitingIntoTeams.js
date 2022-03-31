function splitIntoTeams(numbersStr) {
  let numbersArr = numbersStr.split(' ').map(num => +num).sort((a, b) => b - a)
  let teamsArrays = [[], []]
  let temp = 0 //if(temp % 2 == 0 ) -> first team, else second

  for (let i = 0; i < numbersArr.length; i++) {
    if (temp % 2 === 0) {
      teamsArrays[0].push(numbersArr[i])
    } else {
      teamsArrays[1].push(numbersArr[i])
    }

    temp++
  }

  return teamsArrays[0].join(' ') + '\n' + teamsArrays[1].join(' ')
}

const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {
  let numbersInString = prompt('Enter numbers (n1 n2 n3 ...)')

  alert(numbersInString + '\n--------- \n' + splitIntoTeams(numbersInString))
})
