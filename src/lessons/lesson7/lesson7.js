console.log("START")
//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

// class Animal {
//     constructor(name = 'Animal') {
//          this.name = name;
//     }
//     walk(){
//         console.log(`${this.name} walking`)
//     }
//     eat(){
//         console.log(`${this.name} éating`)
//     }
//     sleep(){
//         console.log(`${this.name} sleeping`)
//     }
// }
//
// let a = new Animal("Cat")
//
// a.eat()


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

// class Monkey extends Animal {
//         constructor(name = 'Monkey') {
//         super(name);
//     }
//     roar(){
//         console.log(`${this.name} roaring`)
//     }
//     climb(){
//         console.log(`${this.name} climbing`)
//     }
// }
//
// let b = new Monkey("Dog")
//
// b.eat()
// b.roar()

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
// class Human extends Monkey {
//     constructor(name = 'Human') {
//         super(name);
//     }
//     speak(){
//         console.log(`${this.name} speaking`)
//     }
//     think(){
//         console.log(`${this.name} thinking`)
//     }
// }
//
// let c = new Human("Vasya")
//
// c.eat()
// c.roar()
// c.speak()
// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


function Animal(name = 'Animal'){
    this.name = name
}
Animal.prototype.walk = function (){
        console.log(`${this.name} walking`)
    }

Animal.prototype.eat = function (){
    console.log(`${this.name} eating`)
}

let a =  new Animal("Cat")
// console.log(a)
// a.eat()

function Monkey(name = 'Monkey'){
    Animal.call(this)
    this.name = name
}

// Monkey.prototype.roar = function () {
//     console.log(`${this.name} roaring`)
// }

Monkey.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Monkey,
    },
    roar:{
       value:  function() {
           console.log(`${this.name} roaring`)
       }
    }
} )

let b = new Monkey("Dog")


console.log(b)
// b.eat()
// b.roar()
// Task 05
// Используя метод Apply реализовать свой собственный метод bind

Function.prototype.customBind = function (ctx, ...args) {
    //debugger
    const _this = this;
    return function (...args2) {
        return _this.apply(ctx, ...args, ...args2);
    }
}

let obj = {
    name: 'Evgen',
    sayName() {
        console.log(this.name)()
    }
};

let obj2 = { name: 'Yo' };
let obj3 = { name: 'Bla' };

obj.sayName.customBind(obj2)()