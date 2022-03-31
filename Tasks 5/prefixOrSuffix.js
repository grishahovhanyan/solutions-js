function prefixOrSuffix(mainStr, strToBeChecked) {
  let tempForPrefix = true
  let tempForSuffix = true
  let lastIndexToCheck = mainStr.length - strToBeChecked.length //for suffix

  for (let i = 0; i < strToBeChecked.length; i++) {
    //is Prefix??
    if (mainStr[i] !== strToBeChecked[i] && tempForPrefix === true) {
      tempForPrefix = false
    }

    //is Suffix??
    if (mainStr[lastIndexToCheck + i] !== strToBeChecked[i] && tempForSuffix === true) {
      tempForSuffix = false
    }
  }

  if (tempForPrefix === true && tempForSuffix === true) {
    return 'Both'
  } else if (tempForPrefix === true) {
    return 'Prefix'
  } else if (tempForSuffix === true) {
    return 'Suffix'
  } else {
    return 'Neither'
  }
}


const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
  let mainString = prompt('Enter first string.')
  let toCheckString = prompt('Enter second string to check if it is contained in the first one.')

  alert(mainString + ' ' + toCheckString + '\n' + prefixOrSuffix(mainString, toCheckString))
})
