gsap.from(".shutter", {
    scrollTrigger: {
        trigger: ".shutter",
        start: 300,
        end: '+=1000',
        scrub: true,
        markers: true,
    },
    scaleX: 0,
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power3.inOut",
})