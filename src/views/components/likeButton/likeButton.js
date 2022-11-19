class LikeButton {
  constructor(button) {
    this.button = button;
    this.counter = button.querySelector('.likeButton__counter')
    this.icons = button.querySelectorAll('.likeButton__icon')
    this.counterValue = Number(this.counter.textContent)
    this._addListeners();
  }
  
  _addListeners() {
    const that = this

    function toggle() {
      that.button.classList.toggle('likeButton--liked')
      that.icons.forEach(icon => {
        icon.classList.toggle('likeButton__icon--liked')
        icon.classList.toggle('likeButton__icon--hiden')
      });

      const isLiked = that.button.classList.contains('likeButton--liked')

      isLiked?
        that.counter.textContent = ++that.counterValue
        :
        that.counter.textContent = --that.counterValue
  }
    this.button.addEventListener('click', toggle);
  }
}

export default LikeButton;
