const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

// 0:0 0:1 0:2 --> 0:2 1:2 2:2
// 1:0 1:1 1:2 --> 0:1 1:1 2:1
// 2:0 2:1 2:2 --> 0:0 1:0 2:0

function rotate(source) {
    const rotated = source[0].map(_ => []);

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].length; j++) {
            const value = source[i][j];
            rotated[j][(source.length) -1 - i]  = value;
        }
    }
    return rotated;
}

function rotate180(source) {
    return rotate(rotate(source))
}

function rotate270(source) {
    return rotate(rotate180(source))
}

function print(array) {
    array.forEach(element => {
        console.log(element)
    });
}

console.log('-----------')
print(rotate(matrix))
console.log('-----------')
print(rotate180(matrix))
console.log('-----------')
print(rotate270(matrix))
console.log('-----------')