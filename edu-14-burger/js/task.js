
// Типы данных и переменные================================
// 1
var name = 'Антон';
// 2
console.log(name);
// 3
name = 'Наташа';
// 4
console.log(name);
appennd
// Условный оператор if===================================
// 1
if (10 > 9) {
    // 2
    console.log('ok');
}
// 3
if (8 > 9) {
    console.log('ok');
} else {
    // 4
    console.log('not ok');
}
// Циклический оператор for==============================
// 1
for (let i = 0; i < 10; i += 1) {
    // 2
    // 3
    console.log(i);
}
// Функции==============================================
// 1
const sum = (p1, p2, p3) => {
    // 2
    const result = p1 + p2 + p3;
    // 3
    return result;
};
// 4
sum(10, 20, 30);
// 5
const out = sum(10, 20, 30);
console.log(out);
// 6
const out2 = sum(1, 7, 3);
console.log(out2);

// Массивы и объекты===============================
// Задание 1
// 1
const arr = ['привет', 'loftschool'];
// 2
arr.push('я изучаю');
arr.push('JavaScript');
// 3
console.log(arr.length);
// 4
for (let i = 0; i < arr.length; i += 1) {
    console.log(i);
}
// Задание 2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 1
const arr = ['1', '21', '32', '43', '78', '105', '125', '178', '183', '190'];
// 2
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 100) {
        console.log(arr[i]);
    }
}

// Задание 3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 1
const obj = {};
// 3
obj.name = 'Jonn';
// 4
obj.lastName = 'Black';
// 5
obj.age = 40;
// 6
console.log(`${obj.name} -> ${obj.lastName} -> ${obj.age}`);
// 7
obj.sity = 'Voronezh';
console.log(obj.sity);

// Задание 4  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 1
const hello = human => {
    return `Привет, меня зовут ${human.name} ${human.lastName} и мне ${human.age} лет!`;
};
// 6
// 7
const out = hello(obj);
console.log(out);
