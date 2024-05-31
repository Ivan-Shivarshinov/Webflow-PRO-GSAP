//Первая секция
const ease = 'power3.inOut';
const duration = 1.5;
const headerContainer = document.querySelector('.header_container');
const btnContainer = document.querySelector('.hero_heading-wrapper');
const splitTypeHero = new SplitType('#h3-hero-split')

let animationHeroSection = gsap.timeline({
        delay: 0.3
});

animationHeroSection
.fromTo('.logo-image',
    {x: () => headerContainer.offsetWidth, xPercent: -110, width: '34rem'},
    {x: 0, xPercent: 0, width: '5.65rem'}, 1
)
.from('.image-burger', {autoAlpha: 0, duration: duration, ease: ease}, 1.3)
.from('.header_line', {scaleX: 0, transformOrigin: 'right center', duration: duration, ease: ease}, 1.5)
.from('.h5-wrapper>.column>h5', {autoAlpha: 0, yPercent: 100, stagger: 0.1, duration: duration, ease: ease}, 2)
.from(splitTypeHero.lines, {
    autoAlpha: 0,
    x: '10rem',
    filter: 'blur(0.3rem)',
    duration: duration,
    stagger: 0.1,
    ease: ease
}, 2.5)
.fromTo('.btn-small',
    {x: () => btnContainer.offsetWidth, xPercent: -105, autoAlpha: 0},
    {x: 0, xPercent: 0, autoAlpha: 1, duration: duration, ease: ease}, 2.8
)
.fromTo('.hero_image', 
    {width: '0%', filter: 'blur(0.3rem)', transformOrigin: 'center center', duration: duration, ease: ease}, 
    {width: '100%', filter: 'blur(0rem)', duration: duration, ease: ease}, 3
)
.from('.hero_content-line', {height: '0%', duration: duration, ease: ease}, 3);

//Вторая секция
const sectionServices = document.querySelector('.section.is-services');

let servicesInView = gsap.timeline({
    scrollTrigger: {
        trigger: sectionServices,
        start: 'top 80%'
    }
});

servicesInView
.fromTo('#services-item',
    {autoAlpha:0, yPercent: 50, filter: 'blur(0.3rem)'},
    {autoAlpha:1, yPercent: 0, filter: 'blur(0rem)', stagger: 0.1, duration: duration, ease: ease}
)
.from('.services_horizontal-line', {scaleX: 0, transformOrigin: 'right center', duration: duration, ease: ease}, 0.5)
.from('.services_vertical-line', {height: '0%', stagger: 0.1, duration: duration, ease: ease}, 1);


let animationServicesSection = gsap.timeline({
    scrollTrigger: {
        trigger: sectionServices,
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=225%'
    }
});

animationServicesSection
.to('.services_item', {y: '50vh'})
.to('#change-color-text', {color: '#51b613'}, '<')
.to('.services_item.is-brand', {y: '0vh'})
.to('.services_item.is-tech', {y: '25vh'}, '<')
.to('#change-color-text', {color: '#101010'}, '<')
.to({}, {duration: 0.25});

//Третья секция
const sectionAbout = document.querySelector('.section.is-about');
const aboutNumbers = document.querySelector('.about_rows-wrapper');

let animationAboutSection = gsap.timeline({
    scrollTrigger: {
        trigger: sectionAbout,
        start: 'top 90%'
    }
});

animationAboutSection
.from('#about-h5', {autoAlpha: 0, scale: 2, filter: 'blur(0.3rem)', x: '10rem', duration: duration, ease: ease})
.from('#about-h4', {autoAlpha: 0, filter: 'blur(0.3rem)', y: '5rem', duration: duration, ease: ease}, 0.3)
.from('.about_vertical-line', {height: '0%', stagger: 0.1, duration: duration, ease: ease}, 0.6);

let animationAboutBottom = gsap.timeline({
    scrollTrigger: {
        trigger: aboutNumbers,
        start: 'top 90%',
    }
});

animationAboutBottom
.from('.about_row', {autoAlpha: 0, filter: 'blur(0.3rem)', y: '5rem', stagger: 0.1, duration: duration, ease: ease})
.fromTo('.about_image', 
    {width: '0%', filter: 'blur(0.3rem)', duration: duration, ease: ease}, 
    {width: '100%', filter: 'blur(0rem)', duration: duration, ease: ease}, 0.5
);

//Четвёртая секция
const sectionDropdown = document.querySelector('.section.is-dropdown');
const dropdown = document.querySelectorAll('.dropdown');
const splitTypeDropdown = new SplitType('#body-dropdown-split')

gsap.set('.dropdown_list', {autoAlpha: 0, height: 0, filter: 'blur(0.3rem)', });

let animationDropdownSection = gsap.timeline({
    scrollTrigger: {
        trigger: sectionDropdown,
        start: 'top 90%'
    }
});

animationDropdownSection
.from('#dropdown-h5', {autoAlpha: 0, scale: 2, filter: 'blur(0.3rem)', x: '10rem', duration: duration, ease: ease})
.from(splitTypeDropdown.lines, {
    autoAlpha: 0,
    x: '10rem',
    filter: 'blur(0.3rem)',
    duration: duration,
    stagger: 0.1,
    ease: ease
}, 0.5)
.from('.dropdown_paddings', { autoAlpha: 0, y: '5rem', duration: duration, ease: ease}, 1);

dropdown.forEach(item => {
    let dropdownList = item.querySelector('.dropdown_list');
    let dropdownToggle = item.querySelector('.dropdown_toggle');

    let dropdownAnimation = gsap.timeline({
        paused: true
    });

    dropdownAnimation
    .to(dropdownToggle, { color: '#51b613' })
    .to(dropdownList, {
        height: 'auto',
        autoAlpha: 1,
        filter: 'blur(0rem)',
        marginTop: '1rem',
        duration: 0.75,
        ease: ease
    }, '<')

    dropdownAnimation.reverse();

    item.addEventListener('click', () => {
        dropdownAnimation.reversed(!dropdownAnimation.reversed());
    });
});

//Пятая секция
const sectionProjects = document.querySelector('.section.is-projects');
const projectContainer = document.querySelector('.projects_container');
const splitTypeProjects = new SplitType('#body-large-projects-split')

let animationProjectsSection = gsap.timeline({
    scrollTrigger: {
        trigger: sectionProjects,
        start: 'top 90%'
    }
});

animationProjectsSection
.from('#projects-h5', {autoAlpha: 0, scale: 2, filter: 'blur(0.3rem)', x: '10rem', duration: duration, ease: ease})
.from(splitTypeProjects.lines, {
    autoAlpha: 0,
    x: '10rem',
    filter: 'blur(0.3rem)',
    duration: duration,
    stagger: 0.1,
    ease: ease
}, 0.5)

let gorizontalScrollAnimation = gsap.to(projectContainer, {
    x: () => window.innerWidth - projectContainer.scrollWidth,
    scrollTrigger: {
    trigger: sectionProjects,
    pin: true,
    scrub: true,
    start: 'top top',
    end: () => '+=' + (projectContainer.scrollWidth - window.innerWidth)
    }
});