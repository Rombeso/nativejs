import {log} from "util";

console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj: someObjType = {
    name: 'Eugene',
    age: 32,

}

function greeting(){
    // @ts-ignore
    return `My name is ${this.name}. I am ${this.age}`
}
// @ts-ignore
someObj.greeting = greeting

// @ts-ignore
// console.log(someObj.greeting())


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

type CounterType = {
    init: number,
    getCurrentCount: () => void,
    increment: () => void,
    decrement: () => void,
    setCurrentCount: (num: number) => void,
    restCurrentCount: () => void,
}

let counter: CounterType = {
    init: 5,
    getCurrentCount() {
        return console.log(this.init)
    },
    increment() {
        this.init++
    },
    decrement() {
        this.init--
    },
    setCurrentCount(num: number) {
        this.init = num
    },
    restCurrentCount() {
        this.init = 0
    },
}
// console.log(counter.restCurrentCount())
// console.log(counter.getCurrentCount())

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

let counter1: any = {
    init: 5,
    getCurrentCount() {
        return console.log(this.init)
    },
    increment() {
        this.init++
        return this
    },
    decrement() {
        this.init--
        return this
    },
    setCurrentCount(num: number) {
        this.init = num
        // function f() {counter1.this}
        return this

    },
    restCurrentCount() {
        this.init = 0
        return this
    },
}
//console.log(counter1.setCurrentCount(10).increment().getCurrentCount())
// counter1.setCurrentCount(10).increment()

// console.log(counter1.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())
// 12)

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// function MyFirstConstructorFunc (name: any, age: any) {
//   //
//    return someObj.greeting.call({name, age})
// }

function MyFirstConstructorFunc(name: any, age: any) {
    // @ts-ignore
    this.name = name
    // @ts-ignore
    this.age = age
}
// @ts-ignore

MyFirstConstructorFunc.prototype.greeting = someObj.greeting
// @ts-ignore

let a = new MyFirstConstructorFunc('kkk', 12)
// console.log(new MyFirstConstructorFunc('kkk', 12))

// console.log(a.greeting())

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {
    name: 'One',
    // hi() {
    //     helperObj.greeting.bind(Two)()
    // }
};
let Two = {
    name: 'Two',
    age: 0,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
//
// Two.sayHello.bind(One)()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

const helperObj: any = {
    name: '',
    age: 0,
    changeName(name: string) {
        this.name = name
        return this
    },
    setAge(age: number) {
        this.age = age
        return this
    },
    greeting:
        Two.sayHello
}
// console.log(helperObj.changeName('Vasya').greeting())
// @ts-ignore
// helperObj.changeName('Vasya1').greeting()


// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя

// ???????????????????
// function sumTwoNumbers(a: number, b: number): number {
//     return a + b
// };
//
// function bindNumber(n:any, num:any){
// let num2 = num
//     // @ts-ignore
//     const _this = this;
//     return function ff(num2:any) {
//     // @ts-ignore
//       return n.bind(_this.n, num2, num2)()
//     }
//     // @ts-ignore
//     ff(num)
// }

function sumTwoNumbers(a, b) { return a + b };

// @ts-ignore
const bindNumber = (callBack, num) => {
    return callBack.bind(null, num)
}

console.log(bindNumber(sumTwoNumbers, 10)(5))


// console.log(bindNumber(sumTwoNumbers(1,2), 3))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One

// ???????????????????
function someFunc(One:any, helperObj:any) {
    return function (str:string){
        helperObj.changeName.bind(One, str)()
    }
}

someFunc(One, helperObj)('Roman')
console.log(One)

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30

helperObj.setAge.bind(Two, 30)()
// console.log(Two)
// console.log('two', Two.age)

// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
// @ts-ignore
One.hi = helperObj.greeting.bind(Two)
// @ts-ignore

One.hi()
// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};