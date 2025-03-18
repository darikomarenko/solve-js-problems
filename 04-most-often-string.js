// Напишите ф-ию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве.
// Если таких строк несколько, надо вернуть первую, идя слева направо
function highestFrequency(array) {
    const map = {};
    let maxFrequency = 0;
    let  maxFreqStr = array[0];
    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        if (map[current]) {
            map[current]++
        } else {
            map[current] = 1
        }
        if (map[current] > maxFrequency) {
            maxFrequency = map[current]
            maxFreqStr = current;
        }
    }
    return maxFreqStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'e'])); // --> 'c'
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // --> 'abc'
console.log(highestFrequency(['abc', 'def'])) // --> 'abc'
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) // --> 'ghi'