let percentage = 15;

let titleProject = getTitle();
let screensValue = getScreensValue();
let isResponsive = getResponsiveStatus();
let screenPrice = getScreenPrice();
let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();
let isDiscount = getRollbackMessage();

function getTitle() {
    let titleProject = prompt("Название проекта?").toLowerCase();
    titleProject = titleProject.charAt(0).toUpperCase() + titleProject.slice(1);
    console.log(titleProject, '- Название проекта');
    return titleProject;
}

function checkIsNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

 function getScreenPrice() {
    let screenPrice;
    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt("Сколько стоит экран?");
    }
    console.log(screenPrice, '- Цена экрана');
    return +screenPrice;
}

function getResponsiveStatus() {
    let responsive = prompt("Сайт респонсивный?");
    responsive = responsive.toLowerCase() === 'да';
    console.log(responsive, 'Сайт респонсивный - да/нет?');
    return responsive;
}

function getScreensValue() {
  let screensValue = prompt("Какие типы экранов?");
  console.log(screensValue, '- Типы экранов');
  return screensValue;
}

function getAllServicePrices() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let service = prompt(`Какой сервис нужен?`);
      let isValid = false;
      let servicePrice;
      while (!isValid) {
        servicePrice = prompt(`Сколько будет стоить "${service}"?`);
        if (checkIsNumber(servicePrice)) {
          isValid = true;
        } else {
          alert('Введите число!');
        }
      }
      sum += +servicePrice;
    }
    let allServicePrices = sum;
    console.log(allServicePrices, 'Стоимость всех сервисов');
    return allServicePrices;
}

function getFullPrice() {
    let fullPrice = screenPrice + allServicePrices;
    console.log(fullPrice, 'Полная стоимость проекта');
    return fullPrice;
}

function getServicePercentPrices() {
    let servicePercentPrice = Math.floor(fullPrice * (100 - percentage) / 100);
    console.log(servicePercentPrice, 'Стоимость за вычетом процента');
    return servicePercentPrice;
}

function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log('Сделаем скидку в 10%');
    } else if (fullPrice > 20000 && fullPrice < 50000) {
        console.log('Сделаем скидку 5%');
    } else if (fullPrice < 20000 && fullPrice > 0) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice < 0) {
        console.log('Что-то пошло не так');
    } else if (fullPrice === 0) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice === 20000) {
        console.log('Сделаем скидку 5%');
    } else if (fullPrice === 50000) {
        console.log('Сделаем скидку в 10%');
    } else {
        console.log('Возникла непредвиденная ошибка');
    }
}