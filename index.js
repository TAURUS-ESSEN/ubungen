'use strict';

let date = new Date();
let geburtsJahr = 0;
let heutigeJahr  = date.getFullYear();
console.log(heutigeJahr)

const u6Form = document.getElementById('ubung6');
const u6result = document.getElementById('u6result');
const u6input = ubung6.querySelector("input");
const u6button = ubung6.querySelector("button");
u6button.addEventListener("click", ()=> {
    let alter = heutigeJahr - u6input.value;
    console.log(u6input.value)
    u6result.textContent = `Im Jahr ${heutigeJahr} bin ich ${alter-1} oder ${alter} Jahre alt.`;
})

// console.log('Год:', d.getFullYear());
// console.log('Месяц:', d.getMonth());        // 0-11
// console.log('День месяца:', d.getDate());   // 1-31
// console.log('День недели:', d.getDay());    // 0-6
// console.log('Часы:', d.getHours());
// console.log('Минуты:', d.getMinutes());
// console.log('Секунды:', d.getSeconds());
// console.log('Миллисекунды с 1970:', d.getTime());
// for (let key of ['getFullYear', 'getMonth', 'getDate', 'getDay', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getTime']) {
//     console.log(key + ':', d[key]());
// }