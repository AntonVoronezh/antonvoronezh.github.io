(function() {
	const settings = {
		elem: document.querySelector('#sort'),
		bigDataPath: 'http://127.0.0.1:5500/data/big.json',
		smallDataPath: 'http://127.0.0.1:5500/data/small.json',
		info: ['id', 'name', 'username', 'email', 'website'],
		infoRus: {
			id: 'Выбран пользователь с ID: ',
			name: 'Его имя: ',
			username: 'Его никнейм: ',
			email: 'Его почта: ',
			website: 'Его сайт: ',
		},
		elemPreloader: document.querySelector('#preloader'),
		isLoading: false,
		load: 'загружаю...',
		elemOptionally: document.querySelector('#optionally'),
		elemSearch: document.querySelector('#search'),
		chunkSize: 50,
	};

	class Init {
		constructor(settings) {
			this._settings = settings;
			this._start();
		}

		_start() {
			const { elem: parent, bigDataPath, smallDataPath } = this._settings;

			const buttonSmall = new CreateElement('button', 'Мало данных').get();
			const buttonBig = new CreateElement('button', 'Много данных').get();

			buttonSmall.addEventListener('click', () => {
				new Clean(parent);
				new Draw(smallDataPath, this._settings);
				new Sort(this._settings);
				new AddOptionally(this._settings);
				new Search(this._settings);
				new Chunk(this._settings);
			});

			buttonBig.addEventListener('click', () => {
				new Clean(parent);
				new Draw(bigDataPath, this._settings);
				new Sort(this._settings);
				new AddOptionally(this._settings);
				new Search(this._settings);
				new Chunk(this._settings);
			});

			parent.appendChild(buttonSmall);
			parent.appendChild(buttonBig);
		}
	}

	class Chunk {
		constructor({ table, chunkSize }) {
			this._table = table;
			this._size = chunkSize;

			this._getChunk();
		}

		_getChunk() {
			const tbody = this._table.querySelector('tbody');
			const tr = tbody.querySelectorAll('tr');

			this._chunk(tr, this._size);
		}

		_chunk(coll, size) {
			const iter = (iterColl, acc = []) => {
				if (iterColl.length === 0) {
					return acc;
				}
				return iter(iterColl.slice(size), [...acc, iterColl.slice(0, size)]);
			};

			return iter(coll);
		}
	}

	class Search {
		constructor({ table, elemSearch }) {
			this._table = table;
			this._elem = elemSearch;

			this._search();
		}

		_search() {
			const [text, button] = this._elem.querySelectorAll('input');

			button.addEventListener('click', () => {
				const tbody = this._table.querySelector('tbody');
				const tr = tbody.querySelectorAll('tr');

				tr.forEach(elem => {
					if (elem.innerText.toLowerCase().indexOf(text.value) === -1) {
						elem.classList.add('hide');
					}
				});
			});
		}
	}

	class AddOptionally {
		constructor({ table, infoRus, elemOptionally }) {
			this._table = table;
			this._infoRus = infoRus;
			this._elem = elemOptionally;

			this._option();
		}

		_option() {
			this._table.querySelector('tbody').addEventListener('click', event => {
				const elems = event.path[1].querySelectorAll('td');
				let result = '';

				elems.forEach(elem => {
					result += `<i>${this._infoRus[elem.dataset.name]}</i> <b>${elem.innerHTML}</b><br>`;
				});

				this._elem.innerHTML = result;
			});
		}
	}

	class Sort {
		constructor({ table }) {
			this._table = table;
			
			this._sort();
		}

		_sort() {
			this._table.querySelector('thead').addEventListener('click', event => {
				this._getSort(event);
			});
		}

		_getSort({ target }) {
			const order = (target.dataset.order = -(target.dataset.order || -1));
			const index = [...target.parentNode.cells].indexOf(target);
			const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
			const comparator = (index, order) => (a, b) =>
				order * collator.compare(a.children[index].innerHTML, b.children[index].innerHTML);

			for (let tBody of target.closest('table').tBodies) {
				tBody.append(...[...tBody.rows].sort(comparator(index, order)));
			}

			for (let cell of target.parentNode.cells) {
				cell.classList.toggle('sorted', cell === target);
			}
		}
	}

	class Draw {
		constructor(dataPath, settings) {
			this._table = new CreateElement('table', '').get();
			this._table.classList.add('table_sort');
			this._thead = new CreateElement('thead', '').get();
			this._table.appendChild(this._thead);
			this._tbody = new CreateElement('tbody', '').get();
			this._table.appendChild(this._tbody);

			settings.table = this._table;
			this._parent = settings.elem;
			this._info = settings.info;
			this._makeTable();
			this._makePreloader();
			this._data = new getData(dataPath, settings);
		}

		_makeTable() {
			const obj = {};
			for (let key in this._info) {
				obj[this._info[key]] = `${this._info[key]} `;
			}

			new CreateRow(obj, this._thead, this._info, true);
			this._parent.appendChild(this._table);
		}

		_makePreloader() {
			new Preloader(settings);
		}
	}

	class Preloader {
		constructor(settings) {
			this._isLoading = settings.isLoading;
			this._loadElem = settings.load;
			this._parent = settings.elemPreloader;
			settings.isLoading = !this._isLoading;

			this._toggle();
		}

		_toggle() {
			!this._isLoading ? (this._parent.innerHTML = this._loadElem) : (this._parent.innerHTML = '');
		}
	}

	class Clean {
		constructor(elem) {
			this._elem = elem;
			this._elem.innerHTML = '';
		}
	}

	class getData {
		constructor(dataPath, settings) {
			this._url = dataPath;
			this._settings = settings;
			this._isLoading = this._settings.isLoading;

			this._load();
		}

		async _load() {
			const { table, info } = this._settings;

			try {
				const response = await this._sleep(1000).then(() => fetch(this._url));
				const data = await response.json();

				this._makePreloader();
				this._makeSearch();

				await data.map(elem => {
					new CreateRow(elem, table.querySelector('tbody'), info);
				});
			} catch (err) {
				console.log(err);
			}
		}

		_sleep(ms) {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve();
				}, ms);
			});
		}

		_makePreloader() {
			new Preloader(settings);
		}

		_makeSearch() {
			const { elemSearch } = this._settings;
			elemSearch.classList.remove('hide');
		}
	}

	class CreateRow {
		constructor(elem, parent, info, flag) {
			this._tr = new CreateElement('tr', '').get();
			parent.appendChild(this._tr);
			new CreateSell(elem, this._tr, info, flag);
		}
	}

	class CreateSell {
		constructor(elem, parent, info, flag) {
			this._elem = elem;
			this._info = info;
			this._parent = parent;
			this._flag = flag;

			this._create(this._info);
		}

		_create(arr) {
			for (let key in arr) {
				let td;
				this._flag ? (td = new CreateElement('th', '').get()) : (td = new CreateElement('td', '').get());

				td.dataset.name = arr[key];

				this._flag
					? (td.innerHTML = this._elem[arr[key]].toUpperCase())
					: (td.innerHTML = this._elem[arr[key]]);
				this._parent.appendChild(td);
			}
		}
	}

	class CreateElement {
		constructor(name, secondArg) {
			this._name = name;
			this._secondArg = secondArg;
			this._elem = this._make();
		}

		_make() {
			let elem = document.createElement(this._name);
			if (this._secondArg && this._name === 'button') {
				elem.innerHTML = this._secondArg;
			}
			return elem;
		}

		get = () => this._elem;
	}

	new Init(settings);
})();
