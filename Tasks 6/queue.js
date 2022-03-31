function findOutTheQueue(queueStr) {
  let queueMAgesArr = queueStr.split(' ').map(x => +x)
  let sortQueue = [...queueMAgesArr].sort((a, b) => a - b)
  let resultArr = []

  for (let i = 0; i < sortQueue.length; i++) {
    for (let j = 0; j < queueMAgesArr.length; j++) {
      if (sortQueue[i] === queueMAgesArr[j]) {
        if (!resultArr.includes(j + 1)) {
          resultArr.push(j + 1)
          break
        }
      }
    }
  }

  return resultArr.join(' ')
}


const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {
  let queueMemberAges = prompt('Input the queue member ages (m1 m2 m3 ...)')

  alert(queueMemberAges + '\n' + findOutTheQueue(queueMemberAges))
})
