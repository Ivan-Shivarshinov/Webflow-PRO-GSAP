let myAnimation = gsap.to(".box", {
    rotation: 360,
    x: "95vw",
    duration: 3,
    backgroundColor: "white",
    ease: "power4.inOut",
    yoyo: true,
    repeat: -1
});

myAnimation.play();

let myAnimationReversed = gsap.to(".box-reversed", {
    rotation: 360,
    x: "-95vw",
    duration: 3,
    backgroundColor: "white",
    ease: "power4.inOut",
    yoyo: true,
    repeat: -1
});

myAnimationReversed.play();