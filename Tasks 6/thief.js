// Another solution 
// You can also sort items and then take items from index 0 to (freeSpaceCount - 1) and calculate sum

function thiefCanGet(itemsStr, freeSpaceCount/*InTheBag*/) {
  let itemsValue = itemsStr.split(' ').map(x => +x)
  let k = itemsValue.length
  let wasAdded = 0
  let result = 0

  for (let i = 0; i < k; i++) {
    let currentMaxVal = Math.max(...itemsValue)
    let indexCurMaxVal = itemsValue.indexOf(currentMaxVal)

    // swap 
    let temp = itemsValue[indexCurMaxVal]
    itemsValue[indexCurMaxVal] = itemsValue[itemsValue.length - 1]
    itemsValue[itemsValue.length - 1] = temp
    //

    itemsValue = itemsValue.splice(0, itemsValue.length - 1)

    if (freeSpaceCount !== wasAdded) {
      result += currentMaxVal
      wasAdded++
    } else {
      return result
    }
  }

  return result
}


const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
  let itemsValueInString = prompt('Input items value (v1 v2 v3 ...).')
  let freeSpaceITB = +prompt('How much free space is there in the bag?')

  alert('Thief can get items in max value: ' + thiefCanGet(itemsValueInString, freeSpaceITB))
})
