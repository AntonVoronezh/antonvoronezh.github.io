function makeCalendar() {

    // <div id="calendar"></div>
    // makeCalendar();

    const calendar = document.querySelector('#calendar');

    setStyle();
    makeMarking();

    const calendarInfo = calendar.querySelector('.calendar__info');
    const calendarDates = calendar.querySelector('.calendar__dates');
    const calendarPrev = calendar.querySelector('.calendar__prev');
    const calendarNext = calendar.querySelector('.calendar__next');

    const dateInint = new Date();

    const year = setupDates().year,
        month = setupDates().month,
        day = setupDates().day,
        date = setupDates().date;

    let monthNumber = month;
    let yearNumber = year;
    const arrMonths = ['январь', 'февраль', 'март', 'апрель', 'март', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

    createDatesTable(year, month, date, calendarDates);

    function createDatesTable(argYear, argMonth, argDate) {

        const daysInMonth = getLastDayOfMonth(argYear, argMonth);

        const firstDay = 1;

        const NumberOfFirstDayRussianVariant = getNumberOfDayRussianVariant(argYear, argMonth, firstDay);

        const NumberOfLastDayRussianVariant = getNumberOfDayRussianVariant(argYear, argMonth, daysInMonth);

        const countEmptyStartMonth = getCountEmpty(NumberOfFirstDayRussianVariant, 'start');

        const countEmptyFinishMonth = getCountEmpty(NumberOfLastDayRussianVariant, 'finish');

        const arrNumbers = makeArr(firstDay, daysInMonth);

        const arrNumbersWidthStartEmptys = makeArrWidthEmptys(arrNumbers, 'start', countEmptyStartMonth);

        const arrNumbersWidthFinishEmptys = makeArrWidthEmptys(arrNumbersWidthStartEmptys, 'finish', countEmptyFinishMonth);
        
        const chunkedArr = chunkArr(arrNumbersWidthFinishEmptys);
       
        makeTableFromArr(chunkedArr, calendarDates, argDate, argYear, argMonth);

        makeInfo(argYear, argMonth, calendarInfo);

    };

    calendarNext.addEventListener('click', getNextMonth);

    calendarPrev.addEventListener('click', getPrevMonth);

    function getPrevMonth() {

        clearTable();

        if (monthNumber > 0) {

            monthNumber -= 1;

        } else {

            yearNumber -= 1;

            monthNumber = arrMonths.length - 1;
        }

        createDatesTable(yearNumber, monthNumber, date, calendarDates);

    };

    function getNextMonth() {

        clearTable();

        if (monthNumber < arrMonths.length - 1) {

            monthNumber += 1;

        } else {

            yearNumber += 1;

            monthNumber = 0;

        }

        createDatesTable(yearNumber, monthNumber, date, calendarDates);

    };

    function clearTable() {

        calendarDates.innerHTML = '';

    };

    function makeInfo(argYear, argMonth, argElem) {

        argElem.innerHTML = ucFirst(arrMonths[argMonth]) + ' ' + argYear;

    };

    function ucFirst(argStr) {

        return argStr[0].toUpperCase() + argStr.slice(1);

    };

    function makeTableFromArr(argArr, argElem, argDate, argYear, argMonth) {

        for (let i = 0; i < argArr.length; i += 1) {

            const tr = document.createElement('tr');

            for (let j = 0; j < argArr[i].length; j += 1) {

                const td = document.createElement('td');

                td.innerHTML = argArr[i][j];

                td.classList.add('calendar__item');

                if (argArr[i][j] === argDate && argYear === year && argMonth === month) {

                    td.classList.add('calendar__item--active');

                }

                tr.appendChild(td);

            }

            argElem.appendChild(tr);

        }

    };

    function chunkArr(argArr) {

        const result = [];
        let chunk = [];

        let count = argArr.length / 7;

        for (let i = 0; i < count; i += 1) {

            chunk = argArr.splice(0, 7);

            result.push(chunk);

        }

        return result;

    };

    function makeArrWidthEmptys(argArr, argFlag, argNum) {

        if (argFlag === 'start') {

            for (let i = 0; i < argNum; i += 1) {

                argArr.unshift("");

            }

        }

        if (argFlag === 'finish') {

            for (let i = 0; i < argNum; i += 1) {

                argArr.push("");

            }

        }

        return argArr;

    };

    function makeArr(argFrom, argTo) {

        const arr = [];

        for (let i = argFrom; i <= argTo; i += 1) {

            arr.push(i)

        }

        return arr;

    };

    function getCountEmpty(argNum, argFlag) {

        let result = 0;

        if (argFlag === 'start') {

            result = argNum - 1;

        }

        if (argFlag === 'finish') {

            result = 7 - argNum;

        }

        return result;

    };

    function getNumberOfDayRussianVariant(argYear, argMonth, argDate) {

        let result = getNumberOfDay(argYear, argMonth, argDate);

        if (result === 0) {

            result = 7;

        }

        return result;

    };

    function getNumberOfDay(argYear, argMonth, argDate) {

        const date = new Date(argYear, argMonth, argDate);

        return date.getDay();

    };

    function getLastDayOfMonth(argYear, argMonth) {

        const date = new Date(argYear, argMonth + 1, 0);

        return date.getDate();

    };

    function setupDates(argDate) {

        if (argDate === undefined) {
            argDate = dateInint;
        }

        return {
            year: argDate.getFullYear(),
            month: argDate.getMonth(),
            day: argDate.getDay(),
            date: argDate.getDate()
        };

    };

    function makeMarking() {

        calendar.innerHTML = `
        <div class="calendar__wrap">
        <div class="calendar__info"></div>
        <div class="calendar__navigation">
            <a href="#" class="calendar__link  calendar__prev">&larr;</a>
            <a href="#" class="calendar__link  calendar__next">&rarr;</a>
        </div>
        </div>

        <table>
            <thead>
                <tr>
                    <td>Пн</td>
                    <td>Вт</td>
                    <td>Ср</td>
                    <td>Чт</td>
                    <td>Пт</td>
                    <td>Сб</td>
                    <td>Вс</td>
                </tr>
            </thead>
            <tbody class="calendar__dates"></tbody>
        </table>
        `;

    };

    function setStyle() {

        const style = document.querySelector('style');

        style.innerHTML = style.innerHTML + `
        #calendar {
            display: inline-block;
            border: 1px solid #ccc;
            padding: 3px;
        }

        .calendar__item {
            border: 1px solid #ccc;
            width: 25px;
            height: 15px;
            text-align: center;
        }

        .calendar__item--active {
            color: white;
            background-color: red;
        }

        .calendar__link {
            text-decoration: none;
        }

        .calendar__wrap {
            display: flex;
            justify-content: space-between;
        }
            `;

    };

};