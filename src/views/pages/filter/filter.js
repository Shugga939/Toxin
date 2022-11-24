import { SingleDropdownDate } from '../../components/dropdownDate/dropdownDate.js';
import DropdownList from 'Views/components/dropdownList/dropdownList';
import RangeSlider from 'Views/components/rangeSlider/rangeSlider';
import Spoiler from 'Views/components/spoiler/spoiler';
import RoomSlider from 'Views/components/roomCard/roomCard';


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

const startPriceSliderValue = [5000, 10000]
const minmaxPriceSliderValue = [500, 15500]


const summaryDeclination = ['Гость', 'Гостя', 'Гостей'];
const firstDate = new Date();
const secondDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()+4);

// init datepicker
const dateInput = document.querySelector('input[name="dates"]');
const datepicker = new SingleDropdownDate(dateInput, firstDate, secondDate)

// init DropdownList component
const guestsLists = document.querySelectorAll('.guests-list');
guestsLists.forEach((list) => new DropdownList(list, guestsList, true, summaryDeclination));

const comfortsList = document.querySelectorAll('.comfort-list');
comfortsList.forEach((list) => new DropdownList(list, comfortList));

// init RangeSlider component
const sliderContainer = document.querySelector('#price-slider');
const priceSlider = new RangeSlider(sliderContainer, startPriceSliderValue, minmaxPriceSliderValue)

// init Spoiler component
const spoilers = document.querySelectorAll('.spoiler');
spoilers.forEach((spoiler) => new Spoiler(spoiler));

// init RoomSlider component
const roomSliders = document.querySelectorAll('.room-card__slick-slider');
roomSliders.forEach((slider) => new RoomSlider(slider));