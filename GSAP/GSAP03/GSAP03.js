document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        gsap.to(".box", {
            duration: 0.5,
            backgroundColor: "white",
            y: -12.5,
            scale: 1.1,
            stagger: {
                each: 0.1,
                from: "random",
                grid: "auto",
                ease: "power2.inOut",
            },
            onComplete: () => {
                gsap.to(".box", {
                    duration: 0.5,
                    autoAlpha: 0,
                    y: 12.5,
                    scale: 0.9,
                    stagger: {
                        each: 0.1,
                        from: "random",
                        grid: "auto",
                        ease: "power2.inOut",
                    },
                });
            },
        });
    });
});
