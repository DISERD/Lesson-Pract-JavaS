/* 3
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
Вона приймає два параметри, 

orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - 
результат множення кількості товарів на ціну одного.

Виклик calculateTotalPrice(5, 100) повертає 500 */
const calculateTotalPrice = function (orderedQuantity, pricePerItem) {
    const sum = orderedQuantity * pricePerItem;
    return sum;
};

console.log(calculateTotalPrice(5, 100));

/* 4
створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20

const calculateTax = function (amount, taxRate = 0.2) {
    return amount * taxRate;
};

console.log(calculateTax(100, 0.1)); // 10
console.log(calculateTax(200, 0.1)); // 20
console.log(calculateTax(100, 0.2)); // 20


// створити функцію для створення настроюваного цикла
// з параметрами від до та кроком

    const count = function (from = 0, to = 10, step = 1) {
        for (let i = from; i <= to; i += step) {
            console.log(i);
        }
    };

    count(1, 5); // From = 1, To = 5, step = 1
    count(2); // From = 2, To = 10, step = 1
    count(undefined, 5, 2); // From = 0, To = 5, step = 2
    count(); // From = 0, To = 10, step = 1
    
// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення 
// ${item} is available to order!
// якщо немає  "Sorry! We are out of stock!";



// checkStorage(["apple", "plum", "pear"], "pLuM")
const checkStorage = function(storage, item) {
    if (storage.includes(item)) {
        return `${item} is available to order!`;
    } 
    return "Sorry! We are out of stock!";
};

console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));


// 1. Напиши функцію тyAverageScore яка у якості аргументу // отримує масив з оцінками, і виводить користувачу його
// середній результат у наступному форматі:
// Average score: A (якщо середня оцінка від 91 до 100)
// Average score: В (якщо середня оцінка від 81 до 90)
// Average score: C (якщо середня оцінка від 71 до 80)
// Average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore ([100, 75, 81, 96]));
// console.log(myAverageScore ([45, 63, 85, 70]));
// console.log(myAverageScore ([77, 82, 60, 58]));
// console.log(myAverageScore ([93, 99, 93, 96]));

const myAverageScore = function(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const average = sum / scores.length;
    
    if (average >= 91 && average <= 100) {
        return "Average score: A";
    } else if (average >= 81 && average <= 90) {
        return "Average score: B";
    } else if (average >= 71 && average <= 80) {
        return "Average score: C";
    } else {
        return "Average score: D";
    }
};

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
