function madd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
        console.log("矩陣的尺寸不相等");
        return;
    }

    const result = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < a[0].length; j++) {
            row.push(a[i][j] + b[i][j]);
        }
        result.push(row);
    }

    return result;
}
