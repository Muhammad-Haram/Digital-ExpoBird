gsap.registerPlugin(ScrollTrigger);

// auto switching tabs script

let index = 0;
  
let delay = 5000;

let $tabs = $('.divOfList > .list');

let $contents = $('.divOfContent');

let interval = setInterval(rotate, delay);
$('.item-1').addClass('active');
$('.list .list-items').each(function (i) {
  $(this).click(function () {
    index = i;
    switchElement();
  });
});
function rotate() {
  index++;
  if (index >= $tabs.children('.list-items').length) {
    index = 0;
  }
  switchElement();
}
//switch tabs
function switchElement() {
  clearInterval(interval);
  $tabs.children('.list-items').removeClass('active');
  $('.divOfContent .auto-sections').fadeOut(300);
  let $tab = $tabs.children('.list-items').eq(index);
  $tab.addClass('active');
  $contents.children('.auto-sections').eq(index).delay(300).fadeIn(300);
  interval = setInterval(rotate, delay);
}

// FAQ script

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

items.forEach(item => item.addEventListener('click', toggleAccordion));

gsap.registerPlugin(ScrollTrigger);

let timeln = gsap.timeline({
  scrollTrigger: {
    trigger: ".cardStacks",
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "+=2000",
    scrub : 0.5,
  },
});

timeln.addLabel("card1");
timeln.to(".cardStack-1", {
  yPercent: 0,
  opacity: 1,
});
timeln.from(".button-1", {
  backgroundColor: "#BA83E1",
  color: "#FFF",
});

timeln.from(".cardStack-2", {
  yPercent: 75,
  opacity: 0,
});
timeln.addLabel("card2");

timeln.to(".cardStack-1",{
    scale: 0.95,
    yPercent: -7.5,
});

timeln.to(".button-1", {
  backgroundColor: "transparent",
  color: "#878787",
});

timeln.to(".cardStack-2", {
  yPercent: 0,
  opacity: 1,
});

timeln.to(".button-2", {
  backgroundColor: "#BA83E1",
  color: "#FFF",
});

timeln.from(".cardStack-3", {
  yPercent: 75,
  opacity: 0,
});

timeln.addLabel("card3");

timeln.to(".cardStack-1",{
    scale: 0.9,
});

timeln.to(".cardStack-2",{
    scale: 0.95,
    yPercent: -5,
});

timeln.to(".button-2", {
  backgroundColor: "transparent",
  color: "#878787",
});

timeln.to(".cardStack-3", {
  yPercent: 0,
  opacity: 1,
});

timeln.to(".button-3", {
  backgroundColor: "#BA83E1",
  color: "#FFF",
});

timeln.from(".cardStack-4", {
  yPercent: 75,
  opacity: 0,
});
timeln.addLabel("card4");

timeln.to(".cardStack-1",{
    scale: 0.85,
});

timeln.to(".cardStack-2",{
    scale: 0.9,
});

timeln.to(".cardStack-3",{
    scale: 0.95,
    yPercent: -2.5,
});

timeln.to(".button-3", {
  backgroundColor: "transparent",
  color: "#878787",
});

timeln.to(".cardStack-4", {
  yPercent: 0,
  opacity: 1,
});

timeln.to(".button-4", {
  backgroundColor: "#BA83E1",
  color: "#FFF",
});

let timeln1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flyCardStacks",
    pin: true,
    pinSpacing: true,
    start: "left-=120px left",
    end: "+=2000",
    scrub : 1,
  },
});

timeln1.addLabel("flycard1");
timeln1.from(".flyCard-1", {
  yPercent: 0,
  opacity: 1,
});

timeln1.addLabel("flycard2");

timeln1.to(".flyCard-1", {
  yPercent: -150,
  rotation: 180,
});

timeln1.from(".flyCard-2", {
  yPercent: 0,
  opacity: 1,
});

timeln1.addLabel("flycard3");

timeln1.to(".flyCard-2", {
  yPercent: -150,
  rotation: 180,
});

timeln1.from(".flyCard-3", {
  yPercent: 0,
  opacity: 1,
});

timeln1.addLabel("flycard4");

timeln1.to(".flyCard-3", {
  yPercent: -150,
  rotation: 180,
});

let timeln2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".technology-gradient",
    start: "top+=250px bottom",
    end : "top top",
    scrub : 1,
    immediateRender : false 
  },
});

timeln2.to(".sideChangeImage", {
  xPercent: -116,
  yPercent: 181,
  scrub : 1
});

// const textAnimation1 = new SplitType('p.textAnimation1', { types: 'chars' });
// const chars1 = textAnimation1.chars;
// const textAnimation2 = new SplitType('p.textAnimation2', { types: 'chars' });
// const chars2 = textAnimation2.chars;

// const textAnimation3 = new SplitType('p.textAnimation3', { types: 'chars' });
// const chars3 = textAnimation3.chars;
// const textAnimation4 = new SplitType('p.textAnimation4', { types: 'chars' });
// const chars4 = textAnimation4.chars;

// const textAnimation5 = new SplitType('p.textAnimation5', { types: 'chars' });
// const chars5 = textAnimation5.chars;
// const textAnimation6 = new SplitType('p.textAnimation6', { types: 'chars' });
// const chars6 = textAnimation6.chars;

// const textAnimation7 = new SplitType('p.textAnimation7', { types: 'chars' });
// const chars7 = textAnimation7.chars;
// const textAnimation8 = new SplitType('p.textAnimation8', { types: 'chars' });
// const chars8 = textAnimation8.chars;

let tln1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-animation1",
    start: "top+=500px bottom",
    end : "top top",
    scrub : 1,
  },
});

tln1.fromTo(
  chars1,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)

tln1.fromTo(
 chars2,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)

let tln2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-animation2",
    start: "top+=500px bottom",
    end : "top top",
    scrub : 1,
  },
});

tln2.fromTo(
  chars3,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)

tln2.fromTo(
 chars4,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)

let tln3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-animation3",
    start: "top+=500px bottom",
    end : "top top",
    scrub : 1,
  },
});

tln3.fromTo(
  chars5,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)

tln3.fromTo(
 chars6,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)

let tln4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-animation4",
    start: "top+=500px bottom",
    end : "top top",
    scrub : 1,
  },
});

tln4.fromTo(
  chars7,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)

tln4.fromTo(
 chars8,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 3,
    ease: 'power4.out',
  }
)