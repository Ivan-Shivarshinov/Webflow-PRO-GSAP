const split = new SplitText('#split', {type: 'words'});
const from = gsap.from(split.words, {
  duration: 1, 
  y: 30, 
  autoAlpha: 0, 
  stagger: 0.1
});

document.querySelector('.play').addEventListener('click', () => {
    from.play();
});