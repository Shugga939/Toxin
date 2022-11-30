import DropdownList from 'Views/components/dropdownList/dropdownList';
import Spoiler from 'Views/components/spoiler/spoiler';
import LikeButton from 'Views/components/likeButton/likeButton';
import RangeSlider from 'Views/components/rangeSlider/rangeSlider';
import Pagination from 'Views/components/pagination/pagination';


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

const guests_1 = [
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

const startPriceSliderValue = [5000, 10000]
const minmaxPriceSliderValue = [500, 15500]


$(document).ready(function () {
  // init DropdownList component of column-1
  const comfortsListContainer = document.querySelector('.comfort-list--expanded');
  const comfortsList = new DropdownList(comfortsListContainer, comfortList);
  comfortsList.openList()

  // init Spoiler components
  const spoilers = document.querySelectorAll('.spoiler');
  spoilers.forEach((spoilerContainer, index) =>  {
    const spoiler = new Spoiler(spoilerContainer);
    if (index == 1) spoiler.openSpoiler();
  });

  // init LikeButton components
  const likeButtons = document.querySelectorAll('.likeButton');
  likeButtons.forEach((button) => new LikeButton(button));

  // init DropdownList component of column-2
  const guestsListContainer_1 = document.querySelector('.guests-list-1');
  const guestsList_1 = new DropdownList(guestsListContainer_1, guests_1, true);
  guestsList_1.openList();

  // init RangeSlider component
  const sliderContainer = document.querySelector('#price-slider');
  const priceSlider = new RangeSlider(sliderContainer, startPriceSliderValue, minmaxPriceSliderValue)

  // init Pagination component
  const paginationContainer = document.querySelector('.pagination__container');
  new Pagination(paginationContainer);
})


