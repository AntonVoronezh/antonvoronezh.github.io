(function numberfor7steps() {

    const num7st = document.querySelector('#num7st');

    makeMarking();

    setStyle();

    const start = num7st.querySelector('.num7st__start');

    const count = num7st.querySelector('.num7st__count');

    const wrap = num7st.querySelector('.num7st__wrap');

    const number = num7st.querySelector('.num7st__number');

    const less = num7st.querySelector('.num7st__less');

    const more = num7st.querySelector('.num7st__more');
    

    let flag;

    let startNum = 0;

    let endNum = 100;

    let num = 50;

    let countNum = 1;


    start.addEventListener('click', function () {

        addCount();

        addNumber(num);

        hideStartBtn();

        addBtns();

    });


    function startAlgorithm() {

        addCount();

        if (flag) {

            const newNum = Math.floor(num + (endNum - num) / 2);

            startNum = num;

            if (num === 99 && newNum === 99) {

                num = 100;

            } else {

                num = newNum;

            }

        }

        if (!flag) {

            const newNum = Math.floor(num - (num - startNum) / 2);

            endNum = num;

            if (num === 1) {

                num = 1;

            } else {

                num = newNum;

            }

        }

        addNumber(num);

    };

    function moreAlgorithm() {

        flag = true;

        startAlgorithm();

    };

    function lessAlgorithm() {

        flag = false;

        startAlgorithm();

    };

    function addNumber(argNum = 50) {

        number.innerHTML = argNum;

    };

    function addBtns() {

        less.classList.remove('num7st__none');

        more.classList.remove('num7st__none');

        addListeners();

    };

    function addListeners() {

        more.addEventListener('click', moreAlgorithm);

        less.addEventListener('click', lessAlgorithm);

    };

    function createElem(argElem, argClass, argTxt, argParent) {

        const elem = document.createElement(argElem);

        elem.classList.add(argClass);

        elem.innerHTML = argTxt;

        argParent.appendChild(elem);

    };

    function addCount() {

        count.innerHTML = `Попытка #${countNum}`;

        number.style.fontSize = '50px';

        if (countNum <= 6) {

            countNum += 1;

        }

    };

    function hideStartBtn() {

        start.classList.add('num7st__none');

    };

    function makeMarking() {

        num7st.innerHTML = `
        <div class="num7st__title">Загадайте число от <b>1</b> до <b>100</b> 
            и я угодаю его за <span class="num7st__red"><b>7</b></span>
            попыток.</div>
        <div class="num7st__count"></div>
        <div class="num7st__number"></div>
        <div class="num7st__wrap">
            <button class="num7st__start">начать</button>
            <button class="num7st__less  num7st__none">меньше</button>
            <button class="num7st__more  num7st__none">больше</button>
        </div>
            `;

    };

    function setStyle() {

        const style = document.querySelector('style');

        style.innerHTML = style.innerHTML + `
            #num7st {
                border: 1px solid #ccc;
                width: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 10px;
            }

            .num7st__none {
                display: none;
            }

            .num7st__number {
                font-size: 25px;
            }

            .num7st__red {
                color: red;
                font-size: 25px;
            }
            .num7st__count {
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .num7st__number {
                margin-bottom: 10px;
            }
            `;

    };


}());