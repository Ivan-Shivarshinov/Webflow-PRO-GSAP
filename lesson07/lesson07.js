function randomGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function checkIsNumber(value) {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && isFinite(parsedValue) && value.trim() === parsedValue.toString();
};

const gameBotFunction = function () {
    alert('Привет! Я хочу сыграть с тобой в игру ;)\nЯ загадаю любое число от 1 до 100, а ты должен угадать - всё просто!');

    let mysteryNumber = randomGenerate(1, 100);
    let userNumber;
    let attempts = 3;

    const getResult = function () {
        userNumber = prompt('Введи число от 1 до 100:');

        if (userNumber === null) {
            alert(`Сдаёшься? Значит, я победил :з\nМоё число - ${mysteryNumber}.`);
            return;
        }

        if (!checkIsNumber(userNumber)) {
            alert('Нужно ввести число! >:c');
            getResult();
            return;
        }

        if (userNumber == mysteryNumber) {
            alert(`Поздравляю! Ты угадал моё число - ${mysteryNumber}!`);

            const playAgain = confirm('Хочешь сыграть еще раз?');

            if (playAgain) {
                mysteryNumber = randomGenerate(1, 100);
                attempts = 3;
                getResult();
            } else {
                alert('Спасибо за игру! :)');
            }
            return;
        }

        if (userNumber < mysteryNumber) {
            attempts--;
            alert(`Моё число больше :з\nОсталось попыток - "${attempts}"`);
        } else {
            attempts--;
            alert(`Моё число меньше :з\nОсталось попыток - "${attempts}"`);
        }

        if (attempts > 0) {
            getResult();
        } else {
            alert(`К сожалению, ты не угадал моё число :с\nЯ загадал - ${mysteryNumber}. Игра окончена!`);

            const playAgain = confirm('Хочешь сыграть еще раз?');

            if (playAgain) {
                mysteryNumber = randomGenerate(1, 100);
                attempts = 3;
                getResult();
            } else {
                alert('Спасибо за игру!');
            }
        }
    };

    getResult();
};

gameBotFunction();  