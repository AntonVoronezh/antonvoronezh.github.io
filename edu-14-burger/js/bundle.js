// начало формы
const getForm = document.querySelector(".form-order");
const getButton = document.querySelector(".btn--submit");
const getError = document.querySelector(".error");
var serverResponse;

const validateField = argField => {
    return argField.checkValidity();
    // if(!argField.checkValidity()) {
    //     argField.nextElementSibling.innerHTML = argField.validationMessage;
    //     return false;
    // } else {
    //     argField.nextElementSibling.innerHTML = "";
    //     return true;
    // }
};

const validateForm = argForm => {
    let valid = true;

    for (let i = 0; i < argForm.elements.length; i += 1) {
        if (!validateField(argForm.elements[i])) {
            valid = false;
        }
    }
    return valid;
};

getButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (validateForm(getForm)) {
        const formData = new FormData();
            formData.append("name", getForm.elements.name.value);
            formData.append("phone", getForm.elements.phone.value);
            formData.append("comment", getForm.elements.text.value);
            formData.append("to", "aaaaaa@aaaaaaa.aa");

        const json = new XMLHttpRequest();

        json.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        json.send(formData);

        json.addEventListener('load', () => {
            if (json.response) {
                const out = JSON.parse(json.response);
                console.log(out.message);
                serverResponse = out.message;
                const successOverlay = createOverlay(serverResponse);
                document.body.appendChild(successOverlay);
            }
        });
    }
});
// конец формы
// начало карты
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [51.680427, 39.176769],
        zoom: 14
    }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-1, -1]
            }),

        myPlacemarkWithContent = new ymaps.Placemark([51.689497, 39.176869], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: './img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});

document.addEventListener("DOMContentLoaded", ready);
// конец карты
// начало кода аккордеон (горизонтальный)
const getMunuSelectors = document.querySelectorAll(".menu__item");
for (let i = 0; i < getMunuSelectors.length; i += 1) {
    getMunuSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < getMunuSelectors.length; j += 1) {
            if (j !== i)
            getMunuSelectors[j].classList.remove("menu__item--active");
        }
        getMunuSelectors[i].classList.toggle("menu__item--active");
    });
}
// конец кода аккордеон (горизонтальный)
// начало кода модальное окно отзывов
const getCommentsSelectors = document.querySelectorAll(".comment__link");
const successOverlay = createOverlay(" <h3 class=\"comment__title--overlay\">Стивен Спилберг</h3>" + 
"С другой стороны дальнейшее развитие различных форм" + 
"деятельности напрямую зависит от системы масштабного изменения ряда параметров. Таким образом," +  
"курс на социально-ориентированный национальный проект способствует повышению актуальности" + 
"направлений прогрессивного развития!");

for (let i = 0; i < getCommentsSelectors.length; i += 1) {
    getCommentsSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        document.body.appendChild(successOverlay);
    });
}

function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
  
    const template = document.querySelector("#overlayTemplate");
    overlayElement.innerHTML = template.innerHTML;
  
    const closeElement = overlayElement.querySelector(".close");
    closeElement.addEventListener("click", function(event) {
        event.preventDefault();
      document.body.removeChild(overlayElement);
    });
  
    const contentElement = overlayElement.querySelector(".content");
    contentElement.innerHTML = content;
  
    return overlayElement;
  }
  
// конец кода модальное окно отзывов
// // начало кода меню (скрытое)
// var closeLink = document.querySelector(".close__link");
// // console.log(closeLink);

// var mobileMenu = document.querySelector(".mobile-menu");
// // console.log(mobileMenu);

// var openLink = document.querySelector(".menu-tablets");
// // console.log(openLink);

// var closeLinkFromNav = document.querySelectorAll(".nav__item");
// // console.log(closeLinkFromNav);

// openLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     mobileMenu.classList.add("mobile-menu-open");
// });

// closeLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     mobileMenu.classList.remove("mobile-menu-open");
// });

// for (let i = 0; i < closeLinkFromNav.length; i += 1) {
//     closeLinkFromNav[i].addEventListener("click", function () {
//         mobileMenu.classList.remove("mobile-menu-open");
//     });
// }
// // конец кода меню (скрытое)

console.log('mmp');
// начало кода слайдер
const left = document.querySelector(".slider-layout__left");
const right = document.querySelector(".slider-layout__right");
const items = document.querySelector(".slider__wrap");

// ширина изображения
var width = 100;
// текущий сдвиг влево
var count = 0;
// всего слайдов
const item = document.querySelectorAll(".slider__item");

right.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log(item.length, item.length - 2);
    if (count <= item.length - 2) {
        count += 1;
        // console.log(count + '=>');
        position = width * count;
        items.style.marginLeft = '-' + position + '%';
        // console.log(items.style.marginLeft);
    }
});

left.addEventListener("click", function (event) {
    event.preventDefault();
    if (count !== 0) {
        count -= 1;
        // console.log(count + '<=');
        position = width * count;
        items.style.marginLeft = '-' + position + '%';
    }
});
// конец кода слайдер
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

// console.log(result); // [100, 65];

result = filter(array, 20);
// console.log(result); // [100, 34, 65];

// console.log('----------------------------------------');
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
    // console.log(result); 
}
catch (e) {
    // console.log(e.message);

}

// for (let i = 1; i < 6; i += 1) {
//     let out = [];
//     for (let j = 0; j < i; j += 1) {
//         out.push(i);
//     }
// console.log(out.join(''));
// }



// arr.filter(elem => {
//     const result = (arg) => console.log(arg);
//     // return elem === 3 ? result('есть') : null;
// });

// const arr = [0, 1, 2, 6, 4];
// const out = arr.some(elem => elem === 3) ? "есть" : "нет";
// // console.log(out);

// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === 3) {
//          console.log('есть');
//          return;  
//     }
// console.log('нет');
// return;
// }


// начало кода аккордеон (вертикальный)
const getTeamSelectors = document.querySelectorAll(".accordion-team__wrap");
for (let i = 0; i < getTeamSelectors.length; i += 1) {
    getTeamSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < getTeamSelectors.length; j += 1) {
            if (j !== i)
            
                getTeamSelectors[j].classList.remove("accordion-team__wrap--active");
        }
        getTeamSelectors[i].classList.toggle("accordion-team__wrap--active");
    });
}
// конец кода аккордеон (вертикальный)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJtYXAuanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJuZXcuanMiLCJzbGlkZXIuanMiLCJ0YXNrLmpzIiwidGVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQvdCw0YfQsNC70L4g0YTQvtGA0LzRi1xyXG5jb25zdCBnZXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLW9yZGVyXCIpO1xyXG5jb25zdCBnZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tc3VibWl0XCIpO1xyXG5jb25zdCBnZXRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XHJcbnZhciBzZXJ2ZXJSZXNwb25zZTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlRmllbGQgPSBhcmdGaWVsZCA9PiB7XHJcbiAgICByZXR1cm4gYXJnRmllbGQuY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgLy8gaWYoIWFyZ0ZpZWxkLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgLy8gICAgIGFyZ0ZpZWxkLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBhcmdGaWVsZC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGFyZ0ZpZWxkLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8gfVxyXG59O1xyXG5cclxuY29uc3QgdmFsaWRhdGVGb3JtID0gYXJnRm9ybSA9PiB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnRm9ybS5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVGaWVsZChhcmdGb3JtLmVsZW1lbnRzW2ldKSkge1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufTtcclxuXHJcbmdldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKGdldEZvcm0pKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibmFtZVwiLCBnZXRGb3JtLmVsZW1lbnRzLm5hbWUudmFsdWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwaG9uZVwiLCBnZXRGb3JtLmVsZW1lbnRzLnBob25lLnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY29tbWVudFwiLCBnZXRGb3JtLmVsZW1lbnRzLnRleHQudmFsdWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0b1wiLCBcImFhYWFhYUBhYWFhYWFhLmFhXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIGpzb24ub3BlbignUE9TVCcsICdodHRwczovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vc2VuZG1haWwnKTtcclxuICAgICAgICBqc29uLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuICAgICAgICBqc29uLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChqc29uLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSBKU09OLnBhcnNlKGpzb24ucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3V0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgc2VydmVyUmVzcG9uc2UgPSBvdXQubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NPdmVybGF5ID0gY3JlYXRlT3ZlcmxheShzZXJ2ZXJSZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN1Y2Nlc3NPdmVybGF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuLy8g0LrQvtC90LXRhiDRhNC+0YDQvNGLIiwiLy8g0L3QsNGH0LDQu9C+INC60LDRgNGC0YtcclxueW1hcHMucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgICAgIGNlbnRlcjogWzUxLjY4MDQyNywgMzkuMTc2NzY5XSxcclxuICAgICAgICB6b29tOiAxNFxyXG4gICAgfSwge1xyXG4gICAgICAgICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICAvLyDQodC+0LfQtNCw0ZHQvCDQvNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXHJcbiAgICAgICAgTXlJY29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhcclxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsobXlNYXAuZ2V0Q2VudGVyKCksIHtcclxuICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQodC+0LHRgdGC0LLQtdC90L3Ri9C5INC30L3QsNGH0L7QuiDQvNC10YLQutC4JyxcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQrdGC0L4g0LrRgNCw0YHQuNCy0LDRjyDQvNC10YLQutCwJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvaWNvbnMvbWFwLW1hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTEsIC0xXVxyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbXlQbGFjZW1hcmtXaXRoQ29udGVudCA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUxLjY4OTQ5NywgMzkuMTc2ODY5XSwge1xyXG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QsdGB0YLQstC10L3QvdGL0Lkg0LfQvdCw0YfQvtC6INC80LXRgtC60Lgg0YEg0LrQvtC90YLQtdC90YLQvtC8JyxcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQkCDRjdGC0LAg4oCUINC90L7QstC+0LPQvtC00L3Rj9GPJyxcclxuICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICcxMidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXHJcbiAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcclxuICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvaWNvbnMvbWFwLW1hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI0LCAtMjRdLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDRgdC70L7RjyDRgSDRgdC+0LTQtdGA0LbQuNC80YvQvCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHQu9C+0Y8g0YEg0LrQsNGA0YLQuNC90LrQvtC5LlxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnRPZmZzZXQ6IFsxNSwgMTVdLFxyXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnRMYXlvdXQ6IE15SWNvbkNvbnRlbnRMYXlvdXRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcmspXHJcbiAgICAgICAgLmFkZChteVBsYWNlbWFya1dpdGhDb250ZW50KTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZWFkeSk7XHJcbi8vINC60L7QvdC10YYg0LrQsNGA0YLRiyIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0LkpXHJcbmNvbnN0IGdldE11bnVTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVfX2l0ZW1cIik7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0TXVudVNlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0TXVudVNlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdldE11bnVTZWxlY3RvcnMubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKGogIT09IGkpXHJcbiAgICAgICAgICAgIGdldE11bnVTZWxlY3RvcnNbal0uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TXVudVNlbGVjdG9yc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0LkpIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQvtGC0LfRi9Cy0L7QslxyXG5jb25zdCBnZXRDb21tZW50c1NlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tbWVudF9fbGlua1wiKTtcclxuY29uc3Qgc3VjY2Vzc092ZXJsYXkgPSBjcmVhdGVPdmVybGF5KFwiIDxoMyBjbGFzcz1cXFwiY29tbWVudF9fdGl0bGUtLW92ZXJsYXlcXFwiPtCh0YLQuNCy0LXQvSDQodC/0LjQu9Cx0LXRgNCzPC9oMz5cIiArIFxyXG5cItChINC00YDRg9Cz0L7QuSDRgdGC0L7RgNC+0L3RiyDQtNCw0LvRjNC90LXQudGI0LXQtSDRgNCw0LfQstC40YLQuNC1INGA0LDQt9C70LjRh9C90YvRhSDRhNC+0YDQvFwiICsgXHJcblwi0LTQtdGP0YLQtdC70YzQvdC+0YHRgtC4INC90LDQv9GA0Y/QvNGD0Y4g0LfQsNCy0LjRgdC40YIg0L7RgiDRgdC40YHRgtC10LzRiyDQvNCw0YHRiNGC0LDQsdC90L7Qs9C+INC40LfQvNC10L3QtdC90LjRjyDRgNGP0LTQsCDQv9Cw0YDQsNC80LXRgtGA0L7Qsi4g0KLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCxcIiArICBcclxuXCLQutGD0YDRgSDQvdCwINGB0L7RhtC40LDQu9GM0L3Qvi3QvtGA0LjQtdC90YLQuNGA0L7QstCw0L3QvdGL0Lkg0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC/0YDQvtC10LrRgiDRgdC/0L7RgdC+0LHRgdGC0LLRg9C10YIg0L/QvtCy0YvRiNC10L3QuNGOINCw0LrRgtGD0LDQu9GM0L3QvtGB0YLQuFwiICsgXHJcblwi0L3QsNC/0YDQsNCy0LvQtdC90LjQuSDQv9GA0L7Qs9GA0LXRgdGB0LjQstC90L7Qs9C+INGA0LDQt9Cy0LjRgtC40Y8hXCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRDb21tZW50c1NlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0Q29tbWVudHNTZWxlY3RvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWNjZXNzT3ZlcmxheSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheShjb250ZW50KSB7XHJcbiAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcclxuICBcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5VGVtcGxhdGVcIik7XHJcbiAgICBvdmVybGF5RWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgXHJcbiAgICBjb25zdCBjbG9zZUVsZW1lbnQgPSBvdmVybGF5RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xyXG4gICAgY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheUVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IG92ZXJsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnRFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgXHJcbiAgICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XHJcbiAgfVxyXG4gIFxyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQvtGC0LfRi9Cy0L7QsiIsIi8vIC8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQvNC10L3RjiAo0YHQutGA0YvRgtC+0LUpXHJcbi8vIHZhciBjbG9zZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlX19saW5rXCIpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhjbG9zZUxpbmspO1xyXG5cclxuLy8gdmFyIG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhtb2JpbGVNZW51KTtcclxuXHJcbi8vIHZhciBvcGVuTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10YWJsZXRzXCIpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhvcGVuTGluayk7XHJcblxyXG4vLyB2YXIgY2xvc2VMaW5rRnJvbU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19pdGVtXCIpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhjbG9zZUxpbmtGcm9tTmF2KTtcclxuXHJcbi8vIG9wZW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudS1vcGVuXCIpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGNsb3NlTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLW1lbnUtb3BlblwiKTtcclxuLy8gfSk7XHJcblxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGNsb3NlTGlua0Zyb21OYXYubGVuZ3RoOyBpICs9IDEpIHtcclxuLy8gICAgIGNsb3NlTGlua0Zyb21OYXZbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudS1vcGVuXCIpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuLy8gLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQvNC10L3RjiAo0YHQutGA0YvRgtC+0LUpXHJcblxyXG5jb25zb2xlLmxvZygnbW1wJyk7IiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINGB0LvQsNC50LTQtdGAXHJcbmNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1sYXlvdXRfX2xlZnRcIik7XHJcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItbGF5b3V0X19yaWdodFwiKTtcclxuY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fd3JhcFwiKTtcclxuXHJcbi8vINGI0LjRgNC40L3QsCDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbnZhciB3aWR0aCA9IDEwMDtcclxuLy8g0YLQtdC60YPRidC40Lkg0YHQtNCy0LjQsyDQstC70LXQstC+XHJcbnZhciBjb3VudCA9IDA7XHJcbi8vINCy0YHQtdCz0L4g0YHQu9Cw0LnQtNC+0LJcclxuY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyX19pdGVtXCIpO1xyXG5cclxucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubGVuZ3RoLCBpdGVtLmxlbmd0aCAtIDIpO1xyXG4gICAgaWYgKGNvdW50IDw9IGl0ZW0ubGVuZ3RoIC0gMikge1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQgKyAnPT4nKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpZHRoICogY291bnQ7XHJcbiAgICAgICAgaXRlbXMuc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHBvc2l0aW9uICsgJyUnO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zLnN0eWxlLm1hcmdpbkxlZnQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjb3VudCAhPT0gMCkge1xyXG4gICAgICAgIGNvdW50IC09IDE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQgKyAnPD0nKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpZHRoICogY291bnQ7XHJcbiAgICAgICAgaXRlbXMuc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHBvc2l0aW9uICsgJyUnO1xyXG4gICAgfVxyXG59KTtcclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDRgdC70LDQudC00LXRgCIsIi8vINCX0LDQtNCw0L3QuNC1IDE6XHJcbmZ1bmN0aW9uIGZpbHRlcihpbnB1dCwgdGhhbikge1xyXG5cclxuICAgIC8vINC90LDQv9C40YjQuNGC0LUg0LfQtNC10YHRjCDQutC+0LQsINC60L7RgtC+0YDRi9C5INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90L7QstGL0Lkg0LzQsNGB0YHQuNCyXHJcbiAgICAvLyDQsiDQutC+0YLQvtGA0L7QvCDRgdC+0LTQtdGA0LbQsNGC0YHRjyDRgtC1INGN0LvQtdC80LXQvdGC0YsgaW5wdXQsINC60L7RgtC+0YDRi9C1INCx0L7Qu9GM0YjQtSB0aGFuXHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgaW5wdXQuZm9yRWFjaChlbGVtID0+IGVsZW0gPiB0aGFuID8gcmVzdWx0LnB1c2goZWxlbSkgOiBudWxsKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbnZhciBhcnJheSA9IFsxMiwgMTAwLCAzNCwgNjUsIDEwXTtcclxudmFyIHJlc3VsdCA9IGZpbHRlcihhcnJheSwgNjApO1xyXG5cclxuLy8gY29uc29sZS5sb2cocmVzdWx0KTsgLy8gWzEwMCwgNjVdO1xyXG5cclxucmVzdWx0ID0gZmlsdGVyKGFycmF5LCAyMCk7XHJcbi8vIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFsxMDAsIDM0LCA2NV07XHJcblxyXG4vLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4vLyDQl9Cw0LTQsNC90LjQtSAyOlxyXG5cclxuLy8g0JLQvtC30YzQvNC40YLQtSDQutC+0LQg0L/RgNC10LTRi9C00YPRidC10LPQviDQt9Cw0LTQsNC90LjRj1xyXG4vLyDQnNC+0LTQuNGE0LjRhtC40YDRg9C50YLQtSDQutC+0LQg0YTRg9C90LrRhtC40LggZmlsdGVyINGC0LDQuiwg0YfRgtC+0LHRiyDRhNGD0L3QutGG0LjRjyDQstGL0LHRgNCw0YHRi9Cy0LDQu9CwINC40YHQutC70Y7Rh9C10L3QuNGPINC/0YDQuCDRgdC70LXQtNGD0Y7RidC40YUg0YPRgdC70L7QstC40Y/RhTpcclxuLy8g0JIgaW5wdXQg0L/QtdGA0LXQtNCw0L0g0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxyXG4vLyDQpdC+0YLRjyDQsdGLINC+0LTQuNC9INC40Lcg0Y3Qu9C10LzQtdC90YLQvtCyIGlucHV0INC90LUg0Y/QstC70Y/QtdGC0YHRjyDRh9C40YHQu9C+0LxcclxuLy8g0KXQvtGC0Y8g0LHRiyDQvtC00LjQvSDQuNC3INGN0LvQtdC80LXQvdGC0L7QsiBpbnB1dCDRj9Cy0LvRj9C10YLRgdGPINC+0YLRgNC40YbQsNGC0LXQu9GM0L3Ri9C8INGH0LjRgdC70L7QvFxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbHRlcjIoaW5wdXQsIHRoYW4pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQn9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXCIpO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dC5zb21lKGVsZW0gPT4gZWxlbSA8IDApKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0KXQvtGC0Y8g0LHRiyDQvtC00LjQvSDQuNC3INGN0LvQtdC80LXQvdGC0L7QsiBpbnB1dCDRj9Cy0LvRj9C10YLRgdGPINC+0YLRgNC40YbQsNGC0LXQu9GM0L3Ri9C8INGH0LjRgdC70L7QvFwiKTtcclxuICAgIH0gZWxzZSBpZiAoIWlucHV0LmV2ZXJ5KGVsZW0gPT4gTnVtYmVyLmlzRmluaXRlKGVsZW0pKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcItCl0L7RgtGPINCx0Ysg0L7QtNC40L0g0LjQtyDRjdC70LXQvNC10L3RgtC+0LIgaW5wdXQg0L3QtSDRj9Cy0LvRj9C10YLRgdGPINGH0LjRgdC70L7QvFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5mb3JFYWNoKGVsZW0gPT4gZWxlbSA+IHRoYW4gPyByZXN1bHQucHVzaChlbGVtKSA6IG51bGwpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gdmFyIGFycmF5ID0gWzEsIDIsIDQsIDYsIDYxXTtcclxudmFyIGFycmF5ID0gWzEsIDIsIDQsIDYsICdmZmYnLCA2MV07XHJcblxyXG50cnkge1xyXG5cclxuICAgIHZhciByZXN1bHQgPSBmaWx0ZXIyKGFycmF5LCA2MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpOyBcclxufVxyXG5jYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuXHJcbn1cclxuXHJcbi8vIGZvciAobGV0IGkgPSAxOyBpIDwgNjsgaSArPSAxKSB7XHJcbi8vICAgICBsZXQgb3V0ID0gW107XHJcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGogKz0gMSkge1xyXG4vLyAgICAgICAgIG91dC5wdXNoKGkpO1xyXG4vLyAgICAgfVxyXG4vLyBjb25zb2xlLmxvZyhvdXQuam9pbignJykpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIGFyci5maWx0ZXIoZWxlbSA9PiB7XHJcbi8vICAgICBjb25zdCByZXN1bHQgPSAoYXJnKSA9PiBjb25zb2xlLmxvZyhhcmcpO1xyXG4vLyAgICAgLy8gcmV0dXJuIGVsZW0gPT09IDMgPyByZXN1bHQoJ9C10YHRgtGMJykgOiBudWxsO1xyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGFyciA9IFswLCAxLCAyLCA2LCA0XTtcclxuLy8gY29uc3Qgb3V0ID0gYXJyLnNvbWUoZWxlbSA9PiBlbGVtID09PSAzKSA/IFwi0LXRgdGC0YxcIiA6IFwi0L3QtdGCXCI7XHJcbi8vIC8vIGNvbnNvbGUubG9nKG91dCk7XHJcblxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4vLyAgICAgaWYgKGFycltpXSA9PT0gMykge1xyXG4vLyAgICAgICAgICBjb25zb2xlLmxvZygn0LXRgdGC0YwnKTtcclxuLy8gICAgICAgICAgcmV0dXJuOyAgXHJcbi8vICAgICB9XHJcbi8vIGNvbnNvbGUubG9nKCfQvdC10YInKTtcclxuLy8gcmV0dXJuO1xyXG4vLyB9XHJcblxyXG4iLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQstC10YDRgtC40LrQsNC70YzQvdGL0LkpXHJcbmNvbnN0IGdldFRlYW1TZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi10ZWFtX193cmFwXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldFRlYW1TZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldFRlYW1TZWxlY3RvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZXRUZWFtU2VsZWN0b3JzLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChqICE9PSBpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGdldFRlYW1TZWxlY3RvcnNbal0uY2xhc3NMaXN0LnJlbW92ZShcImFjY29yZGlvbi10ZWFtX193cmFwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFRlYW1TZWxlY3RvcnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcImFjY29yZGlvbi10ZWFtX193cmFwLS1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5KSJdfQ==
