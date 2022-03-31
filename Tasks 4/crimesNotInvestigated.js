function crimesNotInvestigated(eventsStr) {
  let eventsArr = eventsStr.split(' ').map(event => +event)
  let freeCops = 0
  let crimes = 0

  for (let i = 0; i < eventsArr.length; i++) {
    if (eventsArr[i] === -1) {//crim
      //---
      if (freeCops === 0) {//do we have free police? -> NO
        crimes++
      } else {
        freeCops--
      }
    } //---
    else { //... or add cops
      freeCops += eventsArr[i]
    }
  }

  return crimes
}

const button8 = document.getElementById('button8')
button8.addEventListener('click', () => {
  let eventsString = prompt('Enter events(-1 -> crim: (1 - 10) count of cops)')
  console.log(eventsString + '\n Count of crimes not investigated -> ' + crimesNotInvestigated(eventsString))
})
