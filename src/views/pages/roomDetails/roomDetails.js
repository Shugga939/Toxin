// import { doubleDropdownDate } from '../../components/dropdownDate/dropdownDate.js';
import PieChart from 'Views/components/pieChart/pieChart';

// const firstDateinput = document.querySelector('input[name="date-arrival"]');
// const secondDateinput = document.querySelector('input[name="date-leaving"]');
// const datepicker = new doubleDropdownDate(firstDateinput, secondDateinput)

const pieChartRoot = document.querySelector('.pie-chart');
const pieChart = new PieChart(pieChartRoot);

