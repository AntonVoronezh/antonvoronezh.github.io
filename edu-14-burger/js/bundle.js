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
    // console.log('open');
});

closeLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.remove("mobile-menu-open");
    // console.log('close');
});

// console.log(closeLinkFromNav.length);

for (let i = 0; i < closeLinkFromNav.length; i += 1) {
    closeLinkFromNav[i].addEventListener("click", function () {
        // event.preventDefault();
        mobileMenu.classList.remove("mobile-menu-open");
        // console.log('close');
    });
}



