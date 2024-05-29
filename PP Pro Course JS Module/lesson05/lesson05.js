let screenPrice = 10000;
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

let responsive = prompt("Сайт респонсивный?");
responsive = responsive.toLowerCase() === 'да';
console.log(responsive, 'Сайт респонсивный: да/нет?');

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");

let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = prompt("Сколько будет стоить этот второй сервис?");

let getAllServicePrices = function () {
    let allServicePrices = +servicePrice1 + +servicePrice2;
    console.log(allServicePrices, 'Стоимость всех сервисов');
    return allServicePrices;
}

let allServicePrices = getAllServicePrices();

function getFullPrice() {
    let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;
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