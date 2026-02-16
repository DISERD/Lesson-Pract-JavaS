// 1. Конкатенація рядків

const word1 = 'JavaScript';
const word2 = 'is';
const word3 = 'awesome';

const sentence = word1 + ' ' + word2 + ' ' + word3;
console.log(sentence); // "JavaScript is awesome"

// Порядок операндів та типи даних
let result;

result = 10 + '10';
console.log(result); // "1010"
console.log(typeof result); // "string"

result = 10 + 10 + '10';
console.log(result); // "2010" 
// (Перші два числа додалися математично, потім результат зшився з рядком)

result = '10' + 10 + 10;
console.log(result); // "101010"
// (Рядок на початку перетворює всі наступні додавання на конкатенацію)



// 2. Властивості та методи рядків

const brand = 'Apple iPhone 15 Pro';

// Довжина рядка
console.log(brand.length); // 19

// Зміна регістру
console.log(brand.toLowerCase()); // "apple iphone 15 pro"
console.log(brand.toUpperCase()); // "APPLE IPHONE 15 PRO"

// Пошук індексу підрядка
console.log(brand.indexOf('iPhone')); // 6
console.log(brand.indexOf('Samsung')); // -1

// Перевірка наявності підрядка (чутливо до регістру)
console.log(brand.includes('iPhone')); // true
console.log(brand.includes('iphone')); // false

// Початок та кінець рядка
console.log(brand.startsWith('Apple')); // true
console.log(brand.endsWith('Pro')); // true

// Доповнення рядка (padStart / padEnd)
const code = '777';
console.log(code.padStart(6, '0')); // "000777"
console.log(code.padEnd(6, '!'));   // "777!!!"

// Очищення пробілів
const email = '   user@gmail.com   ';
console.log(email.trim()); // "user@gmail.com"



// 3. Шаблонні рядки (Інтерполяція)

const product = 'Laptop';
const price = 1200;
const quantity = 2;

// Старий спосіб (Конкатенація)
const message = 'You bought ' + quantity + ' ' + product + 's for ' + (price * quantity) + ' dollars.';
console.log(message); 

// Новий спосіб (Шаблонні рядки)
const sameMessage = `You bought ${quantity} ${product}s for ${price * quantity} dollars.`;
console.log(sameMessage);

// Будь-який вираз всередині ${} буде обчислено
console.log(`2 + 2 = ${2 + 2}`); // "2 + 2 = 4"