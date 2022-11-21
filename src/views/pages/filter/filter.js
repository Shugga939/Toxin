// import PieChart from 'Views/components/pieChart/pieChart';
// import LikeButton from 'Views/components/likeButton/likeButton';
import { singleDropdownDate } from '../../components/dropdownDate/dropdownDate.js';
// import DropdownList from 'Views/components/dropdownList/dropdownList';

// const guestsList = [
//   {
//     title: 'Взрослые',
//     declination: ['Взрослый', 'Взрослых', 'Взрослых'],
//     value: 2
//   },
//   {
//     title: 'Дети',
//     declination: ['Ребенок', 'Ребенка', 'Детей'],
//     value: 1
//   },
//   {
//     title: 'Младенцы',
//     declination: ['Младенец', 'Младенца', 'Младенцев'],
//     value: 0
//   },
// ];

// const summaryDeclination = ['Гость', 'Гостя', 'Гостей'];
const firstDate = new Date();
const secondDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()+4);

// init datepicker
const dateInput = document.querySelector('input[name="dates"]');
const datepicker = new singleDropdownDate(dateInput, firstDate, secondDate)

// // init pieChart
// const pieChartRoot = document.querySelector('.pie-chart');
// const pieChart = new PieChart(pieChartRoot);

// // init DropdownList component
// const guestsLists = document.querySelectorAll('.guests-list');
// guestsLists.forEach((list) => new DropdownList(list, guestsList, summaryDeclination));

// // init LikeButton component
// const likeButtons = document.querySelectorAll('.likeButton');
// likeButtons.forEach((button) => new LikeButton(button));