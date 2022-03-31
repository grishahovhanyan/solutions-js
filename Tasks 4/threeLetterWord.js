function normalizeWord(str) {
  str = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();;

  return str
}

const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {
  let word = prompt('Enter word.')

  alert(normalizeWord(word))
})
