// Является ли массив подмножеством другого массива (есть ли второй массив в первом)
function arraySubset(source, subset) {
    if (source.length < subset.length) {
        return false;
    }
    const sourceCopy = source.slice();

    for (let i = 0; i < subset.length; i++) {
        const index = source.indexOf(subset[i])
        if (index === -1) {
            return false;
        }
        sourceCopy.splice(index, 1); 
        // лучше splice, чем delete, потому что delete не удаляет элемент из массива, а просто делает значение undefined на этом месте
    }
    return true;

}

console.log(arraySubset([2,1,3], [1,2,3])) //true
console.log(arraySubset([2,1,1,3],[1,2,3] )) //true
console.log(arraySubset([1,1,1,3], [1,3,3])) //false
console.log(arraySubset([1,2], [1,2,3])) //false