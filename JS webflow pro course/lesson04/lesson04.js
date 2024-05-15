let screenPrice = 10000;
let percentage = 15;

let titleProject = prompt("Название проекта?");

console.log(titleProject);

let screensValue = prompt("Какие типы экранов?");

console.log(screensValue);

let responsive = prompt("Сайт респонсивный?");
responsive = responsive.toLowerCase() === 'да';

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
} else {
    console.log('Скидка не предусмотрена');
};