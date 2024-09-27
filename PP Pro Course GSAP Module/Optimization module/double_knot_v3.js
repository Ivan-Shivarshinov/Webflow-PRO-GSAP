document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', function () {
        setTimeout(function () {
            gsap.to('.preloader', {
                duration: .5,
                autoAlpha: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    document.querySelector('.preloader').classList.add('preloader-hidden');
                }
            })
        }, 500)
    })
});