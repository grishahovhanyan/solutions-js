function robotMove(cordX, cordY, commands) {
  let commandsArr = commands.split(' ')

  commandsArr.forEach((command) => {
    switch (command) {
      case 'up': cordY++
        break
      case 'down': cordY--
        break
      case 'left': cordX--
        break
      case 'right': cordX++
        break
    }
  })

  return '' + cordX + ' ' + cordY
}


const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {
  let coordinatesXY = prompt('Enter coordinates X0 and Y0.')
  let coordinateX = +coordinatesXY.split(' ')[0]
  let coordinateY = +coordinatesXY.split(' ')[1]
  let commands = prompt('Enter commands (com1 com2 com3 ...).')

  alert('Coordinates after move -> ' + robotMove(coordinateX, coordinateY, commands))
})
