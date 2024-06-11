window.addEventListener('load', function () {
    document.body.style.visibility = 'visible';
});

const ease = 'power3.inOut';
const duration = 1.5;

let mm = gsap.matchMedia();

//Десктоп Версия
mm.add("(min-width: 376px)", () => {
    //Первая секция
    const headerContainer = document.querySelector('.header_container');
    const btnContainer = document.querySelector('.hero_heading-wrapper');
    const splitTypeHero = new SplitType('#h3-hero-split')

    let animationHeroSection = gsap.timeline({
        delay: 0.3
    });

    animationHeroSection
        .fromTo('.logo-image',
            { x: () => headerContainer.offsetWidth, xPercent: -110, width: '34rem' },
            { x: 0, xPercent: 0, width: '5.65rem' }, 1
        )
        .from('.burger-menu', { autoAlpha: 0, duration: duration, ease: ease }, 1.3)
        .from('.header_line', { scaleX: 0, transformOrigin: 'right center', duration: duration, ease: ease }, 1.5)
        .from('.h5-wrapper>.column>h5', { autoAlpha: 0, yPercent: 100, stagger: 0.1, duration: duration, ease: ease }, 2)
        .from(splitTypeHero.lines, {
            autoAlpha: 0,
            x: '10rem',
            filter: 'blur(0.3rem)',
            duration: duration,
            stagger: 0.1,
            ease: ease
        }, 2.5)
        .fromTo('.btn-small',
            { x: () => btnContainer.offsetWidth, xPercent: -105, autoAlpha: 0 },
            { x: 0, xPercent: 0, autoAlpha: 1, duration: duration, ease: ease }, 2.8
        )
        .fromTo('.hero_image',
            { width: '0%', filter: 'blur(0.3rem)', transformOrigin: 'center center' },
            { width: '100%', filter: 'blur(0rem)', duration: duration, ease: ease }, 3
        )
        .from('.hero_content-line', { height: '0%', duration: duration, ease: ease }, 3);

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
            { autoAlpha: 0, yPercent: 50, filter: 'blur(0.3rem)' },
            { autoAlpha: 1, yPercent: 0, filter: 'blur(0rem)', stagger: 0.1, duration: duration, ease: ease }
        )
        .from('.services_horizontal-line', { scaleX: 0, transformOrigin: 'right center', duration: duration, ease: ease }, 0.5)
        .from('.services_vertical-line', { height: '0%', stagger: 0.1, duration: duration, ease: ease }, 1);


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
        .to('.services_item', { y: '50vh' })
        .to('#change-color-text', { color: '#51b613' }, '<')
        .to('.services_item.is-brand', { y: '0vh' })
        .to('.services_item.is-tech', { y: '25vh' }, '<')
        .to('#change-color-text', { color: '#101010' }, '<')
        .to({}, { duration: 0.25 });

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
        .from('#about-h5', { autoAlpha: 0, scale: 2, filter: 'blur(0.3rem)', x: '10rem', duration: duration, ease: ease })
        .from('#about-h4', { autoAlpha: 0, filter: 'blur(0.3rem)', y: '5rem', duration: duration, ease: ease }, 0.3)
        .from('.about_vertical-line', { height: '0%', stagger: 0.1, duration: duration, ease: ease }, 0.6);

    let animationAboutBottom = gsap.timeline({
        scrollTrigger: {
            trigger: aboutNumbers,
            start: 'top 90%',
        }
    });

    animationAboutBottom
        .from('.about_row', { autoAlpha: 0, filter: 'blur(0.3rem)', y: '5rem', stagger: 0.1, duration: duration, ease: ease })
        .fromTo('.about_image',
            { width: '0%', filter: 'blur(0.3rem)' },
            { width: '100%', filter: 'blur(0rem)', duration: duration, ease: ease }, 0.5
        );

    //Четвёртая секция
    const sectionDropdown = document.querySelector('.section.is-dropdown');
    const dropdown = document.querySelectorAll('.dropdown');
    const splitTypeDropdown = new SplitType('#body-dropdown-split')

    gsap.set('.dropdown_list', { autoAlpha: 0, height: 0, filter: 'blur(0.3rem)', });

    let animationDropdownSection = gsap.timeline({
        scrollTrigger: {
            trigger: sectionDropdown,
            start: 'top 90%'
        }
    });

    animationDropdownSection
        .from('#dropdown-h5', { autoAlpha: 0, scale: 2, filter: 'blur(0.3rem)', x: '10rem', duration: duration, ease: ease })
        .from(splitTypeDropdown.lines, {
            autoAlpha: 0,
            x: '10rem',
            filter: 'blur(0.3rem)',
            duration: duration,
            stagger: 0.1,
            ease: ease
        }, 0.5)
        .from('.dropdown_paddings', { autoAlpha: 0, y: '5rem', duration: duration, ease: ease }, 1);

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
            start: 'top 70%'
        }
    });

    animationProjectsSection
        .from('#projects-h5', { autoAlpha: 0, scale: 2, filter: 'blur(0.3rem)', x: '10rem', duration: duration, ease: ease })
        .from(splitTypeProjects.lines, {
            autoAlpha: 0,
            x: '10rem',
            filter: 'blur(0.3rem)',
            duration: duration,
            stagger: 0.1,
            ease: ease
        }, 0.5)
        .from('.projects_item-wrapper', { autoAlpha: 0, y: '10rem', stagger: 0.3, duration: duration, ease: ease }, 0.75);

    let horizontalScrollAnimation = gsap.to(projectContainer, {
        x: () => window.innerWidth - projectContainer.scrollWidth,
        scrollTrigger: {
            trigger: sectionProjects,
            pin: true,
            scrub: true,
            start: 'top top',
            end: () => '+=' + (projectContainer.scrollWidth - sectionProjects.offsetWidth)
        }
    });

    //Шестая секция
    const awardItems = document.querySelectorAll('.awards_items-grid');
    const awardSection = document.querySelector('.section.is-awards');
    const splitTypeAwards = new SplitType('#awards-h3')

    let animationAwardSection = gsap.timeline({
        scrollTrigger: {
            trigger: awardSection,
            start: 'top 90%'
        }
    });

    animationAwardSection
        .from(splitTypeAwards.chars, {
            autoAlpha: 0,
            x: '5rem',
            filter: 'blur(0.3rem)',
            duration: duration,
            stagger: 0.1,
            ease: ease
        })
        .from(awardItems, { autoAlpha: 0, y: '5rem', filter: 'blur(0.3rem)', stagger: 0.1, duration: duration, ease: ease }, 0.75);

    awardItems.forEach(item => {
        const awardImage = item.querySelector('.awards_image');
        let awardImageAnimation = gsap.timeline({
            paused: true
        })
        awardImageAnimation
            .from(awardImage, {
                autoAlpha: 0,
                x: '-10rem',
                filter: 'blur(0.3rem)',
                duration: 0.75,
                ease: 'back.out(1.7)'
            })
        item.addEventListener('mouseenter', () => {
            awardImageAnimation.play();
        })
        item.addEventListener('mouseleave', () => {
            awardImageAnimation.reverse();
        })
    });

    //Седьмая секция
    const footer = document.querySelector('.footer');
    const splitTypeFooter = new SplitType('#footer-h1')
    const footerContainer = document.querySelector('.footer_content-wrapper');

    let animationFooter = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: 'top 75%'
        }
    });
    animationFooter
        .from('#footer-link-left', { autoAlpha: 0, x: '10rem', scale: 2, filter: 'blur(0.3rem)', duration: duration, ease: ease })
        .from('#footer-link-right', { autoAlpha: 0, x: '-10rem', scale: 2, filter: 'blur(0.3rem)', duration: duration, ease: ease }, '<')
        .from('#footer-link-center', { autoAlpha: 0, y: '10rem', scale: 2, filter: 'blur(0.3rem)', duration: duration, ease: ease }, 0.3);

    let animationFooterText = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: 'top 30%'
        }
    });

    animationFooterText
        .from(splitTypeFooter.chars, {
            autoAlpha: 0,
            x: '10rem',
            filter: 'blur(0.3rem)',
            duration: duration,
            stagger: 0.05,
            ease: 'back.out(2)',
        })
        .from('#footer-h1', { x: '-20rem', duration: duration, ease: 'back.out(2)' }, '<')
        .from('#footer-btn-center', { autoAlpha: 0, y: '10rem', scale: 1.5, filter: 'blur(0.3rem)', duration: duration, ease: ease }, 0.5);

    let animationFooterBottom = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: 'top 10%'
        }
    });
    animationFooterBottom
        .from('.footer_text-bottom-left', { autoAlpha: 0, x: '10rem', scale: 2, filter: 'blur(0.3rem)', duration: duration, ease: ease })
        .from('.footer_text-bottom-right', { autoAlpha: 0, x: '-10rem', scale: 2, filter: 'blur(0.3rem)', duration: duration, ease: ease }, '<')
        .from('.footer_links-bottom-wrapper', { autoAlpha: 0, y: '-10rem', scale: 1.5, filter: 'blur(0.3rem)', duration: duration, ease: ease }, 0.3);

    //Меню
    const menuBurger = document.querySelector('.burger-menu');
    const animationMenu = gsap.timeline({
        paused: true
    });

    animationMenu
        .fromTo('.burger-strip-three', { rotate: 0, y: '0rem' }, { rotate: 45, y: '-0.375rem', duration: 0.5, ease: ease })
        .fromTo('.burger-strip-one', { rotate: 0, y: '0rem' }, { rotate: -45, y: '0.375rem', duration: 0.5, ease: ease }, '<')
        .fromTo('.burger-strip-two', { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.5, ease: ease }, '<')
        .from('.menu', { autoAlpha: 0, yPercent: -100, duration: duration, ease: ease }, '<')
        .from('.menu_h2-wrapper', { autoAlpha: 0, y: '10rem', stagger: 0.1, duration: duration, ease: 'back.out(2)' }, '-=0.5')
        .from('.body-small.is-menu', { autoAlpha: 0, y: '10rem', duration: duration, ease: 'back.out(2)' }, '-=1');

    let menuOpen = false;

    menuBurger.addEventListener('click', () => {
        if (!menuOpen) {
            animationMenu.restart().play();
            menuOpen = true;
        } else {
            animationMenu.timeScale(2).reverse();
            menuOpen = false;
        }
    });


    let animationMenuChangeColorOne = gsap.timeline({
        scrollTrigger: {
            trigger: sectionAbout,
            start: 'top top',
            end: 'bottom top',
            toggleActions: "play reverse play reverse"
        }
    });

    animationMenuChangeColorOne
        .to('.logo-image.is-black', { autoAlpha: 0, x: '-5.65rem', duration: 0.5, ease: ease })
        .to('.logo-image.is-white', { autoAlpha: 1, x: '-5.65rem', duration: 0.5, ease: ease }, '<')
        .to('.header_line', { borderColor: 'rgba(255, 255, 255, 0.12)', duration: 0.5, ease: ease }, '<')
        .to('.burger-strip-one, .burger-strip-two, .burger-strip-three', { backgroundColor: 'white', duration: 0.5, ease: ease }, '<')

    let animationMenuChangeColorTwo = gsap.timeline({
        scrollTrigger: {
            trigger: sectionAbout,
            start: 'top bottom',
            end: 'bottom 80%',
            toggleActions: "play reverse play reverse"
        }
    });

    animationMenuChangeColorTwo
        .to('.body-small.is-menu', { color: 'white', duration: 0.5, ease: ease })


    let animationMenuChangeColorThree = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: 'top top',
            end: 'bottom top',
            toggleActions: "play reverse play reverse"
        }
    });

    animationMenuChangeColorThree
        .to('.logo-image.is-black', { autoAlpha: 0, x: '-5.65rem', duration: 0.5, ease: ease })
        .to('.logo-image.is-white', { autoAlpha: 1, x: '-5.65rem', duration: 0.5, ease: ease }, '<')
        .to('.header_line', { borderColor: 'rgba(255, 255, 255, 0.12)', duration: 0.5, ease: ease }, '<')
        .to('.burger-strip-one, .burger-strip-two, .burger-strip-three', { backgroundColor: 'white', duration: 0.5, ease: ease }, '<')

    let animationMenuChangeColorFour = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: 'top bottom',
            end: 'bottom 80%',
            toggleActions: "play reverse play reverse"
        }
    });

    animationMenuChangeColorFour
        .to('.body-small.is-menu', { color: 'white', duration: 0.5, ease: ease })

    //Hover + Flip
    gsap.set(".projects_image", { transformOrigin: "center center" });
    gsap.set(".projects_item-text-wrapper", { backgroundColor: "transparent", y: 0 });
    gsap.set(".projects_flip-background", { backgroundColor: "transparent" });
    gsap.set('.logo-projects', { visibility: 'hidden' });

    const projectsContainer = document.querySelector('.projects_container');
    const projectsItems = document.querySelectorAll('.projects_item-wrapper');

    projectsItems.forEach(item => {
        let isAnimating = false;
        let tl;

        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);

        function handleMouseEnter(e) {
            if (isAnimating) {
                tl.kill();
            }
            isAnimating = true;

            const targetItem = e.currentTarget;
            const change = Flip.getState(
                '.projects_image, .projects_item-text-wrapper, .projects_flip-background, .logo-projects',
                {
                    props: 'transform, position, background-color, visibility, scale, filter',
                    absolute: true,
                    nested: true,
                    targets: targetItem.querySelectorAll('.projects_image, .projects_item-text-wrapper, .projects_flip-background')
                }
            );

            targetItem.classList.add('is--active');

            tl = gsap.timeline({
                onComplete: () => isAnimating = false
            });

            tl.from(change, {
                prune: true
            })
                .to(targetItem.querySelector('.projects_image'), {
                    scale: 1.5,
                    filter: 'blur(0.3rem)',
                    duration: 1,
                    ease: ease
                }, 0)
                .to(targetItem.querySelector('.projects_item-text-wrapper'), {
                    y: -(targetItem.querySelector('.projects_item-text-wrapper').offsetTop),
                    backgroundColor: '#87da55',
                    duration: 1,
                    ease: ease
                }, 0)
                .to(targetItem.querySelector('.projects_flip-background'), {
                    backgroundColor: '#87da55',
                    duration: 1,
                    ease: ease
                }, 0)
                .to(targetItem.querySelector('.logo-projects'), {
                    visibility: 'visible',
                    duration: 1,
                    ease: ease
                }, 0.3)
        }

        function handleMouseLeave(e) {
            if (isAnimating) {
                tl.kill();
            }
            isAnimating = true;

            const targetItem = e.currentTarget;
            const change = Flip.getState(
                '.projects_image, .projects_item-text-wrapper, .projects_flip-background, .logo-projects',
                {
                    props: 'transform, position, background-color, visibility, scale, filter',
                    absolute: true,
                    nested: true,
                    targets: targetItem.querySelectorAll('.projects_image, .projects_item-text-wrapper, .projects_flip-background')
                }
            );

            targetItem.classList.remove('is--active');

            tl = gsap.timeline({
                onComplete: () => isAnimating = false
            });

            tl.from(change, {
                prune: true
            })
                .to(targetItem.querySelector('.projects_image'), {
                    scale: 1,
                    filter: 'blur(0rem)',
                    duration: 1,
                    ease: ease
                }, 0)
                .to(targetItem.querySelector('.projects_item-text-wrapper'), {
                    y: 0,
                    backgroundColor: 'transparent',
                    duration: 1,
                    ease: ease
                }, 0)
                .to(targetItem.querySelector('.projects_flip-background'), {
                    backgroundColor: 'transparent',
                    duration: 1,
                    ease: ease
                }, 0)
                .to(targetItem.querySelector('.logo-projects'), {
                    visibility: 'hidden',
                    duration: 1,
                    ease: ease
                }, 0.3)
        }
    });
});

//Моб версия
mm.add("(max-width: 375px)", () => {
    //Первая секция
    let animationHeroSection = gsap.timeline({
        delay: 0.3
    });

    animationHeroSection
        .fromTo('.logo-image', {
            xPercent: -50,
            yPercent: -50,
            x: '50vw',
            y: '50vh',
            scale: 3.5
        }, {
            xPercent: 0,
            yPercent: 0,
            x: 0,
            y: 0,
            scale: 1
        }, 1
        )
        .from('.burger-menu', {
            autoAlpha: 0,
            duration: duration,
            ease: ease
        }, 1.3)
        .from('.header_line', {
            autoAlpha: 0,
            duration: duration,
            ease: ease
        }, 1.3)
        .from('#hero-h5', {
            autoAlpha: 0,
            x: '10rem',
            filter: 'blur(0.3rem)',
            stagger: 0.1,
            duration: duration,
            ease: ease
        }, 1.3)
        .from('#h3-hero-split', {
            autoAlpha: 0,
            y: '-5rem',
            filter: 'blur(0.3rem)',
            duration: duration,
            ease: ease
        }, 2)
        .from('.btn-small.is-hero', {
            autoAlpha: 0,
            x: '10rem',
            stagger: 0.1,
            filter: 'blur(0.3rem)',
            duration: duration,
            ease: ease
        }, 2.3)
        .from('.hero_image', {
            autoAlpha: 0,
            yPercent: 50,
            filter: 'blur(0.3rem)',
            duration: duration,
            ease: ease
        }, 2.6)

    //Вторая секция 
    gsap.set('#services-item', {
        autoAlpha: 0,
        x: '10rem',
        filter: 'blur(0.3rem)'
    })

    ScrollTrigger.batch('#services-item', {
        onEnter: batch => gsap.to(batch, {
            autoAlpha: 1,
            x: '0rem',
            stagger: 0.1,
            filter: 'blur(0rem)',
            duration: duration,
            ease: ease
        }),
        onEnterBack: batch => gsap.to(batch, {
            autoAlpha: 1,
            x: '0rem',
            stagger: 0.1,
            filter: 'blur(0rem)',
            duration: duration,
            ease: ease
        }),
        onLeave: batch => gsap.to(batch, {
            autoAlpha: 0,
            x: '10rem',
            filter: 'blur(0.3rem)'
        })
    })
});