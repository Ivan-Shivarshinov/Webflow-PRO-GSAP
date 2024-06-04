const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl = gsap.timeline({
    delay: 0.5,
    defaults: {
        duration: 1,
        ease: "power2.inOut"
    }
});

tl.from('.heading_text', {
    autoAlpha: 0,
    y: 50,
})
    .to('.paragraph.is-clue', { text: "ПОТЯНИ ВВЕРХ ЗА ИКОНКУ ↓" })
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

let sectionSecond = gsap.timeline({
    scrollTrigger: {
        trigger: '.section.is-second',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=200%'
    }
});

sectionSecond
    .to('.h2.is-white', { autoAlpha: 0 })
    .from('.scroll_text.is-left', { autoAlpha: 0, x: '-50vw' })
    .from('.scroll_text.is-right', { autoAlpha: 0, x: '50vw' }, "<")
    .to('.section.is-second', { backgroundColor: 'white' }, ">")
    .to('.scroll_text.is-left', { color: 'black' })
    .to('.scroll_text.is-right', { color: 'black' }, "<")
    .to('.grid-cell', { backgroundColor: 'white' }, "<");

const grid = document.querySelector('.animation-interaction');
const wrapper = document.querySelector('.animation_wrapper');

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    const { width, height, left, top } = grid.getBoundingClientRect();

    const xPercent = ((clientX - left) / width - 0.5) * 2;
    const yPercent = ((clientY - top) / height - 0.5) * 2;

    gsap.to(grid, {
        rotationY: xPercent * 10,
        rotationX: -yPercent * 10,
        ease: 'power1.out',
        duration: 0.5
    });
}

function handleScroll() {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const translateY = 100 - (scrollY / maxScroll) * 100;

    gsap.to(wrapper, {
        yPercent: translateY,
        ease: 'power1.out',
        duration: 0.5
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            gsap.to(grid, {
                rotationY: 0,
                rotationX: 0,
                ease: 'power1.out',
                duration: 0.5
            });
            gsap.to(wrapper, {
                yPercent: 100,
                ease: 'power1.out',
                duration: 0.5
            });
        }
    });
}, {
    threshold: 0.1
});

observer.observe(wrapper);