import 'Scripts/plugins/datepicker';

window.$ = require('jquery')
window.jQuery = require('jquery')

export class doubleDropdownDate {
  constructor (firstInput, secondInput) {
    this.firstInput = $(firstInput)
    this.secondInput = $(secondInput)
    this.isShow = false
    this._initDatepicker()
    this._addEventListeners()
  }

  _initDatepicker () {
    const that = this
    this.datepicker = this.firstInput.datepicker().data('datepicker');
    this.firstInput.datepicker({
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
  }

  _addEventListeners () {
    const that = this
    this.firstInputButton  = $(this.firstInput).siblings('.dropdown-date__button');
    this.firstInputStatus = this.firstInputButton.children('.dropdown-date__arrow');
    this.secondInputButton = $(this.secondInput).siblings('.dropdown-date__button');
    this.secondInputStatus = this.secondInputButton.children('.dropdown-date__arrow');
    this.applyButton = $('.datepicker').find('span[data-action="today"]');
    document.addEventListener('click', outsideClick)


    function firstdateButtonClickHandler() {
      if (that.isShow) {
        that.datepicker.hide();
        that.isShow = false
        that.secondInputButton.attr('disabled', false);
        that.secondInput.attr('disabled', false);
        that.firstInputStatus.removeClass('dropdown-svg--opened');
        that.firstInputStatus.addClass('dropdown-svg--closed');
      } else {
        that.datepicker.show();
        that.isShow = true
        that.secondInputButton.attr('disabled', true);
        that.lastdate.attr('disabled', true);
        that.firstInputStatus.removeClass('dropdown-svg--closed');
        that.firstInputStatus.addClass('dropdown-svg--opened');
      }
    }

    function lastdateButtonClickHandler() {
      if (that.isShow) {
        that.datepicker.hide();
        that.isShow = false
        that.firstInputButton.attr('disabled', false);
        that.firstInput.attr('disabled', false);
        that.secondInputStatus.removeClass('dropdown-svg--opened');
        that.secondInputStatus.addClass('dropdown-svg--closed');
      } else {
        that.datepicker.show();
        that.isShow = true
        that.firstInputButton.attr('disabled', true);
        that.firstInput.attr('disabled', true);
        that.secondInputStatus.removeClass('dropdown-svg--closed');
        that.secondInputStatus.addClass('dropdown-svg--opened');
      }
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
      const { target } = e
      if (
        !(target.closest('.datepickers-container')
          || target.closest('.datepicker--cell')
          || target.closest('.datepicker--nav')
          || target.closest('.datepicker--nav-action')
          || target.closest('.datepicker--nav-title'))
        &&
        !target.closest('.dropdown-date__button')
      ) {
        that.datepicker.hide()
      }
    }

    function applyButtonClickHandler() {
      console.log(that.firstInput);
      that.firstInputStatus.removeClass('dropdown-date__arrow--open');
      that.secondInputStatus.removeClass('dropdown-date__arrow--open');
      that.firstInput.removeClass('show-datepicker');
      that.secondInput.removeClass('show-datepicker');
      that.firstInputButton.attr('disabled', false);
      that.firstInput.attr('disabled', false);
      that.secondInputButton.attr('disabled', false);
      that.secondInput.attr('disabled', false);
    }

    this.firstInputButton.on('click', firstdateButtonClickHandler);
    this.secondInputButton.on('click', lastdateButtonClickHandler);
    this.firstInput.on('keyup', validateInputData);
    this.secondInput.on('keyup', validateInputData);
    this.applyButton.on('click', applyButtonClickHandler);
  }
}