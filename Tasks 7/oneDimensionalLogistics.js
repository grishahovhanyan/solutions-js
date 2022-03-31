function howManyObjectsInTheGivenIntervals(coordOfObjs, intervalsArr) {
  let countOfObjectsInEachInterval = Array(intervalsArr.length).fill(0)

  for (let i = 0; i < coordOfObjs.length; i++) {
    for (let j = 0; j < intervalsArr.length; j++) {
      if (coordOfObjs[i] >= intervalsArr[j][0]/*A*/ && coordOfObjs[i] <= intervalsArr[j][1]/*B*/) {
        countOfObjectsInEachInterval[j]++
      }
    }
  }

  for (let i = 0; i < intervalsArr.length; i++) {
    console.log(intervalsArr[i].join(' ') + ' -> ' + countOfObjectsInEachInterval[i])
  }

  return 0
}


const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {
  let coordinatesOfObjects = prompt('Input coordinates of the objects in Iceland (o1 o2 o3 ...).')
  let coordinatesOfObjectsArr = coordinatesOfObjects.split(' ').map(num => +num)

  let numberOfRequests = +prompt('Input the number of requests.')
  let intervals = []
  for (let i = 0; i < numberOfRequests; i++) {
    intervals.push([])
    let startA = +prompt(`Input start(A${i + 1})`)
    let endB = +prompt(`Input end(B${i + 1}).`)

    intervals[i].push(startA, endB)
  }

  howManyObjectsInTheGivenIntervals(coordinatesOfObjectsArr, intervals)
})
