// Задание 1:
function filter(input, than) {

    // напишите здесь код, который возвращает новый массив
    // в котором содержатся те элементы input, которые больше than

    const result = [];

    input.forEach(elem => elem > than ? result.push(elem) : null);
    return result;
}

var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);

console.log(result); // [100, 65];

result = filter(array, 20);
console.log(result); // [100, 34, 65];

console.log('----------------------------------------');
// Задание 2:

// Возьмите код предыдущего задания
// Модифицируйте код функции filter так, чтобы функция выбрасывала исключения при следующих условиях:
// В input передан пустой массив
// Хотя бы один из элементов input не является числом
// Хотя бы один из элементов input является отрицательным числом


function filter2(input, than) {
    const result = [];

    if (input.length === 0) {
        throw new Error("Пустой массив");
    } else if (input.some(elem => elem < 0)) {
        throw new Error("Хотя бы один из элементов input является отрицательным числом");
    } else if (!input.every(elem => Number.isFinite(elem))) {
        throw new Error("Хотя бы один из элементов input не является числом");
    }

    input.forEach(elem => elem > than ? result.push(elem) : null);
    return result;
}

// var array = [1, 2, 4, 6, 61];
var array = [1, 2, 4, 6, 'fff', 61];

try {

    var result = filter2(array, 60);
    console.log(result); 
}
catch (e) {
    console.log(e.message);

}
