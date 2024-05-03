let titleProject = 'Лендинг';
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
let screenPrice = 10000;
let percentage = 15;
let responsive = true;

let currentTitleProject = prompt("Название проекта?");
titleProject = currentTitleProject;

console.log(titleProject);

let currentScreensValue = prompt("Какие типы экранов?");
screensValue = currentScreensValue;

console.log(screensValue);

let currentResponsive = prompt("Сайт респонсивный?");
currentResponsive = currentResponsive.toLowerCase() === 'да';
responsive = currentResponsive;

console.log(responsive);


let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");

let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = prompt("Сколько будет стоить этот второй сервис?");

let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;

let servicePercentPrice = Math.floor(fullPrice * (100 - percentage) / 100);

console.log(servicePercentPrice);

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
};