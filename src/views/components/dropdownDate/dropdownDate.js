import 'Scripts/plugins/datepicker';

export class DoubleDropdownDate {
  constructor(firstInput, secondInput, firstDate, secondDate) {
    this.firstInput = $(firstInput)
    this.secondInput = $(secondInput)
    this.firstDate = firstDate || null
    this.secondDate = secondDate || null
    this.isShow = false
    this._initDatepicker()
    this._addEventListeners()
  }

  _initDatepicker() {
    const that = this
    this.datepicker = this.firstInput.airDatepicker().data('airDatepicker');
    this.firstInput.attr('disabled', false)
    this.firstInput.airDatepicker({
      range: true,
      todayButton: true,
      clearButton: true,
      minDate: new Date(),
      toggleSelected: true,

      onSelect(date) {
        that.firstInput.val(date.split(',')[0]);
        that.secondInput.val(date.split(',')[1]);
      }
    });
    if (this.firstDate) {
      this.datepicker.selectDate(new Date(this.firstDate))
    }
    if (this.secondDate) {
      this.datepicker.selectDate(new Date(this.secondDate))
    }
  }

  _addEventListeners() {
    const that = this
    this.firstInputButton = $(this.firstInput).siblings('.dropdown-date__button');
    this.firstInputStatus = this.firstInputButton.children('.dropdown-date__status');
    this.secondInputButton = $(this.secondInput).siblings('.dropdown-date__button');
    this.secondInputStatus = this.secondInputButton.children('.dropdown-date__status');
    this.applyButton = $('.airDatepicker').find('span[data-action="today"]');

    function openDatepicker(triggeredButtonIsFirst) {
      document.addEventListener('click', outsideClick)
      that.datepicker.show();
      that.isShow = true
      that.firstInput.attr('disabled', true);
      that.secondInput.attr('disabled', true);

      if (triggeredButtonIsFirst) {
        that.secondInputButton.attr('disabled', true);
        that.firstInputStatus.removeClass('dropdown-svg--closed');
        that.firstInputStatus.addClass('dropdown-svg--opened');
      } else {
        that.firstInputButton.attr('disabled', true);
        that.secondInputStatus.removeClass('dropdown-svg--closed');
        that.secondInputStatus.addClass('dropdown-svg--opened');
      }
    }

    function closeDatepicker() {
      document.removeEventListener('click', outsideClick)
      that.datepicker.hide();
      that.isShow = false
      that.secondInputButton.attr('disabled', false);
      that.firstInputButton.attr('disabled', false);
      that.firstInput.attr('disabled', false);
      that.secondInput.attr('disabled', false);

      if (that.firstInputStatus.hasClass('dropdown-svg--opened')) {
        that.firstInputStatus.removeClass('dropdown-svg--opened');
        that.firstInputStatus.addClass('dropdown-svg--closed');
      }
      if (that.secondInputStatus.hasClass('dropdown-svg--opened')) {
        that.secondInputStatus.removeClass('dropdown-svg--opened');
        that.secondInputStatus.addClass('dropdown-svg--closed');
      }
    }

    function buttonsClickHandler(e) {
      const triggeredButtonIsFirst = e.currentTarget == that.firstInputButton[0]
      that.isShow? closeDatepicker() : openDatepicker(triggeredButtonIsFirst)
    }

    function validateInputData(e) {
      const { value } = e.currentTarget;
      e.currentTarget.value = value.replace(/[^.\d]/g, '').substr(0, 10);
      const backSpace = e.keyCode === 8;
      if (value.length === 2 || value.length === 5) {
        backSpace
          ? e.currentTarget.value = value.slice(0, -1)
          : e.currentTarget.value = `${value}.`;
      }
    }

    function outsideClick(e) {
      if (that.isShow) {
        const { target } = e
        const targetIsButton = target.closest('.dropdown-date__button')
        const targetIsDatePicker = target.closest('.datepickers-container')
        || target.closest('.airDatepicker')
        || target.closest('.airDatepicker--cell')
        || target.closest('.airDatepicker--nav-action')
        || target.closest('.airDatepicker--nav-title')
  
        if (!targetIsDatePicker && !targetIsButton) {
          closeDatepicker()
        }
      }
    }

    this.firstInputButton.on('click', buttonsClickHandler);
    this.secondInputButton.on('click', buttonsClickHandler);
    this.firstInput.on('keyup', validateInputData);
    this.secondInput.on('keyup', validateInputData);
    this.applyButton.on('click', closeDatepicker);
  }
}

export class SingleDropdownDate {
  constructor(input, firstDate, secondDate) {
    this.input = $(input)
    this.firstDate = firstDate || null
    this.secondDate = secondDate || null
    this.isShow = false
    this._initDatepicker()
    this._addEventListeners()
  }

  _initDatepicker() {
    const that = this
    this.datepicker = this.input.airDatepicker().data('airDatepicker');
    this.input.airDatepicker({
      range: true,
      todayButton: true,
      minDate: new Date(),
      clearButton: true,
      toggleSelected: true,
      multipleDatesSeparator: ' - ',
    });

    if (this.firstDate) {
      this.datepicker.selectDate(new Date(this.firstDate))
    }
    if (this.secondDate) {
      this.datepicker.selectDate(new Date(this.secondDate))
    }
  }

  _addEventListeners() {
    const that = this
    this.inputButton = $(this.input).siblings('.dropdown-date__button');
    this.inputStatus = this.inputButton.children('.dropdown-date__status');
    this.applyButton = $('.airDatepicker').find('span[data-action="today"]');

    function openDatepicker() {
      document.addEventListener('click', outsideClick)
      that.datepicker.show();
      that.isShow = true
      that.inputStatus.removeClass('dropdown-svg--closed');
      that.inputStatus.addClass('dropdown-svg--opened');
    }

    function closeDatepicker() {
      document.removeEventListener('click', outsideClick)
      that.datepicker.hide();
      that.isShow = false
      that.inputStatus.removeClass('dropdown-svg--opened');
      that.inputStatus.addClass('dropdown-svg--closed');
    }

    function сlickHandler(e) {
      that.isShow? closeDatepicker() : openDatepicker()
    }

    function outsideClick(e) {
      if (that.isShow) {
        const { target } = e
        const targetIsButton = target.closest('.dropdown-date__button')
        const targetIsDatePicker = target.closest('.datepickers-container')
          || target.closest('.dropdown-date__label')
          || target.closest('.airDatepicker')
          || target.closest('.airDatepicker--cell')
          || target.closest('.airDatepicker--nav-action')
          || target.closest('.airDatepicker--nav-title')
          
        if (!targetIsDatePicker && !targetIsButton) {
          closeDatepicker()
        }
      }
    }

    this.input.on('click', сlickHandler);
    this.inputButton.on('click', сlickHandler);
    this.applyButton.on('click', closeDatepicker);
  }
}