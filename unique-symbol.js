// Вернуть true, если в строке все символы уникальные
function isUnique(string) {
    return new Set(string) === string;
};