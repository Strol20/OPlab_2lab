


// Для тесту Перевірка
// console.log([
//   [...fibonacciNumber(10)],
// ]);

// for (const num of fibonacciNumber()) { //Бесконечность не предел!!
//     console.log(num); 
// } 



//Приклад виклику

// iterable = fibonacciNumber();
// iterable = randomNumber();

// iterator = iteratorWithTime(iterable,1);

// console.log(iterator)
// console.log(numFiboNum)

//Мені не подобається що воно видає просто інфініті. 
//Можна перетворити числа в BigInt, але прошавай пам'ять

const { randomNumber, fibonacciNumber } = require('./generators.js');
const { iteratorWithTime } = require('./iterator.js');

// 2. Экспортируем всё вместе для тех, кто скачает нашу библиотеку



module.exports = {
    iteratorWithTime,
    fibonacciNumber,
    randomNumber,
};
