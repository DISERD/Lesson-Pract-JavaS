//1. Математичні оператори

// Змінні для прикладу
const apples = 20;
const friends = 6;

// Основні операції
console.log(apples + friends); // 26
console.log(apples - 5);       // 15
console.log(apples * 2);       // 40
console.log(apples / 4);       // 5

// Залишок від ділення
console.log(apples % friends); // 2

// Піднесення до степеня (ES6+)
console.log(2 ** 3);           // 8

// Комбіновані оператори (зміна змінної)
let score = 100;
score += 50;  // Аналог: score = score + 50
score *= 2;   // Аналог: score = score * 2
console.log(score); // 300



//2. Оператори порівняння
const speedLimit = 60;
const currentSpeed = 85;
const taxiSpeed = 60;

console.log(currentSpeed > speedLimit);  // true
console.log(currentSpeed < 50);          // false
console.log(taxiSpeed >= 60);            // true
console.log(taxiSpeed <= 50);            // false

// Рівність та нерівність
console.log(taxiSpeed === speedLimit);   // true
console.log(currentSpeed !== 60);        // true



//3. Сувора та несувора рівність
// Чому "==" — це погано:
console.log('10' == 10);   // true
console.log(true == 1);    // true
console.log("" == 0);      // true

// Чому "===" — це добре:
console.log('10' === 10);  // false
console.log(null === undefined); // false



//4. Приведення до числа та перевірка на NaN
const input = "123";
const converted = Number(input); // 123

console.log(typeof converted); // "number"

// Якщо рядок не є числом
const invalid = Number("Привіт"); // NaN

// Перевірка: чи є результат помилкою (NaN)
console.log(Number.isNaN(invalid)); // true
console.log(Number.isNaN(123));     // false



//5. Парсинг чисел із рядків
const width = "150.55px";

console.log(Number.parseInt(width));   // 150
console.log(Number.parseFloat(width)); // 150.55

// Якщо рядок починається не з числа — буде NaN
console.log(Number.parseInt("Вага: 10кг")); // NaN

//6. Проблема чисел із плаваючою крапкою
console.log(0.1 + 0.7); // 0.7999999999999999

// Рішення 1: Округлення через toFixed (повертає рядок!)
const sum = 0.1 + 0.7;
console.log(Number(sum.toFixed(2))); // 0.8

// Рішення 2: Математичний спосіб (через цілі числа)
console.log((0.1 * 10 + 0.7 * 10) / 10); // 0.8

// 7. Об'єкт Math
const val = 4.7;

console.log(Math.floor(val)); // 4
console.log(Math.ceil(val));  // 5
console.log(Math.round(val)); // 5

console.log(Math.max(5, 12, 8, 130, 44)); // 130
console.log(Math.min(5, 12, 8, 130, 44)); // 5

console.log(Math.pow(5, 2)); // 25

// Генерація випадкового числа від 1 до 100
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);