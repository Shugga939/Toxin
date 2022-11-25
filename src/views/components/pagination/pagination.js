import 'Scripts/plugins/simplePagination';
window.$ = require('jquery')
window.jQuery = require('jquery')

export default class Pagination {
  constructor(container) {
    this.container = $(container);
    this._init();
  }

  _init() {
    this.container.pagination({
      items: 179,
      itemsOnPage: 12,
      displayedPages: 3,
      edges: 1,
      prevText: 
        '<svg width="18" height="17" viewBox="0 0 18 17" fill="none"><path d="M9 0.426758L17.0156 8.44238L9 16.458L7.59375 15.0518L13.1719 9.42676H0.984375V7.45801H13.1719L7.59375 1.83301L9 0.426758Z"/></svg>',
      nextText:
        '<svg width="18" height="17" viewBox="0 0 18 17" fill="none"><path d="M9 0.426758L17.0156 8.44238L9 16.458L7.59375 15.0518L13.1719 9.42676H0.984375V7.45801H13.1719L7.59375 1.83301L9 0.426758Z"/></svg>',
    });
  }
}


