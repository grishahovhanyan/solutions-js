// Divisibility(Euclidean algorithm to find divider(with recursion))

function dividerOfTwoNumbers(num1, num2) {// (gcd) Greatest Common Divisor
  if (num1 === 0 || num2 === 0) {
    return num1 + num2
  }

  if (num1 > num2) {
    num1 = num1 % num2
  } else {
    num2 = num2 % num1
  }

  return dividerOfTwoNumbers(num1, num2)
}

function multipleOfTwoNumbers(num1, num2) {
  let divider = dividerOfTwoNumbers(num1, num2)

  let multiple = (num1 * num2) / divider// multiple = num 1 * num2 / divider
  return multiple
}

function totalMultipleOfAllMembers(sequence) {// (lcm) Least Common Multiple
  for (let i = 0; i < sequence.length - 1; i++) {
    let multipleOfTwoNum = multipleOfTwoNumbers(sequence[i], sequence[i + 1])
    sequence[i + 1] = multipleOfTwoNum
  } // multiple of all numbers will be in last index

  return sequence[sequence.length - 1]
}

//seq -> sequence
function numbersFromFirstSeqDivisibleByNumbersSecondSeq(seqFirst, seqSecond) {
  let countOfDivisors = 0
  let divisors = []
  let multipleOfSecondSeq = totalMultipleOfAllMembers(seqSecond)

  for (let i = 0; i < seqFirst.length; i++) {
    if (seqFirst[i] % multipleOfSecondSeq === 0) {
      countOfDivisors++
      divisors.push(seqFirst[i])
    }
  }

  return [countOfDivisors, divisors]
}


const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {
  let sequenceFirst = prompt('Enter first sequence (a1 a2 a3 ...)(signed numbers).')
  sequenceFirst = sequenceFirst.split(' ').map(num => +num)

  let sequenceSecond = prompt('Enter second sequence (b1 b2 b3 ...)(unsigned numbers).')
  sequenceSecond = sequenceSecond.split(' ').map(num => +num)

  let divisorsAndCount = numbersFromFirstSeqDivisibleByNumbersSecondSeq(sequenceFirst, sequenceSecond) //will return array
  let [count, divisors] = divisorsAndCount
  alert(count + '\n' + divisors)
})
