const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

const openModal = () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

openBtn.addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        return;
    } else if (event.target === overlay || event.target === closeBtn) {
        closeModal();
    }
});