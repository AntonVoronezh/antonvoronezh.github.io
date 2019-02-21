(function dots() {

    // const dots = document.querySelector('#dots');

    const settings = {

        dots: document.querySelector('#dots'),
        row: 30,
        col: 30,
        table_class: {
            table: 'dots__table',
            row: 'dots__tr',
            col: 'dots__td'
        },
        gamers: {
            gamer1: 'gamer1',
            gamer2: 'gamer2'

        },
        occupied: 'occupied',
        win: 'win',
        win_text: 'Победа'

    };

    class Game {

        constructor(argParentElem, argRowNum, argColNum) {

            this._endGame = false;

            this._parent = argParentElem;

            this._row = argRowNum;

            this._col = argColNum;

            const game = new Html(this._parent, this._row, this._col).createField();

            this._run();

        }

        _run() {

            const elem = settings.table;

            const allDots = new Dots();

            const queue = new Queue();

            elem.addEventListener('click', () => {

                if (event.target.classList.contains(settings.table_class.col)) {

                    if (!this._endGame) {

                        new Dot(event.target, allDots, queue);

                    }
                }

            });

        }

        end(argGamer) {

            this._endGame = true;

            settings.table.firstChild.classList.add(settings.win);

            settings.table.firstChild.innerHTML = settings.win_text + ' ' + argGamer;

        }

    };


    class Dot {

        constructor(argElem, argObjForElems, argQueue) {

            this._elem = argElem;

            this._queue = argQueue;

            this._coordinates = new Revision(this._elem).getCoordinates();

            argObjForElems.addDot(this._elem, this._coordinates);

            const gamer = this._makeColor();

            const neighbors = new Neighbors(this._coordinates, argObjForElems, gamer);

            const allNeighbors = neighbors.getNeighbors();

        }

        _makeColor() {

            if (!this._elem.classList.contains(settings.occupied)) {

                let cl = this._queue.getNextGamer();

                this._elem.classList.add(cl);

                this._elem.classList.add(settings.occupied);

                return cl;

            }

        }

    };

    class Queue {

        constructor() {

            this._num = 0;

            this._arr = settings.gamers;

        }

        _changeNum() {

            let count = 0;

            for (let key in this._arr) {

                count += 1;

            }

            this._num += 1;

            if (this._num >= count) {

                this._num = 0;

            }

        }

        getNextGamer() {

            this._changeNum();

            return Object.keys(this._arr)[this._num];

        }

    };

    class Win {

        constructor(argDirection, argCoord, argGamer, argObjForElems) {

            this._col = argCoord[0];

            this._row = argCoord[1];

            this._deltaCol = argDirection[0];

            this._deltaRow = argDirection[1];

            this._gamer = argGamer;

            this._objForElems = argObjForElems;

            this._result = ['', ''];


        }

        checkCell() {

            this._checkOne();

            return this._result.length > 4;

        }

        _checkOne() {

            if (this._getCell()) {

                this._result.push('');

                this._checkOne();

            }

        }

        _getCell() {

            const realCoordinatsCol = this._col + this._deltaCol;

            const realCoordinatsRow = this._row + this._deltaRow;

            this._col = realCoordinatsCol;

            this._row = realCoordinatsRow;

            return this._objForElems.hasElem(realCoordinatsCol, realCoordinatsRow, this._gamer);

        }

    };


    class Neighbors {

        constructor(argCoordinates, argObjForElems, argGamer) {

            this._coordinates = argCoordinates;

            this._gamer = argGamer;

            this._argObjForElems = argObjForElems;

            this._adresses = [

                [-1, 0], [-1, 1], [0, 1], [1, 1],

                [1, 0], [1, -1], [0, -1], [-1, -1]

            ];

        }

        getNeighbors() {

            for (let delta in this._adresses) {

                const direction = this._adresses[delta];

                const realCoord = this._getRealCoordinates(direction);

                const checkedElem = this._checkNeighbors(realCoord);

                if (checkedElem) {

                    const win = new Win(direction, realCoord, this._gamer, this._argObjForElems);

                    if (win.checkCell()) {

                        game.end(this._gamer);

                    }

                }

            }

        }

        _checkNeighbors(argCoordinates) {

            const [col, row] = argCoordinates;

            return this._argObjForElems.hasElem(col, row, this._gamer);

        }

        _getRealCoordinates(argDelta) {

            const [col, row] = this._coordinates;

            const [deltaCol, deltaRow] = argDelta;

            const realCoordinatsCol = col + deltaCol;

            const realCoordinatsRow = row + deltaRow;

            return [realCoordinatsCol, realCoordinatsRow];

        }

    };

    class Dots {

        constructor() {

            this._objForElems = new Map;

        }

        addDot(argElem, argCoordinates) {

            const [col, row] = argCoordinates;

            if (!this._objForElems.has(col)) {

                let rowMap = new Map;

                rowMap.set(row, argElem);

                this._objForElems.set(col, rowMap);

            } else {

                let map = this._objForElems.get(col);

                map.set(row, argElem);

            }

        }

        getObj() {

            // console.log('Dots.getObj()', this._objForElems.size, this._objForElems);

        }

        hasElem(argCol, argRow, argElem) {

            if (this._objForElems.has(argCol)) {

                let map = this._objForElems.get(argCol);

                if (map.has(argRow)) {

                    let mapRow = map.get(argRow);

                    if (mapRow.classList.contains(argElem)) {

                        return true;

                    }

                }

            } else {

                return false;

            }

        }

    };

    class Revision {

        constructor(argElem) {

            this._elem = argElem;

        }

        getCoordinates() {

            return [this._getCol(), this._getRow()];

        }

        _getRow() {

            let result = 0;

            let prev = this._elem.previousSibling;

            while (prev) {

                prev = prev.previousSibling;

                result += 1;

            }

            return result;

        }

        _getCol() {

            let result = 0;

            let prev = this._elem.parentElement.previousSibling;

            while (prev) {

                prev = prev.previousSibling;

                result += 1;

            }

            return result;

        }

    };


    class Html {
        // row - строка (tr)
        // col - колонка (td)

        constructor(argParentElem, argRowNum, argColNum) {

            this._parent = argParentElem;

            this._row = argRowNum;

            this._col = argColNum;

        }

        createField() {

            const table = document.createElement('table');

            table.classList.add(settings.table_class.table);

            const caption = document.createElement('caption');

            table.appendChild(caption);

            for (let i = 0; i < this._row; i += 1) {

                const row = document.createElement('tr');

                for (let j = 0; j < this._col; j += 1) {

                    const col = document.createElement('td');

                    col.classList.add(settings.table_class.col);

                    row.appendChild(col);

                };

                table.appendChild(row);

            };

            this._parent.appendChild(table);

            settings.table = document.querySelector('.' + settings.table_class.table);

        }

    };

    const game = new Game(settings.dots, settings.row, settings.col);

})();   