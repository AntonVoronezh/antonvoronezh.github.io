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
// начало fullpage
new fullpage('#fullpage', {
    autoScrolling:true,
    menu: '#menu',
    anchors:['section-first', 'section-we', 'section-burgers', 
    'section-team', 'section-menu', 'section-reviews', 'section-how', 
    'section-form', 'section-contacts'],
});
// конец fullpage

// // начало карты
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
// начало мобильного меню
const closeLink = document.querySelector(".close__link");
const navLink = document.querySelectorAll(".nav__link");
const mobileMenu = document.querySelector(".mobile-menu");
const openLink = document.querySelector(".menu-tablets");

openLink.addEventListener("click", function (e) {
    e.preventDefault();
    mobileMenu.classList.add("mobile-menu-open")
});

closeLink.addEventListener("click", function (e) {
    e.preventDefault();
    mobileMenu.classList.remove("mobile-menu-open")
});

for (let i = 0; i < navLink.length; i += 1) {
    navLink[i].addEventListener("click", function () {
        mobileMenu.classList.remove("mobile-menu-open");
    });
}
// конец мобильного меню
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJmdWxscGFnZS5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJtb2JpbGUuanMiLCJtb2RhbC5qcyIsInNsaWRlci5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0L3QsNGH0LDQu9C+INGE0L7RgNC80YtcclxuY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vcmRlclwiKTtcclxuY29uc3QgZ2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tLXN1Ym1pdFwiKTtcclxuY29uc3QgZ2V0RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xyXG52YXIgc2VydmVyUmVzcG9uc2U7XHJcblxyXG5jb25zdCB2YWxpZGF0ZUZpZWxkID0gYXJnRmllbGQgPT4ge1xyXG4gICAgcmV0dXJuIGFyZ0ZpZWxkLmNoZWNrVmFsaWRpdHkoKTtcclxuICAgIC8vIGlmKCFhcmdGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYXJnRmllbGQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxufTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlRm9ybSA9IGFyZ0Zvcm0gPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ0Zvcm0uZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoYXJnRm9ybS5lbGVtZW50c1tpXSkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn07XHJcblxyXG5nZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybShnZXRGb3JtKSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5uYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5waG9uZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbW1lbnRcIiwgZ2V0Rm9ybS5lbGVtZW50cy50ZXh0LnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidG9cIiwgXCJhYWFhYWFAYWFhYWFhYS5hYVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBqc29uLm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsJyk7XHJcbiAgICAgICAganNvbi5zZW5kKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAganNvbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoanNvbi5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gSlNPTi5wYXJzZShqc29uLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG91dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNlcnZlclJlc3BvbnNlID0gb3V0Lm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzT3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoc2VydmVyUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWNjZXNzT3ZlcmxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbi8vINC60L7QvdC10YYg0YTQvtGA0LzRiyIsIi8vINC90LDRh9Cw0LvQviBmdWxscGFnZVxyXG5uZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgIGF1dG9TY3JvbGxpbmc6dHJ1ZSxcclxuICAgIG1lbnU6ICcjbWVudScsXHJcbiAgICBhbmNob3JzOlsnc2VjdGlvbi1maXJzdCcsICdzZWN0aW9uLXdlJywgJ3NlY3Rpb24tYnVyZ2VycycsIFxyXG4gICAgJ3NlY3Rpb24tdGVhbScsICdzZWN0aW9uLW1lbnUnLCAnc2VjdGlvbi1yZXZpZXdzJywgJ3NlY3Rpb24taG93JywgXHJcbiAgICAnc2VjdGlvbi1mb3JtJywgJ3NlY3Rpb24tY29udGFjdHMnXSxcclxufSk7XHJcbi8vINC60L7QvdC10YYgZnVsbHBhZ2VcclxuIiwiLy8gLy8g0L3QsNGH0LDQu9C+INC60LDRgNGC0YtcclxueW1hcHMucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgICAgIGNlbnRlcjogWzUxLjY4MDQyNywgMzkuMTc2NzY5XSxcclxuICAgICAgICB6b29tOiAxNFxyXG4gICAgfSwge1xyXG4gICAgICAgICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICAvLyDQodC+0LfQtNCw0ZHQvCDQvNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXHJcbiAgICAgICAgTXlJY29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhcclxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcclxuICAgICAgICApLFxyXG4gICAgICBcclxuICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsobXlNYXAuZ2V0Q2VudGVyKCksIHtcclxuICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQodC+0LHRgdGC0LLQtdC90L3Ri9C5INC30L3QsNGH0L7QuiDQvNC10YLQutC4JyxcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQrdGC0L4g0LrRgNCw0YHQuNCy0LDRjyDQvNC10YLQutCwJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvaWNvbnMvbWFwLW1hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTEsIC0xXVxyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbXlQbGFjZW1hcmtXaXRoQ29udGVudCA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUxLjY4OTQ5NywgMzkuMTc2ODY5XSwge1xyXG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QsdGB0YLQstC10L3QvdGL0Lkg0LfQvdCw0YfQvtC6INC80LXRgtC60Lgg0YEg0LrQvtC90YLQtdC90YLQvtC8JyxcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQkCDRjdGC0LAg4oCUINC90L7QstC+0LPQvtC00L3Rj9GPJyxcclxuICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICcxMidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXHJcbiAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcclxuICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvaWNvbnMvbWFwLW1hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI0LCAtMjRdLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDRgdC70L7RjyDRgSDRgdC+0LTQtdGA0LbQuNC80YvQvCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHQu9C+0Y8g0YEg0LrQsNGA0YLQuNC90LrQvtC5LlxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnRPZmZzZXQ6IFsxNSwgMTVdLFxyXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnRMYXlvdXQ6IE15SWNvbkNvbnRlbnRMYXlvdXRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcmspXHJcbiAgICAgICAgLmFkZChteVBsYWNlbWFya1dpdGhDb250ZW50KTtcclxufSk7XHJcbi8vINC60L7QvdC10YYg0LrQsNGA0YLRi1xyXG4iLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5KVxyXG5jb25zdCBnZXRNdW51U2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51X19pdGVtXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldE11bnVTZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldE11bnVTZWxlY3RvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZXRNdW51U2VsZWN0b3JzLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChqICE9PSBpKVxyXG4gICAgICAgICAgICBnZXRNdW51U2VsZWN0b3JzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE11bnVTZWxlY3RvcnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5KSIsIi8vINC90LDRh9Cw0LvQviDQvNC+0LHQuNC70YzQvdC+0LPQviDQvNC10L3RjlxyXG5jb25zdCBjbG9zZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlX19saW5rXCIpO1xyXG5jb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2xpbmtcIik7XHJcbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpO1xyXG5jb25zdCBvcGVuTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10YWJsZXRzXCIpO1xyXG5cclxub3BlbkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudS1vcGVuXCIpXHJcbn0pO1xyXG5cclxuY2xvc2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLW1lbnUtb3BlblwiKVxyXG59KTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGluay5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgbmF2TGlua1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1tZW51LW9wZW5cIik7XHJcbiAgICB9KTtcclxufVxyXG4vLyDQutC+0L3QtdGGINC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQvtGC0LfRi9Cy0L7QslxyXG5jb25zdCBnZXRDb21tZW50c1NlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tbWVudF9fbGlua1wiKTtcclxuY29uc3Qgc3VjY2Vzc092ZXJsYXkgPSBjcmVhdGVPdmVybGF5KFwiIDxoMyBjbGFzcz1cXFwiY29tbWVudF9fdGl0bGUtLW92ZXJsYXlcXFwiPtCh0YLQuNCy0LXQvSDQodC/0LjQu9Cx0LXRgNCzPC9oMz5cIiArIFxyXG5cItChINC00YDRg9Cz0L7QuSDRgdGC0L7RgNC+0L3RiyDQtNCw0LvRjNC90LXQudGI0LXQtSDRgNCw0LfQstC40YLQuNC1INGA0LDQt9C70LjRh9C90YvRhSDRhNC+0YDQvFwiICsgXHJcblwi0LTQtdGP0YLQtdC70YzQvdC+0YHRgtC4INC90LDQv9GA0Y/QvNGD0Y4g0LfQsNCy0LjRgdC40YIg0L7RgiDRgdC40YHRgtC10LzRiyDQvNCw0YHRiNGC0LDQsdC90L7Qs9C+INC40LfQvNC10L3QtdC90LjRjyDRgNGP0LTQsCDQv9Cw0YDQsNC80LXRgtGA0L7Qsi4g0KLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCxcIiArICBcclxuXCLQutGD0YDRgSDQvdCwINGB0L7RhtC40LDQu9GM0L3Qvi3QvtGA0LjQtdC90YLQuNGA0L7QstCw0L3QvdGL0Lkg0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC/0YDQvtC10LrRgiDRgdC/0L7RgdC+0LHRgdGC0LLRg9C10YIg0L/QvtCy0YvRiNC10L3QuNGOINCw0LrRgtGD0LDQu9GM0L3QvtGB0YLQuFwiICsgXHJcblwi0L3QsNC/0YDQsNCy0LvQtdC90LjQuSDQv9GA0L7Qs9GA0LXRgdGB0LjQstC90L7Qs9C+INGA0LDQt9Cy0LjRgtC40Y8hXCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRDb21tZW50c1NlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0Q29tbWVudHNTZWxlY3RvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWNjZXNzT3ZlcmxheSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheShjb250ZW50KSB7XHJcbiAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcclxuICBcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5VGVtcGxhdGVcIik7XHJcbiAgICBvdmVybGF5RWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgXHJcbiAgICBjb25zdCBjbG9zZUVsZW1lbnQgPSBvdmVybGF5RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xyXG4gICAgY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheUVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IG92ZXJsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnRFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgXHJcbiAgICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XHJcbiAgfVxyXG4gIFxyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQvtGC0LfRi9Cy0L7QsiIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDRgdC70LDQudC00LXRgFxyXG5jb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItbGF5b3V0X19sZWZ0XCIpO1xyXG5jb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWxheW91dF9fcmlnaHRcIik7XHJcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX3dyYXBcIik7XHJcblxyXG4vLyDRiNC40YDQuNC90LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG52YXIgd2lkdGggPSAxMDA7XHJcbi8vINGC0LXQutGD0YnQuNC5INGB0LTQstC40LMg0LLQu9C10LLQvlxyXG52YXIgY291bnQgPSAwO1xyXG4vLyDQstGB0LXQs9C+INGB0LvQsNC50LTQvtCyXHJcbmNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlcl9faXRlbVwiKTtcclxuXHJcbnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtLmxlbmd0aCwgaXRlbS5sZW5ndGggLSAyKTtcclxuICAgIGlmIChjb3VudCA8PSBpdGVtLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50ICsgJz0+Jyk7XHJcbiAgICAgICAgcG9zaXRpb24gPSB3aWR0aCAqIGNvdW50O1xyXG4gICAgICAgIGl0ZW1zLnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyBwb3NpdGlvbiArICclJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoY291bnQgIT09IDApIHtcclxuICAgICAgICBjb3VudCAtPSAxO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50ICsgJzw9Jyk7XHJcbiAgICAgICAgcG9zaXRpb24gPSB3aWR0aCAqIGNvdW50O1xyXG4gICAgICAgIGl0ZW1zLnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyBwb3NpdGlvbiArICclJztcclxuICAgIH1cclxufSk7XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0YHQu9Cw0LnQtNC10YAiLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQstC10YDRgtC40LrQsNC70YzQvdGL0LkpXHJcbmNvbnN0IGdldFRlYW1TZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi10ZWFtX193cmFwXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldFRlYW1TZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldFRlYW1TZWxlY3RvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZXRUZWFtU2VsZWN0b3JzLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChqICE9PSBpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGdldFRlYW1TZWxlY3RvcnNbal0uY2xhc3NMaXN0LnJlbW92ZShcImFjY29yZGlvbi10ZWFtX193cmFwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFRlYW1TZWxlY3RvcnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcImFjY29yZGlvbi10ZWFtX193cmFwLS1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5KSJdfQ==
