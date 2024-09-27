document.addEventListener('DOMContentLoaded', function () {
    //Анимация прелоудера
    window.addEventListener('load', () => {
        setTimeout(() => {
            gsap.to(".preloader", {
                duration: .5,
                autoAlpha: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    document.querySelector('.preloader').classList.add('preloader-hidden');
                }
            });
        }, 500);
    });
});