export default class Spoiler {
  constructor(container) {
    this.container = container;
    this.head = container.querySelector('.spoiler__head');
    this.status= container.querySelector('.spoiler__status');
    this.content= container.querySelector('.spoiler__content');
    this.isOpen = false;
    this._addListeners();
  }

  _addListeners () {
    const that = this;

    function closeSpoiler() {
      that.content.style.maxHeight = '0px';
      that.content.style.overflow = 'hidden';
      that.content.style.opacity = '0.7';
      that.status.classList.remove('dropdown-svg--opened');
      that.status.classList.add('dropdown-svg--closed');
      that.isOpen = false;
    }

    function openSpoiler() {
      that.content.style.maxHeight = '500px';
      that.content.style.overflow = 'visible';
      that.content.style.opacity = '1';
      that.status.classList.remove('dropdown-svg--closed');
      that.status.classList.add('dropdown-svg--opened');
      that.isOpen = true;
    }

    function toggleSpoiler(e) {
      e.stopPropagation()
      that.isOpen ? closeSpoiler() : openSpoiler();
    }
    
    this.head.addEventListener('click', toggleSpoiler)
  }
}
