const button = document.querySelector('.button');
const background = document.querySelector('.section.is-white');
const heading = document.querySelector('.section.is-white');
const text = document.querySelector('.button-txt');

const changeColorBackground = gsap.to(background, {
    duration: 1,
    backgroundColor: 'black',
    paused: true
});

const changeColorHeading = gsap.to(heading, {
    duration: 1,
    color: 'white',
    paused: true
});

const changeText = gsap.to(text, {
    duration: .75,
    text: "Вернуть назад",
    paused: true
});

let isReversed = false;

button.addEventListener('click', () => {
    if (isReversed) {
        changeColorBackground.reverse();
        changeColorHeading.reverse();
        changeText.reverse();
    } else {
        changeColorBackground.play();
        changeColorHeading.play();
        changeText.play();
    }
    isReversed = !isReversed;
});