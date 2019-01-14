function startCrossZero() {

    // <div id="cross-zero"></div>
    // startCrossZero();
            
    const getElem = document.getElementById('cross-zero');

    makeMarking();

    const getTbl = document.querySelector('.field');
    const getBtn = document.querySelector('.refresh');
    const getGamer = document.querySelector('.gamer');
    const getWinner = document.querySelector('.winner');

    makeClearField();
    makeRefresh();
    makeProgress();

    let flag = true;


    function makeMarking() {

        getElem.innerHTML = '<h1>Крестики-нолики </h1>\
            aka AntonVoronezh\
             <br> <br> <br>\
            <table class="field"></table>\
            <p>Победитель: <span class="winner">?</span></p>\
            <p>Сейчас ходит: <span class="gamer">X</span></p>\
            <button class="refresh">Начать заново</button>\
            ';

        getElem.style.border = '1px solid #000';
        getElem.style.textAlign = 'center';
        getElem.style.padding = '20px';

    };


    function makeProgress() {

        const getAllCeils = getTbl.querySelectorAll('.ceil');

        getAllCeils.forEach(elem => {

            elem.addEventListener('click', addInCeil);

            elem.addEventListener('click', writeGamer);

            elem.addEventListener('click', checkVictory);

        });

    };


    function deleteProgress() {

        const getAllCeils = getTbl.querySelectorAll('.ceil');

        getAllCeils.forEach(elem => {

            elem.removeEventListener('click', addInCeil);

            elem.removeEventListener('click', writeGamer);

            elem.removeEventListener('click', checkVictory);

        });

    };



    function checkVictory() {

        const $ = getTbl.querySelectorAll('.ceil');

        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 5, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [6, 4, 2]
        ];


        winCombinations.forEach(elem => {

            if (
                $[elem[0]].innerHTML === $[elem[1]].innerHTML &&
                $[elem[1]].innerHTML === $[elem[2]].innerHTML &&
                $[elem[0]].innerHTML !== ''
            ) {

                writeWinner($[elem[0]].innerHTML);

                deleteProgress();

            }

        });



    };


    function writeWinner(argStr) {

        getWinner.innerHTML = argStr;

    };



    function writeGamer() {

        if (!flag) {

            getGamer.innerHTML = 'X';

        } else {

            getGamer.innerHTML = 'O';

        }

    };


    function addInCeil() {

        if (checkZero(this)) {

            if (flag) {

                this.innerHTML = 'X';
                flag = false;

            } else {

                this.innerHTML = 'O';
                flag = true;

            }

        }

    };



    function checkZero(argElem) {

        return argElem.innerHTML === '' ? true : false;

    };


    function makeRefresh() {

        const getAllCeils = getTbl.querySelectorAll('.ceil');

        getBtn.addEventListener('click', function () {

            getAllCeils.forEach(elem => {

                elem.innerHTML = '';

                getWinner.innerHTML = '?';

                makeProgress();

            });


        });

    };



    function makeClearField() {

        for (let i = 0; i < 3; i += 1) {

            const makeTr = document.createElement('tr');

            for (let j = 0; j < 3; j += 1) {

                const makeTd = document.createElement('td');

                makeTd.classList.add('ceil');

                setStyle(makeTd);

                makeTr.appendChild(makeTd)

            }

            getTbl.appendChild(makeTr);
            // setStyle();

        }

    };


    function setStyle(argElem) {

        argElem.style.cssText = '\
            border: 1px solid #000000;\
            width: 100px;\
            height: 100px;\
            text-align: center;\
            font-size: 40px;\
        ';

    };


};