import 'Scripts/plugins/slick';
window.$ = require('jquery')
window.jQuery = require('jquery')

export default class RoomSlider {
  constructor(container) {
    this.container = $(container);
    this._init();
  }

  _init() {
    this.container.slick({
      dots: true,
      accessibility: true,
    });
  }
}
