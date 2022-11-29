import DropdownList from 'Views/components/dropdownList/dropdownList';

window.$ = require('jquery')
window.jQuery = require('jquery')


const comfortList = [
  {
    title: 'Спальни',
    declination: ['Спальня', 'Спальни', 'Спален'],
    value: 2
  },
  {
    title: 'Кровати',
    declination: ['Кровать', 'Кровати', 'Кроватей'],
    value: 2
  },
  {
    title: 'Ванные комнаты',
    declination: ['Ванная комната', 'Ванные комнаты', 'Ванных комнат'],
    value: 0
  },
];



$(document).ready(function () {
  const comfortsList = document.querySelectorAll('.comfort-list');
  comfortsList.forEach((list) => new DropdownList(list, comfortList));
})


