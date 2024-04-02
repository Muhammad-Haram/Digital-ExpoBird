"use strict";


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

//

(function () {
  "use strict";

  var items = document.querySelectorAll(".timeline li");


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

// 


items.forEach(item => item.addEventListener('click', toggleAccordion));

// const track = document.getElementById("image-track");

// // const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
//   // track.dataset.mouseDownAt = "0";  
//   track.dataset.prevPercentage = track.dataset.percentage;
// };

// const handleOnMove = e => {
//   // if(track.dataset.mouseDownAt === "0") return;

//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;

//   const percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//   track.dataset.percentage = nextPercentage;

//   track.animate({
//     transform: `translateX(${nextPercentage}%)`
//   }, { duration: 1200, fill: "forwards" });

//   for(const image of track.getElementsByClassName("image")) {
//     image.animate({
//       objectPosition: `${100 + nextPercentage}% center`
//     }, { duration: 1200, fill: "forwards" });
//   }
// };

/* -- Had to add extra lines for touch events -- */

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);

// 

var elem = document.querySelector('.m-carousel');
if (elem) {
  var flkty = new Flickity(elem, {
    wrapAround: true,
    pageDots: false,
    adaptiveHeight: false,
    lazyLoad: 2,
    arrowShape: 'M27.1,46.45a5.07,5.07,0,0,0,0,7.12L55.74,82.21a5.08,5.08,0,0,0,7.14,0h0a5,5,0,0,0,0-7.14l-25-25,25-25a5.07,5.07,0,0,0,0-7.14h0a5,5,0,0,0-7.14,0Z'
  });
}

// 
let menuItems = document.querySelectorAll(".blog-hover-image .blog-item");
let cursor = document.querySelector(".blog-hover-image .cursor");
let getXY = function (e) {
  return [
    e.clientX,
    e.clientY
  ];
};
menuItems.forEach(function (menuItem) {
  // use mouseenter and mouseleave to toggle cursor since they won't bubble!
  menuItem.addEventListener("mouseenter", function (e) {
    let _a = getXY(e), x = _a[0], y = _a[1];
    cursor.animate([
      {
        opacity: 0,
        transform: "translate(".concat(x, "px, ").concat(y, "px) scale(0)")
      },
      {
        opacity: 1,
        transform: "translate(".concat(x, "px, ").concat(y, "px) scale(1)")
      }
    ], { duration: 500, fill: "forwards" });
    menuItem.addEventListener("mouseleave", function (e) {
      let _a = getXY(e), x = _a[0], y = _a[1];
      cursor.animate([
        {
          opacity: 1,
          transform: "translate(".concat(x, "px, ").concat(y, "px) scale(1)")
        },
        {
          opacity: 0,
          transform: "translate(".concat(x, "px, ").concat(y, "px) scale(0)")
        }
      ], { duration: 300, fill: "forwards" });
    });
  });
  // move the cursor when mouse moves.
  menuItem.addEventListener("mousemove", function (e) {
    let _a = getXY(e), x = _a[0], y = _a[1];
    cursor.animate([
      {
        transform: "translate(".concat(x, "px, ").concat(y, "px)")
      },
      {
        transform: "translate(".concat(x, "px, ").concat(y, "px)")
      }
    ], { duration: 500, delay: 50, fill: "forwards" });
  });
});

// 

const spaceHolder = document.querySelector(".space-holder");
const horizontal = document.querySelector(".horizontal");
// spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener("scroll", () => {
  const sticky = document.querySelector(".sticky-horizontal");
  // horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener("resize", () => {
  // spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});
const paths = document.querySelectorAll('path.path-anim');

paths.forEach(el => {
  const svgEl = el.closest('svg');
  const pathTo = el.dataset.pathTo;

  gsap.timeline({
    scrollTrigger: {
      trigger: svgEl,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
    .to(el, {
      ease: 'none',
      attr: { d: pathTo }
    });
});


const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inviewport", entry.isIntersecting);
  });
};
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');

const ELs_inViewport02 = document.querySelectorAll('[data-inviewport02]');
const scrollText = document.querySelectorAll('.scroll-text');
const scrollText02 = document.querySelectorAll('.scroll-text02');


ELs_inViewport.forEach((EL, i) => {
  Obs.observe(EL, obsOptions);

  window.addEventListener('scroll', () => {
    if (ELs_inViewport[0].classList.contains('is-inviewport')) {
      scrollText[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + -1.85 * scrollText[0].getBoundingClientRect().top + ', 0, 0, 1)';
    }
  });

  window.addEventListener('scroll', () => {
    if (ELs_inViewport[1].classList.contains('is-inviewport')) {
      scrollText[1].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + 1.8 * scrollText[1].getBoundingClientRect().top + ', 0, 0, 1)';
    }
  });
});


ELs_inViewport02.forEach((EL, i) => {
  Obs.observe(EL, obsOptions);

  window.addEventListener('scroll', () => {
    if (ELs_inViewport02[i].classList.contains('is-inviewport')) {
      scrollText02[i].classList.add("active")
    } else {
      scrollText02[i].classList.remove("active")
    }
  });
});


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  // marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

gsap.registerPlugin(ScrollTrigger);

let timeln2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".technology-gradient",
    start: "top+=250px bottom",
    end: "top top",
    scrub: 1,
    immediateRender: false
  },
});

timeln2.to(".sideChangeImage", {
  xPercent: -116,
  yPercent: 181,
  scrub: 1
});

//  script






