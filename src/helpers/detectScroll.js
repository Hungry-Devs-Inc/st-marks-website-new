let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
    
  };
//   const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('home-body-image');
//       }
//     });
//   });
let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector(".home-body-image");
    observer.observe(target);

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          if (entry.isIntersecting) {

          }
          //   entry.rootBounds
          //   entry.target
          //   entry.time
        });
      };