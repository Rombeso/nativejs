// Task 3

function count(start) {
        let count = start;
       return {
           increase() {
            return ++count
           },
           decrease() {
               return  --count
           },
            reset() {
                return count = 0
            } ,
                set() {
                    return count = start
                },
       }
}
let counter = count(2)
let counter2 = count(4)

console.log(counter.reset())
console.log(counter2.decrease())

    //     {
    //     start: start,
    //     increase: function () {
    //         start++
    //     },
    //     decrease: function () {
    //         start--
    //     },
    //     reset: function () {
    //         this.start = 0
    //     },
    //     set: function () {
    //         this.start = start
    //     },
    //
    //
    // };
    //
    // return obj


// Task 2

// function count() {
//     let count = 1;
//     return function () {
//        return count++
//     }
// }
// let counter = count()
// let counter2 = count()
//
// console.log(counter())
// console.log(counter())
// console.log(counter2())
// console.log(counter())

// Task 01

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


