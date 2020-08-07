'use strict';

let eight = 8;
eight.toString; // получить ссылку на метод (свойство, содержащее функцию) без его выполнения
eight.toString(); // выполнить метод toString объекта point

// ФУНКЦИЯ - ОБЪЕКТ!
function DECLARATIONfunction() {
    let privet = "hello";
    return privet;
}
//объявление функции
// сработает и до и после объявления. hoisting(поднятие) над всем исполняемым
let privetFromFunction = DECLARATIONfunction();


let EXPRESSIONfunction = function () {
    let beef = new Object();
}; // точка с запятой! Это не блок, а выражение с присваиванием функции
// функциональное выражение
// Делает функцию - переменой. Подходит для if-else, чтобы 
// объявить и использовать только в нужном случае

// Также существуют АНОНИМНЫЕ функции


let sum = function (a, b) {
    return a + b;
} // УКОРОЧЕНО со стрелочными функциями:
let sum1 = (a, b) => a + b; // если выражение в одну строчку, return перед ним можно не ставить

let welcome = (a < 18) ?
    () => 'Привет' :
    () => "Здравствуйте!"; //тернарный оператор со стрел функциями


(function () {
    let i = "что угодно, и не в глобальной области";
    let start = "способ не захламлять глобальные переменные";
    start = i;
})()   //и тут же вызвали

let makeCollectionFunc = () => new Array();
let combiner = (a, b, c) => {
    let Number1 = a - b;
    let Number2 = b / c;
    return Number2 * Number1;
}

//Внутри функции её лексич. окружение создаётся при каждом вызове функции заново
// Лексическое окружение => область видимости = скоуп функции
// строго говоря [[scope]] - внутреннее свойство лексического окружения, которое ссылается на лекс окр родителя - внешнее лексическое окружение

//контекст функции - THIS 
function funk3() { return this; }
funk3(); //undefined
//this в декларированной функции без контекста будет window, А ПРИ 'use strict' - undefined
//this будет иметь для такой f смысл, когда на вызвана в контексте объекта:
// 1) obj.func()      2) new Obj        3) call/apply/bind

let noizy = "loud";
funk3.call(noizy); //"loud" является this 
//call и apply привязывают контекст и сразу вызывают функцию
//apply всегда принимает 2 параметра, где второй - массив аргументов


funk3.bind(noizy) //Возвращает Ф, привязанную к noizy
//bind не вызывает Ф, только привязывает контекст


function heyy() {
    console.log("hello", this)
}

const personBoi = {
    name: "Alexey",
    age: 24,
    sayHello: heyy,
    sayHelloInWindowContext: heyy.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        if (job != undefined) {
            console.log(`Job is ${job}`);
        }
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}
const currentBoi = {
    name: "George",
    age: 28,
}

let fnCurrentBoiInfo = personBoi.logInfo.bind(currentBoi, 'Backend', 89999);
console.log(fnCurrentBoiInfo())

// ЗАМЫКАНИЯ CLOSURE ЗАМЫКАНИЯ CLOSURE 
//Замыкания - внутренняя F замкнута на обл видимости родительской F

function externaClosurelFn(externArg) {
    return function (internalArg) {
        return externArg + internalArg;
    }
}
let internaClosurelFn = externaClosurelFn(99);

internaClosurelFn(1); //100 эта функция замкнута в родительской, в которой единица
internaClosurelFn(101); //200 замкнуло значение 1 в себе и всегда его использует

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com')
comUrl('google') // https://google.com
