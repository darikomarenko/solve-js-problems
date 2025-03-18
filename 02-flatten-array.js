// Получить массив с вложенными массивами и вернуть плосикй массив
// Используем тут рекурсию
function flatten(array) {
    let flattenedArray = [];

    for (let i = 0; i < array.length; i ++) {
        if (Array.isArray(array[i])) {
            const flat = flatten(array[i]);
            for (let h = 0; h < flat.length; h ++) {
                flattenedArray.push(flat[h]);
            }
        }
        else {
            flattenedArray.push(array[i]);
        }
    }
    return flattenedArray;
}

console.log(flatten([[1], [[2,3]], [[[4]]]]));