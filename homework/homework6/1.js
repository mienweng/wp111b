function vadd(a, b) {
    if (a.length !== b.length) {
        console.log("向量的維度不相等");
        return;
    }

    const result = [];

    for (let i = 0; i < a.length; i++) {
        result.push(a[i] + b[i]);
    }

    return result;
}
