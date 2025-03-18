// Вернуть true, если в строке все символы уникальные, регистр должен учитываться
function isUnique(string) {
    return new Set(string).size === string.length;
};

console.log(isUnique('abcdefg')); //true
console.log(isUnique('adcdefg')); //false
console.log(isUnique('')); //true
console.log(isUnique('1234')); //true
console.log(isUnique('ABCabc')); //true