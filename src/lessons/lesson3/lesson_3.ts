import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug

const configOMB = {
    baseURL: 'https://jsonplaceholder.typicode.com',
};
const axiosInstance = axios.create(configOMB);



// axiosInstance(
//     {
//     url: `/posts`,
//     method: "post",
//     data: {
//         title: 'First message ROMAN',
//         body: "I like spaget!",
//         userId: 1001
//     }
//     })
//
//     .then(res => {
//     console.log(res.data)
// })
// axiosInstance(
//     {
//     url: `/posts/2`,
//     method: "put",
//     data: {
//         title: 'First message ROMAN',
//         body: "I like spaget!",
//         userId: 1001
//     }
//     })
//
//     .then(res => {
//     console.log(res.data)
// })

// axiosInstance.delete(`/posts/1`).then(res => {
//     console.log(res.data)
// })
//
// axiosInstance.get(`/posts`).then(res => {
//     console.log(res.data)
// })
export default ()=>{};