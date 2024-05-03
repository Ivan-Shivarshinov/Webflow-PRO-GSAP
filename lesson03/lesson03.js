// titleProject название проекта (Оценка стоимости)
// screensValue строка с названиями типов экранов через запятую ("шаблонные, с уникальным дизайном, с анимациями"),
// screenPrice любое число (цена реализации одного экрана)
// percentage любое число от 1 до 100 (процент отката подрядчику),
// fullPrice любое число (имеется ввиду, желаемая сумма зароботка с проекта)
// responsive булевое значение

const titleProject = 'Лендинг';
const screensValue = 'шаблонные, c уникальным дизайном, c анимациями';
const screenPrice = 50;
const percentage = 25;
const fullPrice = 500;
const responsive = true;

console.log(`Название проекта - ${titleProject}. 
Типы экранов: ${screensValue}. 
Цена за экран - ${screenPrice}. 
Процент подрядчику - ${percentage}. 
Общая цена - ${fullPrice}.
Респонсивность - ${responsive}.`);