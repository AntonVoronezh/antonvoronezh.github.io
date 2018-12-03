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

// начало видео
const getVideo = document.querySelector(".player__video");
const getVideoPlayPauseButton = document.querySelector(".video__play-pause");
const getcVideoIcon = document.querySelector(".control__video-icon");
const getTimeRange = document.querySelector(".control__time-range");
const getAudioPlayPauseButton = document.querySelector(".control__sound-icon");
const getSoundRange = document.querySelector(".control__sound-range");


getVideoPlayPauseButton.addEventListener('click', playPause);
getcVideoIcon.addEventListener('click', playPause);
getVideo.addEventListener('timeupdate', percentRange);
getTimeRange.addEventListener('input', progressRange);

getAudioPlayPauseButton.addEventListener('click', playAudio);
getSoundRange.addEventListener('input', percentSound);

function playPause() {

    if (getVideo.paused) {
        getVideo.play();
        getVideoPlayPauseButton.style.opacity = '0';
    } else {
        getVideo.pause();
        getVideoPlayPauseButton.style.opacity = '0.5';
    }
};

function percentRange() {
    getTimeRange.value = Math.floor(getVideo.currentTime * 100 / getVideo.duration);
};

function progressRange() {
    getVideo.currentTime = Math.floor((getVideo.duration / 100) * getTimeRange.value);
};


let soundFlag = false;

function playAudio() {

    if (!soundFlag) {
        getVideo.volume = 0;
        soundFlag = true;
    } else {
        getVideo.volume = 1;
        soundFlag = false;
    }
};

function percentSound() {
    getVideo.volume = getSoundRange.value / 100;
};

// конец видео
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJmdWxscGFnZS5qcyIsImhvdy5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJtb2JpbGUuanMiLCJtb2RhbC5qcyIsInNsaWRlci5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0L3QsNGH0LDQu9C+INGE0L7RgNC80YtcclxuY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vcmRlclwiKTtcclxuY29uc3QgZ2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tLXN1Ym1pdFwiKTtcclxuY29uc3QgZ2V0RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xyXG52YXIgc2VydmVyUmVzcG9uc2U7XHJcblxyXG5jb25zdCB2YWxpZGF0ZUZpZWxkID0gYXJnRmllbGQgPT4ge1xyXG4gICAgcmV0dXJuIGFyZ0ZpZWxkLmNoZWNrVmFsaWRpdHkoKTtcclxuICAgIC8vIGlmKCFhcmdGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYXJnRmllbGQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxufTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlRm9ybSA9IGFyZ0Zvcm0gPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ0Zvcm0uZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoYXJnRm9ybS5lbGVtZW50c1tpXSkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn07XHJcblxyXG5nZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybShnZXRGb3JtKSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5uYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5waG9uZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbW1lbnRcIiwgZ2V0Rm9ybS5lbGVtZW50cy50ZXh0LnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidG9cIiwgXCJhYWFhYWFAYWFhYWFhYS5hYVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBqc29uLm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsJyk7XHJcbiAgICAgICAganNvbi5zZW5kKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAganNvbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoanNvbi5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gSlNPTi5wYXJzZShqc29uLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG91dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNlcnZlclJlc3BvbnNlID0gb3V0Lm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzT3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoc2VydmVyUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWNjZXNzT3ZlcmxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbi8vINC60L7QvdC10YYg0YTQvtGA0LzRiyIsIi8vINC90LDRh9Cw0LvQviBmdWxscGFnZVxyXG5uZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgIGF1dG9TY3JvbGxpbmc6dHJ1ZSxcclxuICAgIG1lbnU6ICcjbWVudScsXHJcbiAgICBhbmNob3JzOlsnc2VjdGlvbi1maXJzdCcsICdzZWN0aW9uLXdlJywgJ3NlY3Rpb24tYnVyZ2VycycsIFxyXG4gICAgJ3NlY3Rpb24tdGVhbScsICdzZWN0aW9uLW1lbnUnLCAnc2VjdGlvbi1yZXZpZXdzJywgJ3NlY3Rpb24taG93JywgXHJcbiAgICAnc2VjdGlvbi1mb3JtJywgJ3NlY3Rpb24tY29udGFjdHMnXSxcclxufSk7XHJcbi8vINC60L7QvdC10YYgZnVsbHBhZ2VcclxuIiwiLy8g0L3QsNGH0LDQu9C+INCy0LjQtNC10L5cclxuY29uc3QgZ2V0VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fdmlkZW9cIik7XHJcbmNvbnN0IGdldFZpZGVvUGxheVBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb19fcGxheS1wYXVzZVwiKTtcclxuY29uc3QgZ2V0Y1ZpZGVvSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbF9fdmlkZW8taWNvblwiKTtcclxuY29uc3QgZ2V0VGltZVJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250cm9sX190aW1lLXJhbmdlXCIpO1xyXG5jb25zdCBnZXRBdWRpb1BsYXlQYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbF9fc291bmQtaWNvblwiKTtcclxuY29uc3QgZ2V0U291bmRSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbF9fc291bmQtcmFuZ2VcIik7XHJcblxyXG5cclxuZ2V0VmlkZW9QbGF5UGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UGF1c2UpO1xyXG5nZXRjVmlkZW9JY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVBhdXNlKTtcclxuZ2V0VmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHBlcmNlbnRSYW5nZSk7XHJcbmdldFRpbWVSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHByb2dyZXNzUmFuZ2UpO1xyXG5cclxuZ2V0QXVkaW9QbGF5UGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5QXVkaW8pO1xyXG5nZXRTb3VuZFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcGVyY2VudFNvdW5kKTtcclxuXHJcbmZ1bmN0aW9uIHBsYXlQYXVzZSgpIHtcclxuXHJcbiAgICBpZiAoZ2V0VmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgZ2V0VmlkZW8ucGxheSgpO1xyXG4gICAgICAgIGdldFZpZGVvUGxheVBhdXNlQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgZ2V0VmlkZW9QbGF5UGF1c2VCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcGVyY2VudFJhbmdlKCkge1xyXG4gICAgZ2V0VGltZVJhbmdlLnZhbHVlID0gTWF0aC5mbG9vcihnZXRWaWRlby5jdXJyZW50VGltZSAqIDEwMCAvIGdldFZpZGVvLmR1cmF0aW9uKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByb2dyZXNzUmFuZ2UoKSB7XHJcbiAgICBnZXRWaWRlby5jdXJyZW50VGltZSA9IE1hdGguZmxvb3IoKGdldFZpZGVvLmR1cmF0aW9uIC8gMTAwKSAqIGdldFRpbWVSYW5nZS52YWx1ZSk7XHJcbn07XHJcblxyXG5cclxubGV0IHNvdW5kRmxhZyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gcGxheUF1ZGlvKCkge1xyXG5cclxuICAgIGlmICghc291bmRGbGFnKSB7XHJcbiAgICAgICAgZ2V0VmlkZW8udm9sdW1lID0gMDtcclxuICAgICAgICBzb3VuZEZsYWcgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRWaWRlby52b2x1bWUgPSAxO1xyXG4gICAgICAgIHNvdW5kRmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcGVyY2VudFNvdW5kKCkge1xyXG4gICAgZ2V0VmlkZW8udm9sdW1lID0gZ2V0U291bmRSYW5nZS52YWx1ZSAvIDEwMDtcclxufTtcclxuXHJcbi8vINC60L7QvdC10YYg0LLQuNC00LXQviIsIi8vIC8vINC90LDRh9Cw0LvQviDQutCw0YDRgtGLXHJcbnltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgICAgICBjZW50ZXI6IFs1MS42ODA0MjcsIDM5LjE3Njc2OV0sXHJcbiAgICAgICAgem9vbTogMTRcclxuICAgIH0sIHtcclxuICAgICAgICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgLy8g0KHQvtC30LTQsNGR0Lwg0LzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgIE15SWNvbkNvbnRlbnRMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoXHJcbiAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7IGZvbnQtd2VpZ2h0OiBib2xkO1wiPiRbcHJvcGVydGllcy5pY29uQ29udGVudF08L2Rpdj4nXHJcbiAgICAgICAgKSxcclxuICAgICAgXHJcbiAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKG15TWFwLmdldENlbnRlcigpLCB7XHJcbiAgICAgICAgICAgIGhpbnRDb250ZW50OiAn0KHQvtCx0YHRgtCy0LXQvdC90YvQuSDQt9C90LDRh9C+0Log0LzQtdGC0LrQuCcsXHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0K3RgtC+INC60YDQsNGB0LjQstCw0Y8g0LzQtdGC0LrQsCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXHJcbiAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4vaW1nL2ljb25zL21hcC1tYXJrZXIuc3ZnJyxcclxuICAgICAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbNDYsIDU3XSxcclxuICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxyXG4gICAgICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xLCAtMV1cclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG15UGxhY2VtYXJrV2l0aENvbnRlbnQgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1MS42ODk0OTcsIDM5LjE3Njg2OV0sIHtcclxuICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQodC+0LHRgdGC0LLQtdC90L3Ri9C5INC30L3QsNGH0L7QuiDQvNC10YLQutC4INGBINC60L7QvdGC0LXQvdGC0L7QvCcsXHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0JAg0Y3RgtCwIOKAlCDQvdC+0LLQvtCz0L7QtNC90Y/RjycsXHJcbiAgICAgICAgICAgIGljb25Db250ZW50OiAnMTInXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cclxuICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2VXaXRoQ29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4vaW1nL2ljb25zL21hcC1tYXJrZXIuc3ZnJyxcclxuICAgICAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbNDYsIDU3XSxcclxuICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxyXG4gICAgICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0yNCwgLTI0XSxcclxuICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0YHQu9C+0Y8g0YEg0YHQvtC00LXRgNC20LjQvNGL0Lwg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INGB0LvQvtGPINGBINC60LDRgNGC0LjQvdC60L7QuS5cclxuICAgICAgICAgICAgICAgIGljb25Db250ZW50T2Zmc2V0OiBbMTUsIDE1XSxcclxuICAgICAgICAgICAgICAgIC8vINCc0LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cclxuICAgICAgICAgICAgICAgIGljb25Db250ZW50TGF5b3V0OiBNeUljb25Db250ZW50TGF5b3V0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIG15TWFwLmdlb09iamVjdHNcclxuICAgICAgICAuYWRkKG15UGxhY2VtYXJrKVxyXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcmtXaXRoQ29udGVudCk7XHJcbn0pO1xyXG4vLyDQutC+0L3QtdGGINC60LDRgNGC0YtcclxuIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSlcclxuY29uc3QgZ2V0TXVudVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9faXRlbVwiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRNdW51U2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRNdW51U2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V0TXVudVNlbGVjdG9ycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gaSlcclxuICAgICAgICAgICAgZ2V0TXVudVNlbGVjdG9yc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNdW51U2VsZWN0b3JzW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSkiLCIvLyDQvdCw0YfQsNC70L4g0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LzQtdC90Y5cclxuY29uc3QgY2xvc2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZV9fbGlua1wiKTtcclxuY29uc3QgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saW5rXCIpO1xyXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKTtcclxuY29uc3Qgb3BlbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGFibGV0c1wiKTtcclxuXHJcbm9wZW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnUtb3BlblwiKVxyXG59KTtcclxuXHJcbmNsb3NlTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1tZW51LW9wZW5cIilcclxufSk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpbmsubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIG5hdkxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudS1vcGVuXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0LrQvtC90LXRhiDQvNC+0LHQuNC70YzQvdC+0LPQviDQvNC10L3RjiIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RgtC30YvQstC+0LJcclxuY29uc3QgZ2V0Q29tbWVudHNTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1lbnRfX2xpbmtcIik7XHJcbmNvbnN0IHN1Y2Nlc3NPdmVybGF5ID0gY3JlYXRlT3ZlcmxheShcIiA8aDMgY2xhc3M9XFxcImNvbW1lbnRfX3RpdGxlLS1vdmVybGF5XFxcIj7QodGC0LjQstC10L0g0KHQv9C40LvQsdC10YDQszwvaDM+XCIgKyBcclxuXCLQoSDQtNGA0YPQs9C+0Lkg0YHRgtC+0YDQvtC90Ysg0LTQsNC70YzQvdC10LnRiNC10LUg0YDQsNC30LLQuNGC0LjQtSDRgNCw0LfQu9C40YfQvdGL0YUg0YTQvtGA0LxcIiArIFxyXG5cItC00LXRj9GC0LXQu9GM0L3QvtGB0YLQuCDQvdCw0L/RgNGP0LzRg9GOINC30LDQstC40YHQuNGCINC+0YIg0YHQuNGB0YLQtdC80Ysg0LzQsNGB0YjRgtCw0LHQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0YDRj9C00LAg0L/QsNGA0LDQvNC10YLRgNC+0LIuINCi0LDQutC40Lwg0L7QsdGA0LDQt9C+0LwsXCIgKyAgXHJcblwi0LrRg9GA0YEg0L3QsCDRgdC+0YbQuNCw0LvRjNC90L4t0L7RgNC40LXQvdGC0LjRgNC+0LLQsNC90L3Ri9C5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQv9GA0L7QtdC60YIg0YHQv9C+0YHQvtCx0YHRgtCy0YPQtdGCINC/0L7QstGL0YjQtdC90LjRjiDQsNC60YLRg9Cw0LvRjNC90L7RgdGC0LhcIiArIFxyXG5cItC90LDQv9GA0LDQstC70LXQvdC40Lkg0L/RgNC+0LPRgNC10YHRgdC40LLQvdC+0LPQviDRgNCw0LfQstC40YLQuNGPIVwiKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0Q29tbWVudHNTZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldENvbW1lbnRzU2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3VjY2Vzc092ZXJsYXkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoY29udGVudCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVRlbXBsYXRlXCIpO1xyXG4gICAgb3ZlcmxheUVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gIFxyXG4gICAgY29uc3QgY2xvc2VFbGVtZW50ID0gb3ZlcmxheUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuICAgIGNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXlFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBvdmVybGF5RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIFxyXG4gICAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xyXG4gIH1cclxuICBcclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RgtC30YvQstC+0LIiLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0YHQu9Cw0LnQtNC10YBcclxuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWxheW91dF9fbGVmdFwiKTtcclxuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1sYXlvdXRfX3JpZ2h0XCIpO1xyXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX193cmFwXCIpO1xyXG5cclxuLy8g0YjQuNGA0LjQvdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxudmFyIHdpZHRoID0gMTAwO1xyXG4vLyDRgtC10LrRg9GJ0LjQuSDRgdC00LLQuNCzINCy0LvQtdCy0L5cclxudmFyIGNvdW50ID0gMDtcclxuLy8g0LLRgdC10LPQviDRgdC70LDQudC00L7QslxyXG5jb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX2l0ZW1cIik7XHJcblxyXG5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXRlbS5sZW5ndGgsIGl0ZW0ubGVuZ3RoIC0gMik7XHJcbiAgICBpZiAoY291bnQgPD0gaXRlbS5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCArICc9PicpO1xyXG4gICAgICAgIHBvc2l0aW9uID0gd2lkdGggKiBjb3VudDtcclxuICAgICAgICBpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgcG9zaXRpb24gKyAnJSc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbXMuc3R5bGUubWFyZ2luTGVmdCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGNvdW50ICE9PSAwKSB7XHJcbiAgICAgICAgY291bnQgLT0gMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCArICc8PScpO1xyXG4gICAgICAgIHBvc2l0aW9uID0gd2lkdGggKiBjb3VudDtcclxuICAgICAgICBpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgcG9zaXRpb24gKyAnJSc7XHJcbiAgICB9XHJcbn0pO1xyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINGB0LvQsNC50LTQtdGAIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5KVxyXG5jb25zdCBnZXRUZWFtU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tdGVhbV9fd3JhcFwiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRUZWFtU2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRUZWFtU2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V0VGVhbVNlbGVjdG9ycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gaSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBnZXRUZWFtU2VsZWN0b3JzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY2NvcmRpb24tdGVhbV9fd3JhcC0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRUZWFtU2VsZWN0b3JzW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJhY2NvcmRpb24tdGVhbV9fd3JhcC0tYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSkiXX0=
