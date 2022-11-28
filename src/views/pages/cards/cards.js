import 'Scripts/plugins/datepicker';
import RoomSlider from 'Views/components/roomCard/roomCard';
import { DoubleDropdownDate } from '../../components/dropdownDate/dropdownDate.js';
import DropdownList from 'Views/components/dropdownList/dropdownList';

window.$ = require('jquery')
window.jQuery = require('jquery')


const firstGuestsList = [
  {
    title: 'Взрослые',
    declination: ['Взрослый', 'Взрослых', 'Взрослых'],
    value: 0
  },
  {
    title: 'Дети',
    declination: ['Ребенок', 'Ребенка', 'Детей'],
    value: 0
  },
  {
    title: 'Младенцы',
    declination: ['Младенец', 'Младенца', 'Младенцев'],
    value: 0
  },
];

const secondGuestsList = [
  {
    title: 'Взрослые',
    declination: ['Взрослый', 'Взрослых', 'Взрослых'],
    value: 2
  },
  {
    title: 'Дети',
    declination: ['Ребенок', 'Ребенка', 'Детей'],
    value: 1
  },
  {
    title: 'Младенцы',
    declination: ['Младенец', 'Младенца', 'Младенцев'],
    value: 0
  },
];

const summaryDeclination = ['Гость', 'Гостя', 'Гостей'];

$(document).ready(function () {
  // init DoubleDropdownDate component
  const [firstDateinput1, firstDateinput2] = document.querySelectorAll('input[name="date-arrival"]');
  const [secondDateinput1, secondDateinput2] = document.querySelectorAll('input[name="date-leaving"]');
  const datepicker1 = new DoubleDropdownDate(firstDateinput1, secondDateinput1)
  const datepicker2 = new DoubleDropdownDate(firstDateinput2, secondDateinput2, '2019.08.19', '2019.08.23')

  // init DropdownList component
  const [guestsList1, guestsList2] = document.querySelectorAll('.guests-list');
  const dropdownList1 = new DropdownList(guestsList1, firstGuestsList, true, summaryDeclination);
  const dropdownList2 = new DropdownList(guestsList2, secondGuestsList, true, summaryDeclination);


  // init datepicker card
  const datepickersInput = $('.cards__datepicker-input')
  const datepicker = datepickersInput.airDatepicker().data('airDatepicker');
  const today = new Date();
  const firstDate = new Date(today.getFullYear(), today.getMonth(),today.getDate()+4);
  const secondDate = new Date(today.getFullYear(), today.getMonth(),today.getDate()+8);

  datepickersInput.airDatepicker({
    range: true,
    todayButton: true,
    clearButton: true,
    minDate: new Date(),
    toggleSelected: true,
  });
  datepicker.selectDate(new Date(firstDate))
  datepicker.selectDate(new Date(secondDate))
  datepicker.show();

  // init RoomSlider component
  const roomSliders = document.querySelectorAll('.room-card__slick-slider');
  roomSliders.forEach((slider) => new RoomSlider(slider));
})


