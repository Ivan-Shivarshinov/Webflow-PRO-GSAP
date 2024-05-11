const heading = document.querySelector('.h1');

heading.addEventListener('click', () => {
    heading.classList.toggle('is-clicked');
});

const orangeBlock = document.querySelector('.orange-block');

orangeBlock.addEventListener('click', () => {
    orangeBlock.classList.toggle('blue-block');
});

