document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const state = Flip.getState(".card");
        card.style.flex = '1.5';
        document.querySelectorAll('.card').forEach(otherCard => {
            if (otherCard !== card) otherCard.style.flex = '1';
        });
        Flip.from(state, {
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });

    card.addEventListener('mouseleave', () => {
        const state = Flip.getState(".card");
        document.querySelectorAll('.card').forEach(otherCard => {
            otherCard.style.flex = '1';
        });
        Flip.from(state, {
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });
});