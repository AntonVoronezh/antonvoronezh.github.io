(function life() {

    const life = document.querySelector('#life');

    makeMarking();

    setStyle();

    const start = life.querySelector('.life__start');

    const map = [];
    const all = [];
    const settings = {};
    const mapForEnd = [];
    let timerId;

    class Cell {

        constructor(argTr, argTd) {

            this._tr = argTr;

            this._td = argTd;

        }

        getCell() {

            return `ячейка ${this._tr} - ${this._td}`;

        }

        getNeighbors(argTrCount, argTdCount) {

            const _result = {};

            let _rightMiddle,
                _leftMiddle,
                _top,
                _bottom,
                _rightTop,
                _rightBottom,
                _leftTop,
                _leftBottom;

            if (this._tr < argTrCount) {

                if (this._isExists(this._tr + 1, this._td - 1) !== undefined) {

                    if (this._td - 1 !== 0) {

                        _leftBottom = [this._tr + 1, this._td - 1];

                        _result.leftBottom = _leftBottom;

                    }

                }
            }

            if (this._isExists(this._tr - 1, this._td - 1) !== undefined) {

                if (this._tr - 1 !== 0) {

                    if (this._td - 1 !== 0) {

                        _leftTop = [this._tr - 1, this._td - 1];

                        _result.leftTop = _leftTop;

                    }

                }

            }

            if (this._tr < argTrCount) {

                if (this._isExists(this._tr, this._td + 1) !== undefined) {

                    _rightBottom = [this._tr + 1, this._td + 1];

                    _result.rightBottom = _rightBottom;

                }

            }

            if (this._isExists(this._tr - 1, this._td + 1) !== undefined) {

                if (this._tr - 1 !== 0) {

                    _rightTop = [this._tr - 1, this._td + 1];

                    _result.rightTop = _rightTop;

                }

            }

            if (this._tr < argTrCount) {

                _bottom = [this._tr + 1, this._td];

                _result.bottom = _bottom;

            }

            if (this._isExists(this._tr - 1, this._td) !== undefined) {

                if (this._tr - 1 !== 0) {

                    _top = [this._tr - 1, this._td];

                    _result.top = _top;

                }

            }

            if (this._isExists(this._tr, this._td + 1) !== undefined) {

                _rightMiddle = [this._tr, this._td + 1];

                _result.rightMiddle = _rightMiddle;

            }

            if (this._isExists(this._tr, this._td - 1) !== undefined) {

                if (this._td - 1 !== 0) {

                    _leftMiddle = [this._tr, this._td - 1];

                    _result.leftMiddle = _leftMiddle;

                }

            }

            return _result;

        }

        _isExists(argTr, argTd) {

            return map[argTr][argTd];

        }

    };

    start.addEventListener('click', () => {

        closeStart();

        createElem('div', 'life__title', 'Это жизнь!', '.life__field');

        addField();

        createElem('div', 'life__text', '', '.life__field');

        addButtons();

    });

    function handlerStep() {

        const elems = life.querySelectorAll('.life__td');

        elems.forEach(elem => {

            const i = Number(elem.dataset.tr);

            const j = Number(elem.dataset.td);

            const result = processingNeighbors(map[i][j].getNeighbors(settings.width, settings.height));

            makeLife(elem, result);

        });

        addEnd();

        addText(mapForEnd.length + 1);

    };

    function makeLife(argElem, argCount) {

        if (argCount.length === 3) {

            argElem.classList.add('black');

        }

        if (argCount.length < 2 || argCount.length > 3) {

            argElem.classList.remove('black');

        }

    };

    function addButtons() {

        createElem('button', 'life__populate', 'Заселить', '.life');

        const populate = life.querySelector('.life__populate');

        populate.addEventListener('click', handlerPopulate);

        createElem('button', 'life__step', 'Одно поколение', '.life');

        const step = life.querySelector('.life__step');

        step.addEventListener('click', handlerStep);

        createElem('button', 'life__quick', 'Просто смотреть', '.life');

        const quick = life.querySelector('.life__quick');

        quick.addEventListener('click', () => {

            timerId = setInterval(function () {

                handlerStep();

            }, 1500);

        });

        createElem('button', 'life__stop', 'Остановить', '.life');

        const stop = life.querySelector('.life__stop');

        stop.addEventListener('click', () => {

            clearInterval(timerId);

        });

    };

    function addEnd() {

        checkRepeat();

        checkZeroForEnd();

        checkMapForEnd();

        makeMapForEnd();

    };

    function printEndResult(argNum) {

        const arrEnd = [
            '',
            'Конец Игры <br>(Повтор состояния жизни).',
            'Конец Игры <br>(Нет живых клеток).',
            'Конец Игры <br>(Последние 3 состояния без изменений).'
        ];

        const elem = life.querySelector('.life__title');

        elem.innerHTML += `<br><span class="span">${arrEnd[argNum]}</span>`;

        // console.log(arrEnd[argNum]);
        
    };

    function checkRepeat() {

        const lastNum = mapForEnd.length - 1;

        const lastArr = mapForEnd[lastNum];

        mapForEnd.forEach((elem, i) => {

            if (i !== lastNum) {

                if (elem.length === lastArr.length) {

                    if (addDiff(elem, lastArr)) {

                        printEndResult(1);

                        clearInterval(timerId);

                        console.log('repeat');

                    }

                }

            }

        });

    };

    function checkZeroForEnd() {

        const elems = life.querySelectorAll('.life__td');

        const result = [];

        elems.forEach(elem => {

            if (elem.classList.contains('black')) {

                const i = Number(elem.dataset.tr);

                const j = Number(elem.dataset.td);

                result.push([i, j]);

            }

        });

        if (result.length === 0) {

            console.log('zero');

            printEndResult(2);

            clearInterval(timerId);

        }

    };

    function makeMapForEnd() {

        const elems = life.querySelectorAll('.life__td');

        const result = [];

        elems.forEach(elem => {

            if (elem.classList.contains('black')) {

                const i = Number(elem.dataset.tr);

                const j = Number(elem.dataset.td);

                result.push([i, j]);

            }
        });

        mapForEnd.push(result);

    };

    function addDiff(argArr1, argArr2) {

        let flag = true;

        argArr1.forEach((elem, i) => {

            elem.forEach((item, j) => {

                if (item !== argArr2[i][j]) {

                    flag = false;

                }

            });


        });

        return flag;

    };

    function checkMapForEnd() {

        if (mapForEnd.length > 2) {

            let last, lastLast, lastLastLast;

            mapForEndCopy = mapForEnd.reverse();

            last = mapForEndCopy[0];

            lastLast = mapForEndCopy[1];

            lastLastLast = mapForEndCopy[2];

            if (last.length === lastLast.length && lastLast.length === lastLastLast.length) {

                if (addDiff(last, lastLast) && addDiff(lastLast, lastLastLast)) {

                    console.log('last=last2=last3');

                    printEndResult(3);

                    clearInterval(timerId);

                }

            }

        }

    };

    function handlerPopulate() {

        if (settings.width === 0) {
            settings.width = 20;
        }

        if (settings.height === 0) {
            settings.height = 20;
        }

        const countCells = settings.width * settings.height;

        const countCellsCeil = Math.ceil(countCells / 5);

        makePopulate(countCellsCeil);

        addText(1);

    };

    function makePopulate(argNum) {

        for (let i = 0; i <= argNum; i += 1) {

            const num = getRandomInt(0, all.length - 1);

            const elem = getElemForNum(all[num]);

            elem.classList.add('black');

        }

    };

    function addText(argNum) {

        const elem = life.querySelector('.life__text');

        elem.innerHTML = `Это ${argNum} поколение`;

    };

    function getElemForNum(argArr) {

        const [tr, td] = argArr;

        const elems = life.querySelectorAll('.life__td');

        let result;

        elems.forEach(elem => {

            if (+elem.dataset.tr === tr && +elem.dataset.td === td) {

                result = elem;

            }

        });

        return result;

    };

    function getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    };

    function closeStart() {

        const wrap = life.querySelector('.life__wrap');

        wrap.classList.add('dn');

    };

    function addField() {

        const widthCount = Number(life.querySelector('.life__width').value);

        const heightCount = Number(life.querySelector('.life__height').value);

        makeTable(widthCount, heightCount);

        settings.width = widthCount;

        settings.height = heightCount;

    };

    function makeTable(argWidth, argHeight) {

        argWidth = argWidth || 20;

        argHeight = argHeight || 20;

        const field = life.querySelector('.life__field');

        const table = createElem('table', 'life__table', '');

        for (let i = 0; i <= argHeight; i += 1) {

            if (i === 0) {
                map.push('mapInner');
            } else {

                const tr = createElem('tr', 'life__tr', '');

                let mapInner = [];

                for (let j = 0; j <= argWidth; j += 1) {

                    if (j === 0) {
                        mapInner.push('');
                    } else {

                        mapInner.push(new Cell(i, j));

                        let td = createElem('td', 'life__td', '');

                        td.dataset.tr = i;

                        td.dataset.td = j;

                        td.addEventListener('click', function () {

                            this.classList.add('black');

                            processingNeighbors(map[i][j].getNeighbors(argHeight, argWidth));

                        });

                        tr.appendChild(td);

                        all.push([i, j]);

                    }

                }

                map.push(mapInner);

                table.appendChild(tr);

            }

        }

        field.appendChild(table);

    };

    function processingNeighbors(argObj) {

        const result = [];

        for (key in argObj) {

            let cell = argObj[key];

            let elem = getCellForCheck(cell);

            if (checkLive(elem)) {

                result.push(1)

            }

        }

        return result;

    };

    function getCellForCheck(argCoordinates) {

        const all = life.querySelectorAll('.life__td');

        const [tr, td] = argCoordinates;

        let result;

        all.forEach(elem => {

            if (+elem.dataset.tr === tr && +elem.dataset.td === td) {

                result = elem;

            }

        });

        return result;

    };

    function checkLive(argElem) {

        return argElem.classList.contains('black');

    };

    
    function createElem(argElem, argClass, argInner, argParent) {

        const elem = document.createElement(argElem);

        const classArr = argClass.split(' ');

        classArr.forEach(item => {

            elem.classList.add(item);

        });

        elem.innerHTML = argInner;

        if (argParent) {

            const parent = document.querySelector(argParent);

            parent.appendChild(elem);

        } else {

            return elem;

        }

    };

    function makeMarking() {

        life.innerHTML = `
        <div class="life__wrap">
        <input type="text" class="life__input life__width" placeholder="ширина (кол-во клеток)">
        <input type="text" class="life__input life__height" placeholder="высота (кол-во клеток)">
        Если просто нажать Старт, <br> то будет поле 20х20 клеток
        <button class="life__start">старт</button>
        </div>
        <div class="life__field"></div>
            `;

    };

    function setStyle() {

        const style = document.querySelector('style');

        style.innerHTML = style.innerHTML + `
        .life {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid #999;
            padding: 10px;
        }

        .life__input {
            margin-bottom: 5px;
        }

        .life__wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .life__table {
            border-spacing: 0;
        }

        .life__td {
            border: 1px solid #999;
            width: 4px;
            height: 4px;
        }

        .dn {
            display: none;
        }

        .life__run {
            margin-top: 5px;
        }

        .black {
            background-color: #000;
        }

        .life__populate {
            margin-top: 10px;
        }

        .life__step {
            margin-top: 10px;
        }

        .life__quick {
            margin-top: 10px;
        }

        .life__stop {

            margin-top: 10px;
        }

        .life__title {
            text-align: center;
            font-size: 23px;
            margin-bottom: 10px;
        }

        .span {
            margin-bottom: 10px;
            margin-top: 10px;
            font-size: 18px;
            color: red;
        }

        .life__text {
            text-align: center;
            margin-top: 10px;
        }

        .life__start {
            margin-top: 10px;
        }

        .life__field {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
            `;

    };


})();