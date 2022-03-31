function payForTheNumber(numberOfCar) {
  let money = 0

  while (numberOfCar) {
    money = numberOfCar % 10 === 8 ? money + 1000 : money
    numberOfCar = Math.floor(numberOfCar / 10)
  }

  return money
}


const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
  const numberOfCar = +prompt('Enter number of car.')

  alert(`You must pay ${payForTheNumber(numberOfCar)} yuan for number .`)
})
