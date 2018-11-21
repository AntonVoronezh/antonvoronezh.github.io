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
// начало кода меню (скрытое)
var closeLink = document.querySelector(".close__link");
console.log(closeLink);

var mobileMenu = document.querySelector(".mobile-menu");
console.log(mobileMenu);

var openLink = document.querySelector(".menu-tablets");
console.log(openLink);

var closeLinkFromNav = document.querySelectorAll(".nav__item");
console.log(closeLinkFromNav);

openLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.add("mobile-menu-open");
});

closeLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.remove("mobile-menu-open");
});

for (let i = 0; i < closeLinkFromNav.length; i += 1) {
    closeLinkFromNav[i].addEventListener("click", function () {
        mobileMenu.classList.remove("mobile-menu-open");
    });
}
// конец кода меню (скрытое)
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