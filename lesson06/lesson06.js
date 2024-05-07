let percentage = 15;

function getTitle() {
    let titleProject = prompt("Название проекта?").toLowerCase();
    titleProject = titleProject.charAt(0).toUpperCase() + titleProject.slice(1);
    console.log(titleProject, 'Название проекта');
    return titleProject;
}

let titleProject = getTitle();

let screensValue = prompt("Какие типы экранов?");
console.log(screensValue, 'Типы экранов');

// простая функция проверки, является ли value числом или нет
function IsNumber(value) {
    const result = typeof value === 'number';
    console.log(result);
  return result;
}

// IsNumber(5); // true
// IsNumber('5'); // false

// функция, которая: 
// - переводит строку в число
// - проверяет, является ли полученное число конечным и не равным NaN
function checkIsNumber(value) {
    const parseNumber = parseFloat(value);
    const result = !isNaN(parseNumber) && isFinite(parseNumber);
    console.log(result);
   return result;
  }

// checkIsNumber('5'); // true
// checkIsNumber('five'); // false

function getScreenPrice() {
    while (checkIsNumber(screenPrice) || screenPrice !== null || screenPrice = screenPrice.trim()) {
        screenPrice = +prompt("Сколько стоит экран?");
    }
    console.log(screenPrice, 'Цена экрана');
    return screenPrice;
}

let screenPrice = getScreenPrice();

let responsive = prompt("Сайт респонсивный?");
responsive = responsive.toLowerCase() === 'да';
console.log(responsive, 'Сайт респонсивный: да/нет?');

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let service = prompt(`Какой сервис нужен?`);
      let isValid = false;
      let servicePrice;
      while (!isValid) {
        servicePrice = prompt(`Сколько будет стоить ${service}?`);
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
 
let allServicePrices = getAllServicePrices();

function getFullPrice() {
    let fullPrice = screenPrice + allServicePrices;
    console.log(fullPrice, 'Полная стоимость проекта');
    return fullPrice;
}

let fullPrice = getFullPrice();

function getServicePercentPrices() {
    let servicePercentPrice = Math.floor(fullPrice * (100 - percentage) / 100);
    console.log(servicePercentPrice, 'Стоимость за вычетом процента');
    return servicePercentPrice;
}

let servicePercentPrice = getServicePercentPrices();

function getRollbackMessage() {
    if (servicePercentPrice > 50000) {
        console.log('Сделаем скидку в 10%');
    } else if (servicePercentPrice > 20000 && fullPrice < 50000) {
        console.log('Сделаем скидку 5%');
    } else if (servicePercentPrice >= 0 && fullPrice < 20000) {
        console.log('Скидка не предусмотрена');
    } else if (servicePercentPrice < 0) {
        console.log('Что то пошло не так');
    } else if (servicePercentPrice === 0) {
        console.log('Скидка не предусмотрена');
    } else if (servicePercentPrice === 20000) {
        console.log('Сделаем скидку 5%');
    } else if (servicePercentPrice === 50000) {
        console.log('Сделаем скидку в 10%');
    } else {
        console.log('Скидка не предусмотрена');
    }
}

getRollbackMessage();