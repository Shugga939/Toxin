export default function initHeader() {
  const header = document.querySelector('.header');
  const burgerButton = header.querySelector('.header__burger');
  const burgerLayout = header.querySelector('.header__burger-layout');
  const navigation = header.querySelector('.header__nav');
  const body = document.querySelector('body');

  function toggleMobileMenu() {
    navigation.classList.toggle('header__nav--active');
    burgerLayout.classList.toggle('header__burger-layout--active');
    const scrollBarWidth = window.innerWidth - body.offsetWidth;
    if (burgerLayout.classList.contains('header__burger-layout--active')) {
      burgerButton.style.right = `${scrollBarWidth}px`;
      body.style.overflow = 'hidden';
    } else {
      burgerButton.style.right = `${scrollBarWidth}px`;
      body.style.overflow = 'inherit';
    }
  }
  burgerButton.addEventListener('click', toggleMobileMenu);
}
