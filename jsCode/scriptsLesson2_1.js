// ------------------
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// function fib(n) {
//     if (n <= 1) {
//     return n
//     } else {
//         return (fib(n-1)  + fib(n-2))
//     }
//
// }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// ----------------------
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// function factorial(n) {
//     if (n == 1) {
//     return n
//     } else {
//         return n * factorial(n-1)
//     }
// }
//
// alert( factorial(5) ); // 120

// -------------------
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// function sumTo(n) {
//
//     if (n == 1) {
//         return n
//     } else {
//         return n + sumTo(n-1)
//     }
// }
//
//
// alert( sumTo(100) ); // 5050


//--------------
// Следующий код создаёт массив из стрелков (shooters).
//
//     Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

// function makeArmy() {
//     console.log('вызов')
//     let shooters = [];
//
//     let i = 0;
//     while (i < 10) {
//         let j = i;
//         let shooter = function() { // функция shooter
//             console.log('вызов в функции')
//             console.log( j ); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }
//
//     return shooters;
// }
//
// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// console.log(army.9); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
//

// -----
// У нас есть массив объектов, который нужно отсортировать:
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
//     users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?
//
//     users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
//
//     Напишите функцию byField, которая может быть использована для этого.
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(param) {
//      return function (a, b){
//          return a[param] > b[param] ? 1 : -1
//      }
// }
//
// console.log(users.sort(byField('age')))

//-----------------------------
// У нас есть встроенный метод arr.filter(f) для массивов.
// Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
//
//     Сделайте набор «готовых к употреблению» фильтров:
//
//     inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
//     Они должны использоваться таким образом:
//
//     arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
//
// function inBetween(a, b) {
//     return function (el) {
//         return el >= a && el <= b
//     }
// }

// console.log(arr.filter(inBetween(3,6)))


//
// function inArray(array) {
//     return function (el) {
//             return array.includes(el)
//         }
// }
//
// console.log(arr.filter(inArray([1,2,3])))


// ------------------------------
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// function carry(f) {
//     return function (a) {
//         return function (b){
//             return f(a,b)
//         }
//     }
// }
//
// function res (a,b) {
//     return a + b
// }
//
// let sum = carry(res)
//
// console.log(sum(4)(2))


