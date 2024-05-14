document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("click", () => {
            gsap.to(square, {
                duration: 0.5,
                ease: "power2.inOut",
                scale: 0,
                autoAlpha: 0
            });
            squares.forEach(otherSquare => {
                if (otherSquare !== square) {
                    gsap.to(otherSquare, {
                        duration: 0.5,
                        ease: "power2.inOut",
                        scale: 0,
                        autoAlpha: 0,
                        delay: 0.1
                    });
                }
            });
            setTimeout(() => {
                squares.forEach(square => {
                    gsap.to(square, {
                        duration: 0.5,
                        ease: "power2.inOut",
                        scale: 1,
                        autoAlpha: 1
                    });
                });
            }, 750);
        });
    });
});