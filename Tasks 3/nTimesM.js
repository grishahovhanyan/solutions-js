function nTimesM(n, m) {
  let resultStr = `${n}*${m}=`
  let resultNum = n * m

  for (let i = 1; i < m; ++i) {
    resultStr += n + '+'
  }
  resultStr += n + '=' + resultNum

  return resultStr
}

const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {

  let n = +prompt('Enter N.')
  let m = +prompt('Enter M.')

  alert(nTimesM(n, m))
})
