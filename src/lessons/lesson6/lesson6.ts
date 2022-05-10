import {log} from "util";

console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

class Test {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    seyHi() {
        console.log('Perent')
    }
}

// class Test {
//     name: string
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     seyHi() {
//         console.log('Perent')
//     }
// }
//
// class Test2 extends Test {
//     age: number
//
//     constructor(name: string, age: number) {
//         super(name)
//         this.age = age
//     }
//     seyBye() {
//     }
// }
//
// class Test3 extends Test2 {
//     city: string
//
//     constructor(name: string, age: number, city: string) {
//         super(name, age)
//         this.city = city
//     }
//     seyYo() {
//     }
//
// }
//
// let obj = new Test3('Vasya', 33, 'Moscow')
//
// console.log(obj)
//
// obj.seyHi()


// console.dir(function (){})
// console.dir(class {})

// class Test {
//     name: string
//     age: number
//     city: string = 'Minsk'
//     //sayHi: Function
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age
//
//         //this.sayHi = function (){}
//     }
//
//     sayHi(){
//         console.log(this.name)
//     }
//
//     bindFunc = () => {
//         console.log(this.name)
//     }
// }
//
// let obj = new Test("Evgen", 33);
// console.log(obj)
// obj.city = 'Moscow'

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.


class Student {

    name: string
    lastName: string
    group: number
    balls: [number, number, number, number, number]
    avBall: any

    constructor(name: string, lastName: string, group: number, balls: [number, number, number, number, number]) {
        this.name = name
        this.lastName = lastName
        this.group = group
        this.balls = balls
        this.avBall = this.avballs(balls)
    }

    avballs(balls: any) {
        return balls.reduce((acc: number, el: number) => (acc + el)) / balls.length
    }
}


let students = []
students.push(new Student("Vasya", 'Vasin', 15, [1, 2, 4, 5, 5]))
students.push(new Student("Petya", 'Vasin', 1, [1, 2, 4, 4, 5]))
students.push(new Student("Alex", 'Vasin', 14, [2, 2, 2, 3, 5]))
students.push(new Student("Roma", 'Vasin', 55, [5, 5, 5, 5, 5]))
students.push(new Student("Olya", 'Vasin', 66, [5, 5, 4, 5, 4]))
console.log(students)

class Sort {
    sortAverageBalls: any
    fourOrFive: any

    constructor(arr: any[]) {
        this.sortAverageBalls = function () {
            arr.sort((a: any, b: any) => a.avBall - b.avBall)
        }
        this.fourOrFive = function () {
            let b = arr.filter(el => {
                if (el.balls.includes(1) || el.balls.includes(2) || el.balls.includes(3)) {
                    return ''
                } else {
                    return el
                }

            })
            return b
        }
    }
}

let a = new Sort(students)

console.log(a.sortAverageBalls())
console.log(a.fourOrFive())


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class New {
    a: any
    b: any

    constructor(a: any, b: any) {
        this.a = a
        this.b = b
    }

}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию


class Time {
    date: Date
    hours: number
    minutes: number
    seconds: number

    constructor() {
        this.date = new Date()
        this.minutes = this.date.getHours()
        this.hours = this.date.getMinutes()
        this.seconds = this.date.getSeconds()
    }

    setTime(hours: number = 0, minutes: number = 0, seconds: number = 0) {
        console.log(this.displayTime())
        this.hours + hours < 25 ? this.hours = this.hours + hours : this.hours = this.hours + 0
        this.minutes + minutes < 61 ? this.minutes = this.minutes + minutes : console.log('Минуты введены не корректно, введите меньше на ' + (this.minutes + minutes - 60))
        this.seconds + minutes < 61 ? this.seconds = this.seconds + minutes : console.log('Секунды введены не корректно, введите меньше на ' + (this.seconds + minutes - 60))
        console.log(this.displayTime())
    }

    displayTime() {
        let h = this.hours < 10 ? `0${this.hours}` : this.hours
        let m = this.minutes < 10 ? `0${this.minutes}` : this.minutes
        let s = this.seconds < 10 ? `0${this.seconds}` : this.seconds
        return console.log(h + ':' + m + ':' + s)
    }

// && console.log('Часы введены не корректно, введите меньше на ' + (this.hours + hours - 24))
}

let b = new Time()

b.setTime(40, 4, 4)
// b.displayTime()
// b.displayTime()
// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

class Customer {
    name: string = ''
    secondName: string = ''
    address: string = ''
    numberCard: number = 0

    constructor(name: string, secondName: string, address: string, numberCard: number) {
        this.name = name
        this.secondName = secondName
        this.address = address
        this.numberCard = numberCard
    }

    setName(value: string) {
        this.name = value
    }

    setSecondName(value: string) {
        this.secondName = value
    }

    setAddress(value: string) {
        this.address = value
    }

    setNumberCard(value: number) {
        this.numberCard = value
    }

    getInformation() {
        console.log({
            name: this.name,
            secondName: this.secondName,
            address: this.address,
            numberCard: this.numberCard,
        })
    }
}

let arr = [
    new Customer('Andrew', 'donkey', 'Minsk', 10),
    new Customer('Clen', 'Melt', 'Minsk', 11),
    new Customer('Wen', 'bottle', 'Minsk', 12),
    new Customer('Bob', 'pain', 'Minsk', 14),
]

// @ts-ignore
let result = arr
    .sort((a, b) => a.name > b.name ? -1 : 1)
    .filter((el) => el.numberCard > 10 && el.numberCard < 14)

console.log(result)

// @ts-ignore
window.newCustomer = new Customer()


// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

class Car {
    mark: string = ''
    numberCylinders: number = 0
    power: number = 0

    constructor(mark: string, numberCylinders: number, power: number) {
        this.mark = mark
        this.numberCylinders = numberCylinders
        this.power = power
    }

    showInfo(){
        console.log(this)
    }
    setMark(mark: string){
        this.mark = mark
    }
}

// @ts-ignore
window.Car = new Car('Audi', 10, 700)

class BigCar extends Car {
    weight: number

    constructor(mark: string, numberCylinders: number, power: number, weight: number) {
        super(mark, numberCylinders, power);
        this.weight = weight
    }
}



// just a plug
export default () => {
};