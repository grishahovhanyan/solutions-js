function arithmeticProg(a1, a2, n) {
  let result = a2
  let prog = a2 - a1

  for (let i = 3; i <= n; ++i) {
    result += prog
  }

  switch (n) {
    case 1: return `a[${n}] = ${a1}`
      break
    case 2: return `a[${n}] = ${a2}`
      break
    default: return `a[${n}] = ${result}`
  }
}


const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
  const a1 = Math.floor(+prompt('Enter first member.(number)'));
  const a2 = Math.floor(+prompt('Enter second member.(number)'));
  const n = Math.floor(+prompt('Enter "n".(number)'));

  alert(arithmeticProg(a1, a2, n))
})
