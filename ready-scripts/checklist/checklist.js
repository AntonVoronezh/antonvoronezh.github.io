(function checklist() {

    const getElem = document.getElementById('checklist');

    init();

    const getInput = getElem.querySelector('.checklist__input');
    const getUl = getElem.querySelector('.checklist__ul');


    getInput.addEventListener('keydown', (event) => {

        if (event.keyCode === 13 && getInput.value !== '') {

            addNewNote(getInput.value);

            getInput.value = '';

        }

    });


    function addNewNote(argText) {

        const createLi = createElem('li');
        const createCheck = createElem('input');
        const createClose = createElem('div');
        const createText = createElem('div');
        const createBackInp = createElem('input');

        addClass(createLi, 'checklist__li');
        addClass(createText, 'checklist__text');
        addClass(createCheck, 'checklist__ckeckbox');
        addClass(createClose, 'checklist__close');
        addClass(createBackInp, 'checklist__none');
        addClass(createBackInp, 'checklist__back-input');

        createLi.dataset.number = getCountNotes();
        createText.dataset.number = getCountNotes();
        createCheck.dataset.number = getCountNotes();
        createClose.dataset.number = getCountNotes();
        createBackInp.dataset.number = getCountNotes();

        createLi.addEventListener('click', (event) => {

            if (event.target.classList.contains('checklist__ckeckbox')) {

                checklistFunc(event.target.dataset.number);

            } else if (event.target.classList.contains('checklist__close')) {

                closeFunc(event.target.dataset.number);


            } else if (event.target.classList.contains('checklist__back-input')) {

            }

        });

        createLi.addEventListener('dblclick', (event) => {

            if (event.target.classList.contains('checklist__text')) {

                textFunc(event.target.dataset.number);

            }

        });

        createCheck.type = 'checkbox';
        createText.innerHTML = argText;
        createBackInp.value = argText;
        createClose.innerHTML = 'X';

        appendElem(createLi, createCheck);
        appendElem(createLi, createText);
        appendElem(createLi, createBackInp);
        appendElem(createLi, createClose);

        appendElem(getUl, createLi);


    };

    function createElem(argElem) {

        return document.createElement(argElem);

    };

    function addClass(argElem, argClass) {

        return argElem.classList.add(argClass);

    };

    function appendElem(argElem1, argElem2) {

        argElem1.appendChild(argElem2);

    };

    function getCountNotes() {

        const getAllLi = getElem.querySelectorAll('.checklist__li');


        if (getAllLi.length === 0) {

            return 0;

        } else {

            return +Array.from(getAllLi)[getAllLi.length - 1].dataset.number + 1;

        }

    };

    function checklistFunc(argNum) {

        const getAllBox = getUl.querySelectorAll('.checklist__ckeckbox');

        getAllBox.forEach(elem => {

            if (elem.dataset.number === argNum) {

                elem.disabled = true;

                addStrike(argNum);

            }

        });

    };

    function addStrike(argNum) {

        const getAllBox = getUl.querySelectorAll('.checklist__text');

        getAllBox.forEach(elem => {

            if (elem.dataset.number === argNum) {

                elem.innerHTML = `<s>${elem.innerHTML}</s>`;

            }

        });

    };

    function closeFunc(argNum) {

        const getAllBox = getUl.querySelectorAll('.checklist__li');

        getAllBox.forEach(elem => {

            if (elem.dataset.number === argNum) {

                getUl.removeChild(elem);

            }

        });

    };


    function textFunc(argNum) {

        const getAllBox = getUl.querySelectorAll('.checklist__text');

        const getAllBox2 = getUl.querySelectorAll('.checklist__back-input');

        for (let i = 0; i < getAllBox.length; i += 1) {

            let elem = getAllBox[i];

            if (elem.dataset.number === argNum) {

                elem.classList.add('checklist__none');

                getAllBox2[i].classList.remove('checklist__none');

                getAllBox2[i].addEventListener('keydown', (event) => {

                    if (event.keyCode === 13 && getAllBox2[i].value !== '') {

                        elem.innerHTML = getAllBox2[i].value;

                        getAllBox2[i].classList.add('checklist__none');

                        elem.classList.remove('checklist__none');

                    }

                });

                break;

            }


        }

    };




    function init() {

        getElem.innerHTML = `
        <input type="text" class="checklist__input" placeholder="Введите текст">
        <ul class="checklist__ul"></ul>
        `;


        const getStyle = document.querySelector('style');

        getStyle.innerHTML = getStyle.innerHTML + `
        .checklist {
            border: 1px solid #000000;
            width: 300px;
            box-sizing:content-box;
            padding: 5px;
        }
        .checklist__input {
            border: 1px solid #000000;
            width: 280px;
            padding: 8px;

        }
        .checklist__li {
            border: 1px solid #000000;
            width: 280px;
            padding: 8px;
            margin: 0;
            margin-top: -1px;
            position: relative;
            display: flex;
        }
        .checklist__ul {
        list-style: none;
        padding: 0;
        }

        .checklist__close {
            position: absolute;
            width: 20px;
            height: 20px;
            border: 2px solid red;
            border-radius: 50%;
            cursor: pointer;
            top: 5px;
            right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .checklist__text {
            margin-left: 5px;
        }

        .checklist__none {
            display: none;
        }

        .checklist__back-input {
            width: 100%;
            margin-right: 22px;
            background-color: #ccc;
            border: 1px solid #000000;
            padding: 5px;
        }
        `;

    };

}());