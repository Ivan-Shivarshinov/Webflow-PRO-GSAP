const duration = 1;
const ease = "power2.inOut";
const autoAlpha = 0;

gsap.from("#hero-logo", { 
    duration: duration,
    autoAlpha: autoAlpha,
    stagger: .75,
    ease: ease
});

gsap.from("#hero-text", { 
    duration: duration,
    autoAlpha: autoAlpha,
    x: 100,
    ease: ease
});

gsap.from("#hero-btn", { 
    duration: duration, 
    autoAlpha: autoAlpha, 
    x: -100, 
    ease: ease 
});

gsap.utils.toArray("#scroll-element").forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        autoAlpha: autoAlpha,
        y: 50,
        duration: duration,
        ease: ease
    });
});

gsap.utils.toArray("#scroll-left").forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        autoAlpha: autoAlpha,
        x: -50,
        duration: duration,
        ease: ease
    });
});

gsap.utils.toArray("#scroll-right").forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        autoAlpha: autoAlpha,
        x: 50,
        duration: duration,
        ease: ease
    });
});