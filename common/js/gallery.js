
gsap.fromTo('.item', {
  opacity: 0,
  y: 10,
},
{
  opacity: 1,
  y: 0,
  duration: 1.4,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.js-modal',
    start: 'top 80%',
    ease: 'power1.out',
  }
});

profileLink.addEventListener("click", () => {
  gsap.fromTo('.profile_inner *', {
    opacity: 0,
    x: 10,
  },
  {
    opacity: 1,
    x: 0,
    delay : 0.2,
    duration: 0.6,
    stagger: 0.2,
  });
});

profileClose.addEventListener("click", () => {
  gsap.to('.profile_inner *', {
    opacity: 0,
    x: 80,
  });
});