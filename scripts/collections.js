'use strict';
// Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator
// Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.
//строки итерируемы (для них работает for..of) и являются псевдомассивами (они индексированы и есть length)

let arr1 = new Array();
let arr2 = [];
let arr3 = ['one', 'two', 'three', 8, { name: 'Джон' }, true, function () { alert('привет'); }];

let arrLength = arr3.push('last element'); //добавляет

let deletedEleme = arr3.pop(); //удаляет посл элемент, если не указать конкретный. Его же и возвращает

let deletedEleme2 = arr3.shift(); // удаляет 1 элемент, возврщает его
let arrLength2 = arr3.unshift("new first elem"); // добавляет в начало, остальное сдвигает, возвр длину
arr3.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
let removedElementsArray = arr3.splice(0, 3, "Давай", "танцевать");// удалить 3 первых элемента и заменить их другими
let cutedPeaceOfArr3 = arr3.slice(1, 3); // возвращает новый массив. С 1 ДО 3 (не включ)

// можно создавать массивы в объектах и объекты в массивах

arr3.forEach(function (item, index, array) {
  `${item} имеет позицию ${index} в ${array}`;
});

const arr3Map = arr3.map(person => { // преобразует массив в новый формат  
  return person;  // их можно как угодно тут изменить. Оперировать объектом и изменять его, использовать поля у объекта  
})

let arr4 = [1, 0, false];
arr4.indexOf(0); // 1
arr4.indexOf(false); // 2
arr4.indexOf(null); // -1
arr4.includes(1); // true

let firstFindedElem = arr4.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
let arrayOfFindedElements = arr4.filter(function (item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});


let iterable11 = [10, 20, 30];
let iterableM = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let value of iterable11) {//of
  value += 1;
  value; //11 21 31
}
/*Цикл for..of использует итератор. Не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно.А также это короче.*/


for (let entry of iterableM) {
  entry;
  ; // ['a', 1] ['b', 2] ['c', 3]
}
for (let [key, value] of iterableM) {
  value; // 1 2 3
  key; //a b c

}
// of Не использует итератор. Берет только значение в массиве и больше никаких свойств
// ДЛЯ Array, Map, Set, объект аргументов и подобных

for (let roller in arr3) { //in  Не рекомендуется к массиву
  roller;
};
//проходит по свойствам в ПРОИЗВОЛЬНОМ порядке
//берет все ключи и значения. key str[key]
//проходит только по перечисляемым свойствам. Объекты, созданные встроенными конструкторами, такими как Array и Object имеют неперечисляемые свойства от Object.prototype и String.prototype, например, от String-это indexOf(), а от Object - метод toString(). Цикл пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа)
// Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10 - 100 раз медленнее!!!!!!! не следует использовать цикл for..in для массивов

let swither = 0;
//switch 
switch (swither) {
  case 0:
    let foo;
    break;
  case 1:
    //let foo; - Выброс SyntaxError из-за повторного объявления переменной, тут var подойдёт
    break;
}

//чтобы сравнить цифры нормально, а не по первому числу, функця:
function compareNumbers(n1, n2) {
  if (n1 == n2) return 0;
  if (n1 > n2)
    return 1;
  else
    return -1;
}
arr3.sort(compareNumbers);


const standarObj = {
  name: "Olesha",
  age: 24,
  job: 'frontend',
}
const standarArr = [
  ['name', "Olesha"],
  ['age', 24],
  ['job', 'frontend'],
]
Object.entries(standarObj); // привели обект к массиву
Object.fromEntries(standarArr); // массив к объекту



///////////////////
Symbol.iterator // ДОПОЛНИ
/////////////

//Объект MAP Map Map Map Map Map Map Map(ассоциативный массив)
// схожа с объектом, но мэпа имеет свои методы и ключом может быть объект
var arrMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
// конечно работает FOR OF - установлен итератор
arrMap.get('key'); // в обычном массиве просто по индексу, а тут - гет
arrMap
  .set(standarObj, 42) // объект - ключ!
  .set(arr3[3], 42) // ячейка из другого массива - ключ

let isKeyDeleted = arrMap.delete('key3')
arrMap; //Map(4) {"key1" => "value1", "key2" => "value2", {…} => 42, "Давай" => 42}


for (let val of arrMap.values()) { // также есть keys()
  val; //value1 value2 etc
}

arrMap.forEach(function (value, key) { //или for of
  key + ' - value = ' + value; // key1 - value = value1 итд
});

// WEAKMAP WEAKMAP WEAKMAP WEAKMAP WEAKMAP WEAKMAP
// нужен для ключей-объектов. В обычном map, при удалении объекта, это поле захламляет память. А тут удаляется
const arrWeakMap = new WeakMap([
  [standarObj, 'value1'] // ключи - только объекты!
])
// get set delete has - только эти методы имеются и всё
//  при удалении ключа-объекта стирается это поле викмэпы


// SET SET SET SET SET SET SET
const arrSet = new Set([1, 1, 3, 5, 6, 6, 1, 3]) // удаляет дубликаты 
// в ней values=keys!
arrSet.add(10)
arrSet; // {1, 3, 5, 6, 10}

function trimDuplicatesFromArray(array) {
  return [...new Set(array)]
  // аналог Array.from(new Set(array))
}
const trimmedArr = trimDuplicatesFromArray(arrSet); // [1, 3, 5, 6, 10]

console.log(trimmedArr);

// WEAKSET WEAKSET WEAKSET WEAKSET WEAKSET WEAKSET
// тоже для объектов
const arrWeakSet = new WeakSet()
// только has метод и всё
// работает как счетчик, есть или нет поле


//... spread Разворачивает массив
let clonedArr3 = [...arr3]; //развернули, засунули в []. Можно разворачивать NodeList сюда (элементы разметки) и превращать в массив. Можно добавить другие массивы через запятую:
let superArr = [...arr1, 'левый элемент добавили', ...arr3];

// при разворачивании объекта, нужно результаты оборачивать в другие объектики
let clonedStandarObj = { ...standarObj, ...standarObj }; //развернули, засунули в {}
// умный merge - слияние общих ключей объектов. Берет знач из последнего!!
console.log(clonedStandarObj); // ключи и значения общие, ничего не поменяется


// rest соберет оставшиеся аргументы в массив
function summaa(a, ...resty) { //rest
  //...resty - это опять spread: 3 5 6 10
  return a + resty.reduce((a, i) => a + i, 0)
}
summaa(...trimmedArr); //25 и тут опять был spread




// деструктуризация 
function returnSmolArray(a, b, c) {
  return [
    a + b + c,
    a / b,
    "strochka",
    [1, c + 3],
    { name: "ya" },
  ]
}
const [sumOfFunk = 'Дефолтное значение. Сработает при undefined', supOfFunk, ...restOfFunk] = returnSmolArray(1, 2, 3);
// разбили массив и создали несколько const 
sumOfFunk; //6
restOfFunk; //["strochka", Array(2), {…}]

// деструктурировать можно и объект 
const { name: nameOfObj = 'не найдено', age: ageOfObj, ...restOfObj } = personBoi

restOfObj; //{sayHello: ƒ, sayHelloInWindowContext: ƒ, logInfo: ƒ}





