// finding every element that can give us an anchor
const anchors = document.querySelectorAll(".anchor");

// giving those elements an event listeners
anchors.forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    // canceling the usual behavior when clicking on such an element
    event.preventDefault();

    // finding the element to which we should go
    const id = anchor.getAttribute("href");
    const elem = document.querySelector(id);

    // the height of the header is considered
    let shift = 0;

    if (window.innerWidth > 550) {
      shift = 64;
    } else if (window.innerWidth > 380) {
      shift = 43;
    } else {
      shift = 40;
    }

    // smoothly scrolling to the element
    window.scroll({
      top: elem.offsetTop - shift,
      behavior: 'smooth'
    });
  })
})