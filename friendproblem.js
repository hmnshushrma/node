var solution = function (M) {
  M = JSON.parse(M)
  if (M.length === 0) {
    return 0
  }

  const arrLength = M.length
  let resultArr = []
  let nestResultArr = []

  for (let i = 0; i < arrLength; i++) {
    for (let = k = 0; k < arrLength; k++) {
      if (M[i][k] === 1) {
        nestResultArr.push(k)
        M[i][k] = M[k][i] = '#'
      }
    }
    if (!isSameSubset(resultArr, nestResultArr)) {
      resultArr.push(nestResultArr)
    }
    nestResultArr = []
  }
  return resultArr.join('|')
}

function findSameSubset (nestedArr, arr) {
  const newArray = Array.prototype.concat.apply([], nestedArr)
  if (nestedArr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (newArray.indexOf(arr[i]) > -1) {
        return true
      }
    }
  } else {
    return false
  }
}

solution('[[1,1,0],[1,1,0],[0,0,1]]')
