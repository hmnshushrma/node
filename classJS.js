findPalindromeString = string => {
  let getStringLength = 0
  let result = ''

  for (let i = 0; i < string.length; i++) {
    var subString = string.substr(i, string.length)

    for (var j = subString.length; j >= 0; j--) {
      var subofstring = subString.substr(0, j)
      if (subofstring.length <= 1) continue
      if (isPalindrome(subofstring)) {
        if (subofstring.length > getStringLength) {
          getStringLength = subofstring.length
          result = subofstring
        }
      }
    }
  }
  return isPrime(result.length) ? 'YES' : 'NO'
}

isPalindrome = string => {
  var rev = string
    .split('')
    .reverse()
    .join('')
  return string == rev
}

isPrime = input => {
  let prime = true
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
      prime = false
      break
    }
  }
  return prime && input > 1
}

console.log(findPalindromeString('12222233334445553334333999999 sharms'))
console.log(findPalindromeString('Himanshu'))

window.location.pathname


if(window.location.pathname === '/my-account/'){
  document.getElementsByTagName('button')[1].addEventListener('click', () => {
    setTimeout(()=>{
        window.location.replace('https://www.urbanshore.in/emailer/')
    },3000)
  })
}
