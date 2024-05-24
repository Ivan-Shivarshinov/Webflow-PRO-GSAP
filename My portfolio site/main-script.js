let split = new SplitText("#split-text", {type: "chars"});
gsap.from(split.chars, {
  duration: 0.1, 
  y: 100, 
  autoAlpha: 0, 
  stagger: 0.05
});