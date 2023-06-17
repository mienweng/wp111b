function mmul(a, b) {
  if (a[0].length !== b.length) {
    console.log("矩陣的尺寸不符合相乘規則");
    return;
  }

  const result = [];
  for (let i = 0; i < a.length; i++) {
    const row = [];
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < b.length; k++) {
        sum += a[i][k] * b[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}