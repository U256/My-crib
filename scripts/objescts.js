'use strict'
typeof {} // "object"  Непримитивный тип данных
typeof [1, 2, 4]; // "object"
typeof function () { }; // "function" ФУНКЦИЯ - ОБЪЕКТ

typeof null; // "object" НО это отдельный тип данных
typeof undefined; // "undefined"

typeof 35; // "number" Включает infinity, Nan, BigInt

typeof "text"; // "string" `тут` - обратные кав для функции вставки

typeof true; // "boolean"
//globalX = 1 //если не указать var/let/const при создании то даже в функции переменная будет ГЛОБАЛЬНОЙ. При use strict - ошибка
let id1 = Symbol('id1');
typeof id1; //этот тип не преобр автоматом в строку и уникален
// for in не найдёт ID, к нему нужно обращаться явно

//object, symbol, number, string, boolean, undefined, null


//ОПЕРАЦИИ И ОПЕРАТОРЫ:
//ОПЕРАЦИИ И ОПЕРАТОРЫ:
'2' == 2; //true
true != 0; //true
false == 0 //true
"" > -5; //true
false == []; //true
false == ''; //true
"" == false; //true всё выше, т.к. пустая строка приводится к 0, 0 - к false
// строгое равенство === бы не прокатило, этот оператор не приводит типы

null == 0; //false! это работает только с null и undefined
NaN == NaN; //false
undefined == false; //false
null == false; //false


//раница при передаче == и === в this:
(function difrence() {
    this == 5; //true
    this === 5; //false
}).call(5);

//Работа с числами:
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true
isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false
isNaN(new Date());                // false
isNaN(new Date().toString());     // true
parseInt("6");
parseFloat('8.2');

let power = 2 ** 3; //8 степень числа
let stringFromNum = +"5"; //5
+true; //1
+false; //0
+''; //0
let elemX, elemY;
elemX %= elemY; // x= x%y


//унарный оператор - работает с 1 переменной. Наприм инкремент
//бинарный - с двумя. 2+2; int1 = int2
//тернарный - с тремя. isTrue? funcA() : funcB();


let fruit1 = 'apple';
let baggg = {
    [fruit1 + 'Computers']: 5 //fruit - вычисляемое свойство
}; // baggg.appleComputers = 5


////////////////////////////
// Создание новых объектов:
// Для создания кучи одинаковых объеков - конструктор. Он с БОЛЬШОЙ буквы!
function Point(x, y) {
    this.x = x;
    this.y = y;
}
let point1 = new Point(1, -2);

function ObjectOne(model) { //задаётся конструктор
    this.model = model;
}

const objectOne = { //предполагается new Object ({....})
    manufacturer: 'opel',
    model: 'astra',
    year: 2011,
    ac: true, //висячая запятая, чтобы удобнее было добавлять свойства
};
//Свойства объекта, объявленного через const, могут быть дополнены.

let objectTwo = Object.create(
    {//первый параметр - объект-прототип
        objectOne
    },
    {//поля для создаваемого объекта
        
    }
);//потомок объекта objectOne
objectTwo.model = 'calibra'; // переписали свойство отца
objectTwo.type = 'coupe'; // добавили свойство

//или можно впринипе задать:
ObjectOne.prototype = objectOne;
// это значит, что при создании объекта new ObjectOne, ему будет задан __proto__ = objectOne
// Свойство prototype имеет смысл только у конструктора
// Свойство с именем prototype можно указать на любом объекте, но особый смысл оно имеет, лишь если назначено функции - конструктору.

// Само по себе, без вызова оператора new, оно вообще ничего не делает, его единственное назначение – указывать __proto__ для новых объектов.
//Значением prototype должен быть только объект
console.group("Свёрнуто в группу:")

Object.getPrototypeOf(Object.prototype); // null
Object.prototype.__proto__; // null
ObjectOne.prototype.size = "big"; // Присвоили size ObjectOne
console.log("size" in objectOne); // true   key IN obj - проверка на наличие
console.log(objectTwo.size);

let objectThree = new ObjectOne();
// При создании объектов с помощью функции - конструктора new, JavaScript добавляет к функции свойство prototype

console.groupEnd()

//Object.assign(obj1, obj2) объединит св-ва в obj1. Совпадающие свойства перезапишутся из 2
let clonedObj = Object.assign({}, objectOne);

Array.prototype.newFunction4AllArrays = function (n) {
    return this.map(function (i) {
        return i * n;
    })
} // теперь эта f есть у всех []
let simplArr = [1, 2, 3];
simplArr.newFunction4AllArrays(20); //20, 40, 60

null;
//↑↑ __proto__ - ссылка
Object.prototype; // →→→constructor to→  Object
Object.prototype; // ←←←portotype for← Object
//↑↑ __proto__ ссылка
Date.prototype; // →→→constructor to→  Date
Date.prototype; // ←←←portotype for← Date
//↑↑ __proto__ - ссылка ↓↓↓↓
new Date();


let strinn = new String('imma string');
//у всех примитивов есть "сложные обертки"
//можно создавать примитив через обёртку,
//чтобы достучаться до род.класса у примитивов
let fiv = new Number(5);
console.log(fiv);
//Number { 5 }
//__proto__: Number (а у Number - Object)
//[[PrimitiveValue]]: 5

// также примитивы передаются по значению, объекты - по ссылке
let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
user.name; // 'Pete'





