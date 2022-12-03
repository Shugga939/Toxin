import completions from 'Scripts/helpers/completions';

export default class DropdownList {
  constructor(container, dataList, withButtons, summaryDeclination) {
    this.container = container;
    this.dataList = dataList;
    this.withButtons = withButtons
    this.summaryDeclination = false || summaryDeclination
    this.isOpen = false;
    this.items = [];
    this.itemsValueIsZero = [];
    this._render();
    this._addListeners();
    this._updateInput();
  }

  _render() {
    this.inputContainer = this.container.querySelector('.dropdown-list__input-container');
    this.input = this.container.querySelector('.dropdown-list__input');
    this.list = this.container.querySelector('.dropdown-list__list');
    this.list_wrapper = this.container.querySelector('.dropdown-list__list-wrapper');
    this.status = this.container.querySelector('.dropdown-list__status');

    this.__renderItems();
    if (this.withButtons) this._renderButtons();
  }

  __renderItems() {
    this.dataList.forEach((data, index) => {
      const listItem = new ListItem(
        data.title, data.value,
        data.declination, 
        index, 
        this.checkValuesForZero.bind(this)
      );
      this.itemsValueIsZero.push(data.value >0 ? false : true)
      this.items.push(listItem);
      this.list.append(listItem.getItem());
    });
  }

  _renderButtons() {
    if (this.items.length) {
      this.buttonsContainer = document.createElement('div');
      this.buttonsContainer.classList.add('dropdown-list__buttons-container');
      this.clearButton = document.createElement('button');
      this.clearButton.classList.add('button', 'button--textual');
      this.clearButton.textContent = 'Очистить';
      this.confirmButton = document.createElement('button');
      this.confirmButton.classList.add('button', 'button--textual');
      this.confirmButton.textContent = 'Применить';
      this.buttonsContainer.append(this.clearButton);
      this.buttonsContainer.append(this.confirmButton);
      this.list.append(this.buttonsContainer);

      this.itemsValueIsZero.forEach((val, index)=> this.checkValuesForZero(index, val))
    }
  }

  _updateInput() {
    let result = '';
    this.items.forEach((item) => {
      this.summaryDeclination? concatIfSummary(item) : defaultConcat(item)
    });
    if (this.summaryDeclination && result !== '') result = completions(result, this.summaryDeclination)
    this.input.value = result;

    function defaultConcat (item) {
      const itemValue = item.getResult();

      if (!result || itemValue === '') {
        result += `${itemValue}`;
      } else {
        result += `, ${itemValue}`;
      }
    }

    function concatIfSummary (item) {
      const itemValue = item.getValue();
      result = Number(result) + itemValue;
      if (result === 0) result = ''
    }
  }

  _addListeners() {
    const that = this;

    that.closeList = function () {
      that.list.style.borderColor = 'rgba(31, 32, 65, 0.25)'
      that.list_wrapper.style.maxHeight = '0px';
      that.list_wrapper.style.opacity = 0.7,
      that.status.classList.remove('dropdown-svg--opened');
      that.status.classList.add('dropdown-svg--closed');
      that.input.classList.remove('dropdown-list__input--active');
      that.isOpen = false;
    }

    that.openList = function () {
      that.list.style.borderColor = 'rgba(31, 32, 65, 0.5)'
      that.list_wrapper.style.maxHeight = '500px';
      that.list_wrapper.style.opacity = 1,
      that.status.classList.remove('dropdown-svg--closed');
      that.status.classList.add('dropdown-svg--opened');
      that.input.classList.add('dropdown-list__input--active');
      that.isOpen = true;
      document.addEventListener('click', outsideClick);
    }

    function toggleList(e) {
      e.stopPropagation()
      that.isOpen ? that.closeList() : that.openList();
    }

    function outsideClick(e) {
      if (
        !e.target.closest('.dropdown-list__list')
        && e.target !== that.input
        && e.target !== that.status
      ) {
        that._updateInput();
        that.closeList();
        document.removeEventListener('click', outsideClick);
      }
    }

    function clear(e) {
      e.preventDefault();
      that.items.forEach((item, index) => {
        item.resetCounter()
        that.itemsValueIsZero[index] = true
      });
      that.input.value = '';
      that._hideClearButton();
    }

    function confirm(e) {
      e.preventDefault();
      that._updateInput();
      that.closeList();
    }

    if (this.withButtons) {
      this.clearButton.addEventListener('click', clear);
      this.confirmButton.addEventListener('click', confirm);
      this.confirmButton.addEventListener('click', (e)=> {
        if (e.keyCode==13) confirm(e)
      });
    }
    this.inputContainer.addEventListener('click', toggleList);
    this.inputContainer.addEventListener('keypress', (e)=> {
      if (e.keyCode==13) toggleList(e)
    });
  }

  checkValuesForZero (index, bool) {
    if (this.withButtons) {
      this.itemsValueIsZero[index] = bool

      if (this.itemsValueIsZero.some((val) => val == false)) {
        this._showClearButton();
      } else {
        this._hideClearButton();
      }
    }
  }

  _hideClearButton () {
    this.clearButton.style.display = 'none'
    this.buttonsContainer.classList.add('dropdown-list__buttons-container--one-button');
  }

  _showClearButton () {
    this.clearButton.style.display = 'block'
    this.buttonsContainer.classList.remove('dropdown-list__buttons-container--one-button');
  }
}

class ListItem {
  constructor(name, value, declination, index, checkValuesForZero) {
    this.name = name;
    this.value = value;
    this.declination = declination;
    this.index = index;
    this.callbackFn = checkValuesForZero;
    this.item = document.createElement('div');
    this.itemName = document.createElement('span');
    this.counterContainer = document.createElement('div');
    this.plusButton = document.createElement('button');
    this.minusButton = document.createElement('button');
    this.counter = document.createElement('span');
    this._render();
    this._addListeners();
  }

  _render() {
    this.item.classList.add('dropdown-list__item');
    this.itemName.classList.add('dropdown-list__item-name');
    this.counterContainer.classList.add('dropdown-list__counter-container');
    this.plusButton.classList.add('dropdown-list__button');
    this.minusButton.classList.add('dropdown-list__button');
    this.counter.classList.add('dropdown-list__counter');
    this.itemName.textContent = `${this.name}`;
    this.counter.textContent = `${this.value}`;
    this.plusButton.textContent = '+';
    this.minusButton.textContent = '-';
    this.counterContainer.append(this.minusButton);
    this.counterContainer.append(this.counter);
    this.counterContainer.append(this.plusButton);
    this.item.append(this.itemName);
    this.item.append(this.counterContainer);

    if (this.value === 0) {
      this.minusButton.classList.add('dropdown-list__button--unactive');
    }
  }

  _addListeners() {
    const that = this;
    function increment(e) {
      e.preventDefault();
      if (that.value === 0) {
        that.minusButton.classList.remove('dropdown-list__button--unactive');
        that.callbackFn(that.index, false)
      }
      that.counter.textContent = ++that.value;
    }

    function decrement(e) {
      e.preventDefault();
      --that.value;
      if (that.value <= 0) {
        that.counter.textContent = 0;
        that.value = 0;
        that.minusButton.classList.add('dropdown-list__button--unactive');
        that.callbackFn(that.index, true)
      } else {
        that.counter.textContent = that.value;
      }
    }
    this.plusButton.addEventListener('click', increment);
    this.minusButton.addEventListener('click', decrement);
  }

  getItem() {
    return this.item;
  }

  getResult() {
    return this.value !== 0 ? completions(this.value, this.declination) : '';
  }

  getValue() {
    return this.value
  }

  resetCounter() {
    this.value = 0;
    this.counter.textContent = this.value;
    this.minusButton.classList.add('dropdown-list__button--unactive');
  }
}
