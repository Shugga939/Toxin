// import completions from '../../js/helpers/completions';

// export default class DropdownList {
//   constructor(container, dataList) {
//     this.container = container;
//     this.dataList = dataList;
//     this.inputContainer = container.querySelector('.dropdown-list__input-container');
//     this.input = container.querySelector('.dropdown-list__input');
//     this.list = container.querySelector('.dropdown-list__list');
//     this.list_wrapper = container.querySelector('.dropdown-list__list-wrapper');
//     this.svgArrow = container.querySelector('.dropdown-list__arrow');
//     this.isOpen = false;
//     this.items = [];
//     this._render();
//     this._renderButtons();
//     this._addListeners();
//     this._updateInput();
//   }

//   _render() {
//     this.dataList.forEach((data) => {
//       const listItem = new ListItem(data.title, data.value, data.declination);
//       this.items.push(listItem);
//       this.list.append(listItem.getItem());
//     });
//   }

//   _renderButtons() {
//     if (this.items.length) {
//       this.buttonsContainer = document.createElement('div');
//       this.buttonsContainer.classList.add('dropdown-list__buttons-container');
//       this.clearButton = document.createElement('button');
//       this.clearButton.classList.add('button', 'button--textual');
//       this.clearButton.textContent = 'Очистить';
//       this.confirmButton = document.createElement('button');
//       this.confirmButton.classList.add('button', 'button--textual');
//       this.confirmButton.textContent = 'Применить';
//       this.buttonsContainer.append(this.clearButton);
//       this.buttonsContainer.append(this.confirmButton);
//       this.list.append(this.buttonsContainer);
//     }
//   }

//   _updateInput() {
//     let result = '';
//     this.items.forEach((item) => {
//       const itemValue = item.getResult();
//       if (!result || itemValue === '') {
//         result += `${itemValue}`;
//       } else {
//         result += `, ${itemValue}`;
//       }
//     });
//     this.input.value = result;
//   }

//   _addListeners() {
//     const that = this;

//     function closeList() {
//       that.list_wrapper.style.maxHeight = '0px';
//       that.svgArrow.classList.remove('dropdown-svg--opened');
//       that.svgArrow.classList.add('dropdown-svg--closed');
//       that.input.classList.remove('dropdown-list__input--active');
//       that.isOpen = false;
//     }

//     function openList() {
//       that.list_wrapper.style.maxHeight = '500px  ';
//       that.svgArrow.classList.remove('dropdown-svg--closed');
//       that.svgArrow.classList.add('dropdown-svg--opened');
//       that.input.classList.add('dropdown-list__input--active');
//       that.isOpen = true;
//       document.addEventListener('click', outsideClick);
//     }

//     function toggleList() {
//       that.isOpen ? closeList() : openList();
//     }

//     function outsideClick(e) {
//       if (
//         !e.target.closest('.dropdown-list__list')
//         && e.target !== that.input
//         && e.target !== that.svgArrow
//       ) {
//         that._updateInput();
//         closeList();
//         document.removeEventListener('click', outsideClick);
//       }
//     }

//     function clear(e) {
//       e.preventDefault();
//       that.items.forEach((item) => item.resetCounter());
//       that.input.value = '';
//     }

//     function confirm(e) {
//       e.preventDefault();
//       that._updateInput();
//       closeList();
//     }

//     this.clearButton.addEventListener('click', clear);
//     this.confirmButton.addEventListener('click', confirm);
//     this.inputContainer.addEventListener('click', toggleList);
//   }
// }

// class ListItem {
//   constructor(name, value, declination) {
//     this.name = name;
//     this.value = value;
//     this.declination = declination;
//     this.item = document.createElement('div');
//     this.itemName = document.createElement('span');
//     this.counterContainer = document.createElement('div');
//     this.plusButton = document.createElement('button');
//     this.minusButton = document.createElement('button');
//     this.counter = document.createElement('span');
//     this._render();
//     this._addListeners();
//   }

//   _render() {
//     this.item.classList.add('dropdown-list__item');
//     this.itemName.classList.add('dropdown-list__item-name');
//     this.counterContainer.classList.add('dropdown-list__counter-container');
//     this.plusButton.classList.add('dropdown-list__button');
//     this.minusButton.classList.add('dropdown-list__button');
//     this.counter.classList.add('dropdown-list__counter');
//     this.itemName.textContent = `${this.name}`;
//     this.counter.textContent = `${this.value}`;
//     this.plusButton.textContent = '+';
//     this.minusButton.textContent = '-';
//     this.counterContainer.append(this.minusButton);
//     this.counterContainer.append(this.counter);
//     this.counterContainer.append(this.plusButton);
//     this.item.append(this.itemName);
//     this.item.append(this.counterContainer);

//     if (this.value === 0) {
//       this.minusButton.classList.add('dropdown-list__button--unactive');
//     }
//   }

//   _addListeners() {
//     const that = this;
//     function increment(e) {
//       e.preventDefault();
//       if (that.value === 0) {
//         that.minusButton.classList.remove('dropdown-list__button--unactive');
//       }
//       that.counter.textContent = ++that.value;
//     }

//     function decrement(e) {
//       e.preventDefault();
//       --that.value;
//       if (that.value <= 0) {
//         that.counter.textContent = 0;
//         that.value = 0;
//         that.minusButton.classList.add('dropdown-list__button--unactive');
//       } else {
//         that.counter.textContent = that.value;
//       }
//     }
//     this.plusButton.addEventListener('click', increment);
//     this.minusButton.addEventListener('click', decrement);
//   }

//   getItem() {
//     return this.item;
//   }

//   getResult() {
//     return this.value !== 0 ? completions(this.value, this.declination) : '';
//   }

//   resetCounter() {
//     this.value = 0;
//     this.counter.textContent = this.value;
//     this.minusButton.classList.add('dropdown-list__button--unactive');
//   }
// }
