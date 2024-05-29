const tabButton = document.querySelectorAll('.button');
const tabBlock = document.querySelectorAll('.block');
const buttonNum = document.querySelectorAll('.button-num');
const blockNum = document.querySelectorAll('.block-num');


tabButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabBlock.forEach(block => {
            block.classList.remove('active')
        })
        tabBlock[index].classList.add('active')
    })
})

buttonNum.forEach((number, index) => {
    number.textContent = index + 1
})

blockNum.forEach((number, index) => {
    number.textContent = index + 1
})
