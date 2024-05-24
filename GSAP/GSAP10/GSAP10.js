//section 1
let tl = gsap.timeline({
    delay: 0.25,
    defaults: {
        duration: 0.75,
        ease: "power2.inOut"
    }
});

tl.from('.heading_text', {
    autoAlpha: 0,
    y: 50,
})
    .to('.paragraph.is-clue', { text: "↓ ПОТЯНИ ВВЕРХ ЗА ИКОНКУ ↓" })
    .to('.paragraph.is-clue', {
        duration: 0.5,
        fontSize: '50px',
        fontWeight: 'bold'
    }, '-=0.25')

const dragIcon = document.querySelector('.drag-up_icon');
const sectionHero = document.querySelector('.section.is-hero');

Draggable.create(dragIcon, {
    type: 'y',
    bounds: { minY: -sectionHero.clientHeight / 2, maxY: 0 },
    onDrag: function () {
        const iconRect = dragIcon.getBoundingClientRect();
        const sectionRect = sectionHero.getBoundingClientRect();
        const dragProgress = (sectionRect.bottom - iconRect.bottom) / (sectionRect.height / 2);
        if (dragProgress >= 1) {
            gsap.to(window, {
                scrollTo: {
                    y: window.innerHeight,
                    autoKill: false
                },
                duration: 0.5,
                onComplete: () => {
                    gsap.to(dragIcon, { y: 0, duration: 0.5, ease: "power2.out" });
                }
            });
            this.endDrag();
        }
    },
    onRelease: function () {
        if (this.y !== 0) {
            gsap.to(dragIcon, { y: 0, duration: 0.5, ease: "power2.out" });
        }
    }
});

//section 2
let sectionSecond = gsap.timeline({
    scrollTrigger: {
        trigger: '.section.is-second',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=250%'
    }
});

sectionSecond
    .to('.h2.is-white', { autoAlpha: 0 })
    .from('.scroll_text.is-left', { 
        autoAlpha: 0, 
        x: '-50vw',
        ease: 'power2.inOut'
    }, "<")
    .from('.scroll_text.is-right', { 
        autoAlpha: 0, 
        x: '50vw',
        ease: 'power2.inOut'
    }, "<")
    .to('.section.is-second', { backgroundColor: 'white' })
    .to('.scroll_text.is-left', { color: 'black' }, "<")
    .to('.scroll_text.is-right', { color: 'black' }, "<")
    .to('.grid-cell', { backgroundColor: 'white' }, "<")
    .fromTo('.animation_wrapper', { scale: 0.8 }, { scale: 1}, "<")

//section 3
const scale = 1.1;
const amount = 1;
const rotation = 360;
const backgroundColor = 'white';
const from = [0.5,0.5];
const play = document.getElementById('play')
const reverse = document.getElementById('reverse')
const pause = document.getElementById('pause')
const resume = document.getElementById('resume')
const restart = document.getElementById('restart')
const timeScaleBase = document.getElementById('timescale1')
const timeScaleFast = document.getElementById('timescale2')
tl = gsap.timeline({
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
restart.addEventListener('click', () => {
    tl.restart();
});
timeScaleBase.addEventListener('click', () => {
    tl.timeScale(1);
});
timeScaleFast.addEventListener('click', () => {
    tl.timeScale(2);
});

tl.to('.box', {
    scale: scale,
    backgroundColor: backgroundColor,
    rotation: rotation,
    stagger: {
        amount: amount,
        from: from,
    }
});