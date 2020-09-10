'use strict'
typeof {} // "object"  Непримитивный тип данных
typeof [1, 2, 4]; // "object"
typeof function () { }; // "function" ФУНКЦИЯ - ОБЪЕКТ

typeof null; // "object" НО это отдельный тип данных
typeof undefined; // "undefined"
//null/undefined не имеют объект-оберток и, соответственно, методов

typeof 35; // "number" Включает infinity, Nan, BigInt
//NaN возвращается в результате выполнения математических операций, которые JavaScript не может вычислить

typeof "text"; // "string" `тут` - обратные кав для функции вставки

typeof true; // "boolean"

let id1 = Symbol('id1'); //тип Symbol не преобр автоматом в строку и уникален
// for in не найдёт ID, к нему нужно обращаться явно

//globalX = 1 //если не указать var/let/const при создании то даже в функции переменная будет ГЛОБАЛЬНОЙ. При use strict - ошибка

//object, symbol, number, string, boolean, undefined, null

// примитивы передаются по значению, объекты - по ссылке
let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
user.name; // 'Pete'

//у всех примитивов есть "сложные обертки"
//можно создавать примитив через обёртку. НЕ рекомендуется!
let strinn = new String('imma string');
let fiv = new Number(5);
//чтобы достучаться до род.класса у примитивов
fiv; // выдаст оберточный вариант, а не просто 5:
//Number { 5 }
//__proto__: Number
//[[PrimitiveValue]]: 5


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
//Значение undefined несравнимо с другими значениями

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

let power = 2 ** 3; //8 -- степень числа
let stringFromNum = +"5"; //5 как число
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
    [fruit1 + 'Computers']: 5, //fruit - вычисляемое свойство
    svoistvo: 5,
}; // baggg.appleComputers = 5




////////////////////////////
// Свойства объекта!!! объявленного через const, МОГУТ быть дополнены!!!
// Создание новых объектов возможно при помощи:
// 1 литерала объекта;
// 2 функции - конструктора new
// 3 Object.create;
// 4 ключевого слова class.

// 1 литерал. Внутри исполняется new Object ({....})
var point0 = {
    __proto__: baggg, //получили родителем оъектик baggg

    _secretVal: 'скрытое свойство',  // _ означает защищенное свойство

    toString() { //эквивалентно toString: function (){}
        return 'x is ' + x + '; y is ' + y;
    },
    // x: 40,
    // y: 60, можно их не задавать явно, а обернуть в get и set
    get coordinates() { // get и set - интерфейсы обращения к свойству
        return `x = ${this.x}, y = ${this.y}`;
    },
    set coordinates(valuesArr) {
        this.x = valuesArr[0];
        this.y = valuesArr[1];
    },
    //висячая запятая, чтобы удобнее было добавлять свойства

    //при этом в классе нет свойств x и y, значит, к ним нет прямого доступа
};

point0['z'] = 35;// добавление свойства, заданного в ' '
delete point0.z; // Удаление свойства 
'z' in point0; // false, z - undefined
// Доступ к свойствам объектов возможет не только через точку - 
// через квадратные скобки можно получить доступ к свойствам объекта,
// имена которых составлены не по правилам именования переменных.

Object.defineProperty(point0, '_secretVal', { //изменим дескрипторы свойства
    enumerable: false, // не перечисляется в for in
    configurable: false, // не удаляется и не переназначается
    writable: false, // не перезаписывается
});

Object.defineProperty(point0, 'newVal', { // создадим новое св-во
    value: 'У свойства, заданного так, по умолчанию 3 false как у примера выше'
});

point0.coordinates = [1, 2]; //setter
point0.coordinates; //x = 1, y = 2 Без скобок getter




//2 функция-конструктор new Object(). Он с БОЛЬШОЙ буквы! Возвращает this
function Point2D(x, y = 0) { // на случай если не укажут 2 аргумент
    this.x = x;
    this.y = y;
}
// При создании объектов с помощью new, JavaScript добавляет к функции свойство prototype.

Point2D.prototype;
// { constructor: ƒ }
// constructor: ƒ Point2D(x, y = 0)
// __proto__: Object

let point1 = new Point2D(1, -2); //у конструктора this - создаваемый объект

typeof Point2D; // function Это именно ФуНкЦиЯ-конструктор
typeof point1; //object
point1 instanceof Point2D; //true




// 3 Object.create 
let objWithNoProto = Object.create(null);//тогда вообще род класса не будет

let point2 = Object.create(Point2D.prototype,
    //первый параметр - объект-прототип. Если не указан, оставить {},

    { //вторым параметром объект, в котором поля для создаваемого объекта
        x: { //каждое свойство - отдельный объект
            value: 9, //не итерируется в отличии от обычного не объектного объявления. И in тоже не сработает
            enumerable: true, // вернули итерабельность
            writable: true, //можно изменять, например point2.x = -2
            configurable: true // можно удалять
        },
        y: {
            value: 2007,
            enumerable: false, //дескриптор по умолч
            writable: false, //дескриптор по умолч
            configurable: false, //дескриптор по умолч
        },
        age: {
            get() {
                return new Date().getFullYear() - this.y;
            },
        },

    }
);
point2.status = 'working'; // добавили свойсто стандартно. флаги: true true true




/* 4 Создание объектов посредством ключевого слова CLASS (ECMAScript 2015)
При создании класса аргументы использует constructor при создании объекта.
Ключевое слово this в классе указывает на создаваемый объект
В JavaScript нет классов, которые есть в языках с класс-ориентированным
подходом (С++, PHP, C# и др.).
Тут класс - это чисто условное понятие, под которым понимают прототип,
свойства которого наследуется одним или множеством объектов. */


class Animal {
    static type = "Animal";
    //к стат переменным в JS обращение только от класса! Animal.type

    constructor(options) { // options - объект в данном случае
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    // методы, которые попадут в прототип
    voice() {
        console.log('heh')
    }
}
const justAnimal = new Animal({
    name: 'anim',
    age: 6,
    hasTail: false,
});

class Cat extends Animal {  //Cat > Animal > Object

    static type = 'Cat' //перезаписали свойство

    constructor(options) {
        super(options) //обязательно вызов бати
        this.color = options.color // добавили поле
    }

    voice() {
        console.log('meow') // переопределили
    }
    get ageInHumanCount() { // свой метод
        return this.age * 7
    }
}

const catLion = new Cat({
    name: 'lion',
    age: 5,
    hasTail: true,
});

typeof Cat // function
catLion instanceof Animal //true
catLion.ageInHumanCount; //35




//////////////PROTOTYPES PROTOTYPES PROTOTYPES

Object.getPrototypeOf(Object.prototype); // null
justAnimal.constructor; // весь класс Animal 
Cat.prototype.constructor; // весь класс Animal 
// { constructor: ƒ, voice: ƒ }
// constructor: class Animal
// voice: ƒ voice()


// можно впринипе задать:
//Point2D.prototype = Object;
// это значит, что при создании объекта new Point2D, ему будет задан __proto__ = Object
// уже заданный конструктор будет перезаписан
// Без вызова оператора new, оно вообще ничего не делает, его единственное назначение – указывать __proto__ для новых объектов.
// Свойство prototype имеет смысл только у конструктора
// Значением prototype должен быть только Объект

Cat.prototype.size = "big"; // Присвоили size классу Animal 
"size" in catLion // true   key IN obj - проверка на наличие

//Object.assign(obj1, obj2) объединит св-ва в obj1. Совпадающие свойства перезапишутся из 2
let clonedAnimal = Object.assign({}, justAnimal);

Array.prototype.newFunction4AllArrays = function (n) {
    return this.map(function (i) {
        return i * n;
    })
} // теперь эта f есть у всех []
let simplArr = [1, 2, 3];
simplArr.newFunction4AllArrays(20); //20, 40, 60

//Свойство constructor - содержит ссылку на конструктор, которым объект был создан
[].constructor; //Array;
({}).constructor; //Object;
Object.prototype.constructor; //Object

null;
//↑↑ __proto__ - ссылка
Object.prototype; // →→→constructor to→  Object
Object.prototype; // ←←←portotype for← Object
//↑↑ __proto__ ссылка
Date.prototype; // →→→constructor to→  Date
Date.prototype; // ←←←portotype for← Date
//↑↑ __proto__ - ссылка 
new Date();






