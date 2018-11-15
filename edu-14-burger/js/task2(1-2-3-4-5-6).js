// Задание 1:
// 1 При помощи DOM API создайте DOM-элемент с тегом div
const createDiv = document.createElement('div');

// 2 Добавьте созданный элемент в DOM-дерево
const getBody = document.querySelector('body');
getBody.appendChild(createDiv);

// 3 При помощи DOM API, поместите в элемент текст: 'Этот элемент создан при помощи DOM API'
createDiv.textContent = 'Этот элемент создан при помощи DOM API';

// Задание 2:
// 1 При помощи DOM API создайте элемент с тегом div
const createDiv2 = document.createElement('div');
getBody.appendChild(createDiv2);

// 2 Задайте созданному элементу класс 'inner'
createDiv2.classList.add('inner');

// 3 При помощи DOM API, поместите в элемент текст: 'Этот элемент тоже создан при помощи DOM API'
createDiv2.textContent = 'Этот элемент тоже создан при помощи DOM API';

// 4 Поместите созданный элемент внутрь элемента, который был создан в предыдущем задании
createDiv.appendChild(createDiv2);

// Задание 3:
// Возьмите код из предыдущего задания и при помощи DOM API задайте созданному элементу CSS-стиль 'color: red'
createDiv.style.color = 'red';

// Заданий 4:
// Возьмите код первого задания
// 2 Добавьте обработчик события click на созданный элемент
createDiv.addEventListener('click', function () {
    // 3 При клике на элемент, в консоль должен выводиться текст: 'Этот текст говорит о том, что я всё сделал правильно'
    console.log('Этот текст говорит о том, что я всё сделал правильно');

});

// Задание 5:
//1 При помощи DOM API создайте элемент с тегом a
const createA = document.createElement('a');

// 2 Задайте созданному элементу атрибут href и запишите в этот атрибут значение  'https://loftschool.com'
createA.setAttribute('href', 'https://loftschool.com');
createA.textContent = 'ссылка';

//    3 Добавьте созданный элемент в DOM-дерево
getBody.appendChild(createA);

// 4 Добавьте обработчик события click на созданный элемент
createA.addEventListener('click', function (event) {
    //5  Напишите код обработчика таким образом, чтобы при клике на созданный элемент в консоли выводилась 
    // надпись 'Я кликнул на ссылку HREF'. 
    // Вместо HREF необходимо подставить значение атрибута href. Но перехода по ссылке быть не должно.
    event.preventDefault();
    console.log('Я кликнул на ссылку HREF');
});

// Задание 6:
// 1 При помощи DOM API создайте input и button
const createInput = document.createElement('input');
const createButton = document.createElement('button');

createButton.textContent = 'кнопка';

// 2 Поместите созданные элементы на страницу
getBody.appendChild(createInput);
getBody.appendChild(createButton);

// 3 При клике на кнопку необходимо выводить в консоль значение из текстового поля
const getInput = document.querySelector('input');

createButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(getInput.value);
});