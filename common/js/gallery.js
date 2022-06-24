
gsap.fromTo('.l-item', {
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
