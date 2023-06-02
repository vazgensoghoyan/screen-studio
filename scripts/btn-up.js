const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // remove class "hide" from the button => show the button
    this.el.classList.remove('hide');
  },
  hide() {
    // remove class "hide" from the button => hide the button
    this.el.classList.add('hide');
  },
  addEventListener() {
    // checking the scroll event
    window.addEventListener('scroll', () => {
      // determining the amount of scrolling
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // if the page is scrolled by more than 400px, then we make the button visible, otherwise we hide it
      scrollY > 400 ? this.show() : this.hide();
    });
    // while clicking on the .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // scrolling to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();