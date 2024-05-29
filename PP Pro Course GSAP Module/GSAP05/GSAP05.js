const scale = 0.75;
const autoAlpha = 0.33;
const amount = 0.33;
const position = "-=25%";
const play = document.getElementById('play')
const reverse = document.getElementById('reverse')
const pause = document.getElementById('pause')
const resume = document.getElementById('resume')
const timeScaleBase = document.getElementById('timescale1')
const timeScaleFast = document.getElementById('timescale2')
const tl = gsap.timeline({
    yoyo: true,
    repeat: -1,
    paused: true
});

play.addEventListener('click', () => {
    tl.play();
});
reverse.addEventListener('click', () => {
    tl.reverse();
});
pause.addEventListener('click', () => {
    tl.pause();
});
resume.addEventListener('click', () => {
    tl.resume();
});

timeScaleBase.addEventListener('click', () => {
    tl.timeScale(1);
});

timeScaleFast.addEventListener('click', () => {
    tl.timeScale(2);
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