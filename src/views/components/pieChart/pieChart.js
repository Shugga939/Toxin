window.$ = require('jquery')
window.jQuery = require('jquery')
const Chart = require('./chart.min.js');

class PieChart {
  constructor(parent) {
    this.mainEl = parent;
    this._init();
  }

  _injectReviews() {
    const { mainEl } = this;

    const { voices } = mainEl.dataset;
    const voicesEl = mainEl.querySelector('.pie-chart__voices');
    const voicesNumEl = voicesEl.querySelector('.pie-chart__num');
    const voicesText = voicesEl.querySelector('.pie-chart__text');
    voicesNumEl.innerHTML = voices;
    voicesText.innerHTML = 'голосов';
  }

  _createCircleDiagram() {
    const el = this.mainEl.querySelector('#pieChart');
    if (!el) return;
    const gradientOrange = el.getContext('2d').createLinearGradient(0, 0, 0, 100);
    const gradientPurple = el.getContext('2d').createLinearGradient(0, 0, 0, 100);
    const gradientGreen = el.getContext('2d').createLinearGradient(0, 0, 0, 100);

    gradientOrange.addColorStop(0, '#FFE39C');
    gradientOrange.addColorStop(1, '#FFBA9C ');

    gradientPurple.addColorStop(0, '#BC9CFF');
    gradientPurple.addColorStop(1, '#8BA4F9');

    gradientGreen.addColorStop(0, ' #6FCF99');
    gradientGreen.addColorStop(1, '#6BD0BE');

    const ratingOption = {
      rotation: 180,
      cutout: 55,
      
      plugins: {
        legend: {
          display: false,
        }
      },
      maintainAspectRatio: false,
      cutoutPercentage: 90,
    }

    new Chart(el, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [130, 65, 65, 0],
            backgroundColor: [gradientOrange, gradientPurple, gradientGreen],
            borderWidth: 2,
          },
        ],
        labels: [' Великолепно', ' Удовлетворительно', ' Хорошо'],
      },
      options: ratingOption,
    });
  }

  _init() {
    this._injectReviews();
    this._createCircleDiagram();
  }
}

export default PieChart;
