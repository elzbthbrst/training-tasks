function binaryPyramid(m, n) {
    let res = 0
    for (let i = m; i <= n; i++) {
        res += Number(i.toString(2))
    }
    return res.toString(2)
}


console.log(binaryPyramid(1, 4));
console.log(1111010);