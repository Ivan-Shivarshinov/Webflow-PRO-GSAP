gsap.utils.toArray(".button").forEach((button, index) => {
    button.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#section" + (index + 1),
                offsetY: 100
            }
        })
    })
});

gsap.utils.toArray(".button.to-box").forEach((button, index) => {
    button.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#box" + (index + 1),
                offsetY: 100
            }
        })
    })
});