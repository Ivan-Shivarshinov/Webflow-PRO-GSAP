document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        gsap.to(box, {
            duration: 0.5,
            backgroundColor: "white",
            scale: 0.75,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(box, {
                    duration: 0.5,
                    autoAlpha: 0,
                    scale: 1.25,
                    ease: "power3.inOut",
                    onComplete: () => {
                        const otherBoxes = Array.from(document.querySelectorAll(".box")).filter(otherBox => otherBox !== box);
                        gsap.to(otherBoxes, {
                            backgroundColor: "white",
                            scale: 0.75,
                            stagger: {
                            		amount: 0.5,
                            		from: "random",
                            		grid: "auto",
                            		ease: "power3.inOut"
                            },
                            onComplete: () => {
                                gsap.to(otherBoxes, {
                                    autoAlpha: 0,
                                    scale: 1.25,
                                    stagger: {
                                    		amount: 0.5,
                                    		from: "random",
                                    		grid: "auto",
                                    		ease: "power3.inOut"
                                    },
                                    onComplete: () => {
                                        setTimeout(() => {
                                            gsap.to(".box", {
                                                duration: 0.50,
                                                ease: "power3.inOut",
                                                scale: 1,
                                                autoAlpha: 1,
                                                backgroundColor: "black",
                                            });
                                        }, 500);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    });
});