export function detectScroll(classToCheck, classToAdd) {
  let elements;
  let windowHeight;

    function init() {
      elements = document.querySelectorAll(classToCheck);
      windowHeight = window.innerHeight;
    }

    function checkPosition() {
      for (let i=0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = element.getBoundingClientRect().top;
         if (positionFromTop - windowHeight <= 0) {
          element.classList.add(classToAdd);
          element.classList.remove(classToCheck);
         }
      }
    }
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);

    init();
    checkPosition();
}