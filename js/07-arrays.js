const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
console.log(numbers.length - 1); // 4
console.log(numbers[0]);

const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits.length);
console.log(fruits.length-1);
console.log(fruits[fruits.length-1]);
console.log(fruits[0]);
console.log(fruits[2]);

fruits[3] = "peach";
fruits[1] = "banana";
fruits[4] = "pineapple";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}