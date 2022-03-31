function reverseArray(arr) {
  let revArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i])
  }

  return revArr
}

function restorePalindrome(str) {
  let textInArray = str.split('').sort()
  let countOfMembersInObject = {}

  for (let i = 0; i < textInArray.length; i++) {
    if (countOfMembersInObject[textInArray[i]] === undefined) {
      countOfMembersInObject[textInArray[i]] = 1
    } else {
      countOfMembersInObject[textInArray[i]]++
    }
  }

  let countOfOdd = 0
  let oddMember = ''
  let leftHalfOfPalindrome = []

  for (let key in countOfMembersInObject) {
    if (countOfOdd > 1) {
      return 'Impossible'
    }

    if (countOfMembersInObject[key] % 2 === 1) {
      countOfMembersInObject[key]--
      countOfOdd++
      oddMember = key
    }

    while (countOfMembersInObject[key] !== 0) {
      leftHalfOfPalindrome.push(key)
      countOfMembersInObject[key] -= 2
    }
  }

  let rightHalfOfPalindrome = reverseArray([...leftHalfOfPalindrome, oddMember])
  let palindrome = [...leftHalfOfPalindrome, ...rightHalfOfPalindrome].join('')

  return palindrome
}

const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {
  let text = prompt('Enter string to restore palindrome:')

  alert(restorePalindrome(text))
})
