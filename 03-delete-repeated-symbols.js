//  Удалите повторящиеся значения в строке

// решение 1
function removeDupes1(str) {
    const res = [];
    const map = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (!map[char]) {
                map[char] = true;
                res.push(char);
            }
        }
    return res.join('');
}

// решение 2
function removeDupes2(str) {
    return Array.from(new Set(str)).join('');
}

console.log(removeDupes1('abcdfa'));
console.log(removeDupes2('abcdfaкуку'));