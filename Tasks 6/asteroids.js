function sortAsteroidsByDanger(asterCordArr) {
  let distance

  for (let i = 0; i < asterCordArr.length; i++) { //  x^2 + y^2 + z^2 
    distance = asterCordArr[i][0] * asterCordArr[i][0]
      + asterCordArr[i][1] * asterCordArr[i][1]
      + asterCordArr[i][2] * asterCordArr[i][2]

    asterCordArr[i].push(distance)
  }

  let sortedByDanger = asterCordArr.sort((a, b) => a[3] - b[3]).map(arr => arr.splice(0, 3))

  return sortedByDanger
}


const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  let cordArray = []

  do {
    asterCord = prompt('Enter the coordinates of the asteroid: x y z')
    if (!asterCord) {
      break
    }

    cordArray.push(asterCord.split(' ').map(x => +x))
  } while (asterCord)

  console.log(sortAsteroidsByDanger(cordArray))
})
