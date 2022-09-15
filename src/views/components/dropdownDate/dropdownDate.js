// import '../../js/plugins/datepicker';

// export default class doubleDropdownDate {
//   constructor (firstInput, secondInput) {
//     this.firstInput = firstInput
//     this.secondInput = secondInput
//     this.isShow = false
//     this._initDatepicker()
//     this._addEventListeners()
//   }

//   _initDatepicker () {
//     const input = $(this.firstInput)
//     this.datepicker = input.datepicker().data('datepicker');
//     input.datepicker({
//       range: true,
//       todayButton: true,
//       clearButton: true,
//       minDate: new Date(),
//       toggleSelected: true,
  
//       onSelect(date) {
//         firstdate.val(date.split(',')[0]);
//         lastdate.val(date.split(',')[1]);
//       }
//     });
//   }

//   _addEventListeners () {
//     const that = this
//     this.firstdateButton = $(this.firstInput).siblings('.dropdown-date__button');
//     this.firstdateButtonSvg = this.firstdateButton.children('.dropdown-date__arrow');
//     this.lastdateButton = $(this.secondInput).siblings('.dropdown-date__button');
//     this.lastdateButtonSvg = this.lastdateButton.children('.dropdown-date__arrow');
//     this.applyButton = $('.datepicker').find('span[data-action="today"]'); //eslint-disable-line


//     function firstdateButtonClickHandler() {
//       if (that.isShow) {
//         that.datepicker.hide();
//         that.isShow = false
//         // that.lastdateButton.attr('disabled', false);
//         // that.lastdate.attr('disabled', false);
//         that.firstdateButtonSvg.removeClass('dropdown-svg--opened');
//         that.firstdateButtonSvg.addClass('dropdown-svg--closed');
//       } else {
//         that.datepicker.show();
//         that.isShow = true
//         // that.lastdateButton.attr('disabled', true);
//         // that.lastdate.attr('disabled', true);
//         that.firstdateButtonSvg.removeClass('dropdown-svg--closed');
//         that.firstdateButtonSvg.addClass('dropdown-svg--opened');
//       }
//     }
//     function lastdateButtonClickHandler() {
//       if (that.isShow) {
//         that.datepicker.hide();
//         that.isShow = false
//         that.firstdateButton.attr('disabled', false);
//         that.firstdate.attr('disabled', false);
//         that.lastdateButtonSvg.removeClass('dropdown-svg--opened');
//         that.lastdateButtonSvg.addClass('dropdown-svg--closed');
//       } else {
//         that.datepicker.show();
//         that.isShow = true
//         that.firstdateButton.attr('disabled', true);
//         that.firstdate.attr('disabled', true);
//         that.lastdateButtonSvg.removeClass('dropdown-svg--closed');
//         that.lastdateButtonSvg.addClass('dropdown-svg--opened');
//       }
//     }

//     this.firstdateButton.on('click', firstdateButtonClickHandler);
//     this.lastdateButton.on('click', lastdateButtonClickHandler);
//   }
// }

// // export default function initDatePicker() {
// //   const firstdate = $('input[name="date-arrival"]');
// //   const lastdate = $('input[name="date-leaving"]');
// //   const datepicker = firstdate.datepicker().data('datepicker')

// //   function validateInputData(e) {  
// //     const { value } = e.currentTarget;
// //     e.currentTarget.value = value.replace(/[^.\d]/g, '').substr(0, 10);
// //     const backSpace = e.keyCode === 8;
// //     if (value.length === 2 || value.length === 5) {
// //       backSpace //eslint-disable-line
// //         ? e.currentTarget.value = value.slice(0, -1)
// //         : e.currentTarget.value = `${value}.`;
// //     }
// //   }

// //   function outsideClick(e) {
// //     const {target} = e
// //     if (
// //       !(target.closest('.datepickers-container')
// //       || target.closest('.datepicker--cell')
// //       || target.closest('.datepicker--nav')
// //       || target.closest('.datepicker--nav-action')
// //       || target.closest('.datepicker--nav-title'))
// //       &&
// //       !target.closest('.dropdown-date__button')
// //     ) {
// //       datepicker.hide()
      
// //     }
// //   }

// //   function initDoubleInputDatepicker() {
// //     const firstdateButton = firstdate.siblings('.dropdown-date__button');
// //     const firstdateButtonSvg = firstdateButton.children('.dropdown-date__arrow');
// //     const lastdateButton = lastdate.siblings('.dropdown-date__button');
// //     const lastdateButtonSvg = lastdateButton.children('.dropdown-date__arrow');
// //     const applyButton = $('.datepicker').find('span[data-action="today"]'); //eslint-disable-line
// //     document.addEventListener('click', outsideClick)
    
// //     function firstdateButtonClickHandler() {
// //       if (firstdate.hasClass('show-datepicker')) {
// //         datepicker.hide();
// //         lastdateButton.attr('disabled', false);
// //         lastdate.attr('disabled', false);
// //         firstdate.toggleClass('show-datepicker');
// //         firstdateButtonSvg.removeClass('dropdown-svg--opened');
// //         firstdateButtonSvg.addClass('dropdown-svg--closed');
// //       } else {
// //         datepicker.show();
// //         lastdateButton.attr('disabled', true);
// //         lastdate.attr('disabled', true);
// //         firstdate.toggleClass('show-datepicker');
// //         firstdateButtonSvg.removeClass('dropdown-svg--closed');
// //         firstdateButtonSvg.addClass('dropdown-svg--opened');
// //       }
// //     }

// //     function lastdateButtonClickHandler() {
// //       if (lastdate.hasClass('show-datepicker')) {
// //         datepicker.hide();
// //         firstdateButton.attr('disabled', false);
// //         firstdate.attr('disabled', false);
// //         lastdate.toggleClass('show-datepicker');
// //         lastdateButtonSvg.removeClass('dropdown-svg--opened');
// //         lastdateButtonSvg.addClass('dropdown-svg--closed');
// //       } else {
// //         datepicker.show();
// //         firstdateButton.attr('disabled', true);
// //         firstdate.attr('disabled', true);
// //         lastdate.toggleClass('show-datepicker');
// //         lastdateButtonSvg.removeClass('dropdown-svg--closed');
// //         lastdateButtonSvg.addClass('dropdown-svg--opened');
// //       }
// //     }

// //     function applyButtonClickHandler() {
// //       firstdateButtonSvg.removeClass('dropdown-date__arrow--open');
// //       lastdateButtonSvg.removeClass('dropdown-date__arrow--open');
// //       firstdate.removeClass('show-datepicker');
// //       lastdate.removeClass('show-datepicker');
// //       firstdateButton.attr('disabled', false);
// //       firstdate.attr('disabled', false);
// //       lastdateButton.attr('disabled', false);
// //       lastdate.attr('disabled', false);
// //     }

// //     firstdateButton.on('click', firstdateButtonClickHandler);
// //     lastdateButton.on('click', lastdateButtonClickHandler);
// //     applyButton.on('click', applyButtonClickHandler);
// //     firstdate.on('keyup', validateInputData);
// //     lastdate.on('keyup', validateInputData);
// //   }

// //   if (lastdate.length && firstdate.length) {
// //     // firstdate.datepicker({
// //     //   range: true,
// //     //   todayButton: true,
// //     //   clearButton: true,
// //     //   minDate: new Date(),
// //     //   toggleSelected: true,

// //     //   onSelect(date) {
// //     //     firstdate.val(date.split(',')[0]);
// //     //     lastdate.val(date.split(',')[1]);
// //     //   }
// //     // });
// //     initDoubleInputDatepicker();
// //   }

// //   // if (lastdate.length && firstdate.length) {
// //   //   firstdate.datepicker({
// //   //     range: true,
// //   //     todayButton: true,
// //   //     clearButton: true,
// //   //     minDate: new Date(),
// //   //     toggleSelected: true,

// //   //     onSelect: function (date) {
// //   //       firstdate.val(date.split(",")[0]);
// //   //       lastdate.val(date.split(",")[1]);
// //   //     }
// //   //   })
// //   // } else {
// //   //   firstdate.datepicker({
// //   //     range: true,
// //   //     todayButton: true,
// //   //     clearButton: true,
// //   //     minDate: new Date(),
// //   //     toggleSelected: true,
// //   //     multipleDatesSeparator: ' - ',
// //   //   })
// //   // }
// // }
