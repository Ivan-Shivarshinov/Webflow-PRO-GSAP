//Первая секция
const ease = 'power3.inOut';
const duration = 1.5;
const headerContainer = document.querySelector('.header-container');
const btnContainer = document.querySelector('.heading-hero-wrapper');

let animationHeroSection = gsap.timeline({
    delay: 0.3
})

animationHeroSection
.fromTo('.logo-image',
    {x: () => headerContainer.offsetWidth, xPercent: -110, width: '34rem'},
    {x: 0, xPercent: 0, width: '5.65rem'}, 1
)
.from('.image-burger', {autoAlpha: 0, duration: duration, ease: ease}, 1.3)
.from('.header-line', {scaleX: 0, transformOrigin: 'right center', duration: duration, ease: ease}, 1.5)
.from('.h5-wrapper>.column>h5', {autoAlpha: 0, yPercent: 100, stagger: 0.1, duration: duration, ease: ease}, 2)
.from('.h3.is-hero', {yPercent: 25, autoAlpha: 0, duration: duration, ease: ease}, 2.5)
.fromTo('.btn-small',
    {x: () => btnContainer.offsetWidth, xPercent: -105, autoAlpha: 0},
    {x: 0, xPercent: 0, autoAlpha: 1, duration: duration, ease: ease}, 2.8
)
.fromTo('.image-hero', 
    {width: '0%', filter: 'blur(0.5rem)', transformOrigin: 'center center', duration: duration, ease: ease}, 
    {width: '100%', filter: 'blur(0rem)', duration: duration, ease: ease}, 3
)
.from('.hero-content-line', {height: '0%', duration: duration, ease: ease}, 3)

//Вторая секция
const sectionServices = document.querySelector('.section.is-services');

let servicesInView = gsap.timeline({
    scrollTrigger: {
        trigger: sectionServices,
        start: 'top 80%'
    }
})

servicesInView.fromTo('#services-item',
    {autoAlpha:0, yPercent: 50},
    {autoAlpha:1, yPercent: 0, stagger: 0.1, duration: duration, ease: ease}
)

let animationServicesSection = gsap.timeline({
    scrollTrigger: {
        trigger: sectionServices,
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=225%'
    }
})

animationServicesSection
.to('.services-item', {y: '50vh'})
.to('#change-color-text', {color: '#51b613'}, '<')
.to('.services-item.is-brand', {y: '0vh'})
.to('.services-item.is-tech', {y: '25vh'}, '<')
.to('#change-color-text', {color: '#101010'}, '<')
.to({}, {duration: 0.25})