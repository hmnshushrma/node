var solution = function (M) {
  const visited = new Array(M.length).fill(false)
  let cnt = 0
  const socialCircle = []
  for (let i = 0; i < M.length; i++) {
    if (visited[i] == false) {
      visited[i] = true
      socialCircle[cnt] = ''
      socialCircle[cnt] = helper(M, visited, i, socialCircle[cnt])
      cnt++
    }
  }
  return socialCircle.join('|')
}

var helper = function (mat, visited, i, socialCircle) {
  socialCircle =
    socialCircle +
    (socialCircle.indexOf(i) == -1 ? (socialCircle == '' ? '' : ',') + i : '')
  for (let j = 0; j < mat.length; j++) {
    if (mat[i][j] == 1 && visited[j] == false) {
      visited[j] = true
      socialCircle = helper(mat, visited, j, socialCircle)
    }
  }
  return socialCircle
}

console.log(solution('[ [1,1,0], [1,1,1], [0,1,1] ]'))
