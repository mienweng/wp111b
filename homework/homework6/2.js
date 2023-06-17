function vdot(a, b) {
    if (a.length !== b.length) {
        console.log("向量的維度不相等");
        return;
    }

    let dotProduct = 0;
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
    }

    return dotProduct;
}
