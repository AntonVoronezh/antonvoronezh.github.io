(function() {


    const preloader = document.querySelector('.preloader');
    const rounds = document.querySelector('.preloader__img');
    const progress = document.querySelector('.preloader__progress');
    const images = Array.from(document.querySelectorAll("img"));
    const imagesCount = images.length;
    const initStrokeDashOffset = 439;
    let loadedImg = 0;

    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        img = new Image();
        img.src = images[i].src;
        img.onload = imageLoaded;
    }

    console.log(images.length);
    

    function imageLoaded() {
        loadedImg++;

        const curStrokeDashArray = Math.round(initStrokeDashOffset / imagesCount * loadedImg);
        rounds.style.strokeDashoffset = initStrokeDashOffset - curStrokeDashArray;

        const percent = Math.round(100 / imagesCount * loadedImg);
        progress.innerHTML = percent + '%';

        console.log(percent);
        

    }
    

    window.addEventListener("load", setStyle);

    function setStyle() {

        if (loadedImg >= imagesCount) {
            setTimeout(function () {
                if (!preloader.classList.contains('none')) {
                    preloader.classList.add('none');
                }
            }, 2000);
            setTimeout(function () {
                rounds.style.strokeDashoffset = initStrokeDashOffset;
            }, 3000);

        }

    }

})();