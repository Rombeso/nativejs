console.log('Hi')

// Проверить правельность расстоновки скобочек
// Решение с помощью стека, добавляем левые скобочки и изымыем правые, по итогу стек должен быть пустым.

const IsValidParrenthess = (str) => {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        let chart = str[i]
        if (chart == '(') arr.push(chart)
        else if (arr < 1) return false
        else arr.pop()
    }
    if (arr.length < 1) return true
    else return false
}
// console.log(IsValidParrenthess('()')) //true
// console.log(IsValidParrenthess('((()))')) //true
// console.log(IsValidParrenthess('()()()')) //true
// console.log(IsValidParrenthess('()(')) //false
// console.log(IsValidParrenthess('((())')) //false
// console.log(IsValidParrenthess(')(())(')) //false
// console.log(IsValidParrenthess(')(())')) //false

// Реализовать данную задачу используя только очередь

const IsValidParrenthess2 = (str) => {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        let chart = str[i]
        if (chart == '(') arr.unshift(chart)
        else if (arr < 1) return false
        else arr.pop()
    }
    if (arr.length < 1) return true
    else return false
}
console.log(IsValidParrenthess2('()')) //true
console.log(IsValidParrenthess2('((()))')) //true
console.log(IsValidParrenthess2('()()()')) //true
console.log(IsValidParrenthess2('()(')) //false
console.log(IsValidParrenthess2('((())')) //false
console.log(IsValidParrenthess2(')(())(')) //false
console.log(IsValidParrenthess2(')(())')) //false