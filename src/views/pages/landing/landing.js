import './landing.scss';
import initHeader from '../../components/header/header.js';
import doubleDropdownDate from '../../components/dropdownDate/dropdownDate.js';
import DropdownList from '../../components/dropdownList/dropdownList';

const guestsList = [
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

initHeader();
const firstDateinput = document.querySelector('input[name="date-arrival"]');
const secondDateinput = document.querySelector('input[name="date-leaving"]');
const datepicker = new doubleDropdownDate(firstDateinput, secondDateinput)
const guestsLists = document.querySelectorAll('.guests-list');
guestsLists.forEach((list) => new DropdownList(list, guestsList));
