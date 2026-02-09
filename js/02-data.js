//lesson 2. Data types

/* 1. типи даних
    число (number),
    рядок(string),
    буль(boolean),
    (спец значення null та undefined)*/

const myAge = "10 years";
const totalPrice = 200.74;
//const message = 'welcome!';//
const username = `Mango995`;
const description = "JavaScript is awesome!";

const isOpen = true;
const shouldConfirm = false;
const isLoggedIn = false;
const isStudent = true;

let value = null;
console.log(value); // null

let myValue;
console.log(myValue); // undefined

/*
  2. - Оператор typeof
*/
const quantity = 17;
console.log(typeof quantity); // виведе "number"

const myMessage = "JavaScript is awesome!";
console.log(typeof myMessage); // виведе "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // виведе "boolean"
const isModalOpen = true;
console.log(typeof isModalOpen); // виведе "boolean"

let userAge;
console.log(typeof userAge); // виведе "undefined"



// 3. - Інтерфейс (alert)
const myMmessage = "JavaScript is awesome!";

alert(myMmessage); 
console.log(window);

console.log('До'); 
alert('qweqweqwe'); 
console.log('Після'); 


const message = "Чи хочеш ти продовжити підписку?";
confirm(message); // Виводить вікно з кнопками OK (true) та Cancel (false)

const renewSub = confirm(message);
console.log(renewSub); // Виведе true або false залежно від вибору користувача