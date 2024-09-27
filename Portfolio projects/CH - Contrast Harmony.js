document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const duration = 1.5
  const ease = "power4.inOut"

  gsap.set(".page-wrapper", { autoAlpha: 0 })

  gsap.to(".page-wrapper", {
    autoAlpha: 1,
    ease,
    duration,
    delay: 0.5,
  })

  let splitHeading = new SplitText("[split-type]", { type: "chars" })

  let getHeroSectionAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_hero",
      delay: 0.4,
    },
  })

  getHeroSectionAnimation
    .to(".mask-img__item", {
      scaleX: 0,
      duration: 1.5,
      delay: 1.5,
      stagger: 0.05,
    })
    .from(
      ".stagger-animate",
      {
        xPercent: 30,
        stagger: 0.1,
        duration,
        ease,
        autoAlpha: 0,
      },
      "<+=0.5"
    )
    .from(
      splitHeading.chars,
      {
        duration: 0.3,
        ease,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
      },
      "<+=1"
    )
    .from(".text-size-regular.text-align-right", {
      yPercent: 30,
      autoAlpha: 0,
      ease,
      duration: 0.5,
    })

  let stickyVideoSection = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_video",
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=200%",

    },
  })

  stickyVideoSection.to(".video-wrap", { width: "100rem" })

  let videoImageWrapAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_video',
      scrub: true,
      start: '-30% top',
      end: '+=100%',

    }
  })

  videoImageWrapAnimation
    .fromTo(".video_img-wrap.width-283", { x: "-70rem" }, { x: "15rem" }, "<")
    .fromTo(".video_img-wrap.width-224", { x: "70rem" }, { x: "-15rem" }, "<")
    .fromTo(".video_img-wrap.width-195", { y: "45rem" }, { y: "-15rem" }, "<")
    .fromTo(".video_img-wrap.width-192", { y: "-45rem" }, { y: "15rem" }, "<")

  gsap.set("[work-info]", { autoAlpha: 0 })
  gsap.set("[work-project-info]", { autoAlpha: 0 })
  gsap.set(".work-3, .work-4, .work-5, .work-6, .work-7", { y: "50rem" })

  const getProjectCardAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "[project-section]",
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=300%",
    },
  })

  getProjectCardAnimation
    .from(".before-component_block", {
      yPercent: 100,
      stagger: 0.1,
    })

    .fromTo(".before-component_block.first", { x: "0rem" }, { x: "60rem" })
    .fromTo(".before-component_block.second", { x: "0rem" }, { x: "30rem" }, "<")

    .to("[work-info]", { autoAlpha: 1 }, "<")
    .to("[work-project-info]", { autoAlpha: 1 }, "<")
    .from(
      "[project-section-title]",
      {
        yPercent: 100,
        stagger: 0.08,
      },
      "<"
    )
    .to(".work-3", { y: "0rem" })
    .to('[cave]', { opacity: 0.99 }, "<")
    .to('[cave]', { opacity: 0.6 }, "<")
    .to('[num-project]', { text: "2" }, "<")
    .to('[childhood]', { opacity: 1 })
    .to(".work-4", { y: "0rem" })
    .to('[childhood]', { opacity: 0.99 }, "<")
    .to('[childhood]', { opacity: 0.6 }, "<")
    .to('[num-project]', { text: "3" }, "<")
    .to('[leopard]', { opacity: 1 })
    .to(".work-5", { y: "0rem" })
    .to('[leopard]', { opacity: 0.99 }, "<")
    .to('[leopard]', { opacity: 0.6 }, "<")
    .to('[num-project]', { text: "4" }, "<")
    .to('[cornlady]', { opacity: 1 })
    .to(".work-6", { y: "0rem" })
    .to('[cornlady]', { opacity: 0.99 }, "<")
    .to('[cornlady]', { opacity: 0.6 }, "<")
    .to('[num-project]', { text: "5" }, "<")
    .to('[matilda]', { opacity: 1 })
    .to(".work-7", { y: "0rem" })
    .to('[matilda]', { opacity: 0.99 }, "<")
    .to('[matilda]', { opacity: 0.6 }, "<")
    .to('[num-project]', { text: "6" }, "<")
    .to('[cat]', { opacity: 1 })

  let splitHeadings = new SplitText("[split-headings]", { type: "lines" })

  ScrollTrigger.batch(splitHeadings.lines, {
    once: true,
    onEnter: batch => {
      gsap.from(batch, {
        duration: 1,
        y: 100,
        x: 50,
        autoAlpha: 0,
        stagger: 0.5,
        ease: "back.inOut(2)"
      })
    }
  })

  let currentScroll = 0
  let isScrollingDown = true

  let tween = gsap
    .to(".markquee-track", {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "none",
    })
    .totalProgress(0.5)

  let tweenReverse = gsap
    .to(".markquee-track.bottom", {
      xPercent: 50,
      repeat: -1,
      duration: 40,
      ease: "none",
    })
    .totalProgress(0.5)

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > currentScroll) {
      isScrollingDown = true
    } else {
      isScrollingDown = false
    }

    gsap.to(tween, {
      timeScale: isScrollingDown ? 1 : -1,
    })

    gsap.to(tweenReverse, {
      timeScale: isScrollingDown ? 1 : -1,
    })

    currentScroll = window.pageYOffset
  })
})