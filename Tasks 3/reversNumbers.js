function reversNumber(num) {
  // 1.
  // let arrDig = num.toString().split('')
  // return +arrDig.reverse().join('')

  // 2.
  let reverseNum = 0
  while (num) {
    let k = num % 10
    reverseNum = reverseNum * 10 + k
    num = Math.floor(num / 10)
  }

  return reverseNum
}

function allPalindromes(from, to) {
  let resault = []

  for (let i = from; i <= to; ++i) {
    if (i === reversNumber(i))
      resault.push(i)
  }

  return resault.join(' ')
}


const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {
  let from = +prompt('Search from ...')
  let to = +prompt('to ...')

  alert(allPalindromes(from, to))
})
