import { singleDropdownDate } from '../../components/dropdownDate/dropdownDate.js';
import DropdownList from 'Views/components/dropdownList/dropdownList';
import rangeSlider from 'Views/components/rangeSlider/rangeSlider';


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

const startPriceSliderValue = [5000, 10000]
const minmaxPriceSliderValue = [500, 15500]


const summaryDeclination = ['Гость', 'Гостя', 'Гостей'];
const firstDate = new Date();
const secondDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()+4);

// init datepicker
const dateInput = document.querySelector('input[name="dates"]');
const datepicker = new singleDropdownDate(dateInput, firstDate, secondDate)

// init DropdownList component
const guestsLists = document.querySelectorAll('.guests-list');
guestsLists.forEach((list) => new DropdownList(list, guestsList, summaryDeclination));

// init rangeSlider component
const sliderContainer = document.querySelector('#price-slider');
const priceSlider = new rangeSlider(sliderContainer, startPriceSliderValue, minmaxPriceSliderValue)
