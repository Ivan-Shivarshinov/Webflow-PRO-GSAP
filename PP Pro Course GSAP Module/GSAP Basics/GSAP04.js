let scale = 0.75;
let autoAlpha = 0.33;
let amount = 0.33;
let position = "-=25%";

let tl = gsap.timeline({
    yoyo: true,
    repeat: -1,
});

tl.to('.box.first', {
    scale: scale,
    backgroundColor: 'white',
    autoAlpha: autoAlpha,
    stagger: {
        amount: amount,
        from: 'edges',
    }
});
tl.to('.box.second', {
    scale: scale,
    backgroundColor: 'white',
    autoAlpha: autoAlpha,
    stagger: {
        amount: amount,
        from: 'edges',
    }
}, position);
tl.to('.box.third', {
    scale: scale,
    backgroundColor: 'white',
    autoAlpha: autoAlpha,
    stagger: {
        amount: amount,
        from: 'edges',
    }
}, position);
tl.to('.box.fourth', {
    scale: scale,
    backgroundColor: 'white',
    autoAlpha: autoAlpha,
    stagger: {
        amount: amount,
        from: 'edges',
    }
}, position);