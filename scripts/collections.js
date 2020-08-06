let arr1 = new Array();
let arr2 = [];
let arr3 = ['one', 'two', 'three', 8, { name: 'Джон' }, true, function () { alert('привет'); }];

let arrLength = arr3.push('last element'); //добавляет
let deletedEleme = arr3.pop(); //удаляет посл элемент, если не указать конкретный. Его же и возвращает

let deletedEleme2 = arr3.shift('differentOne'); // меняет первый элемент, возврщает удаленный
let arrLength2 = arr3.unshift("very first elem"); // добавляет в начало, остальное сдвигает, возвр длину
arr3.slice(1, 4);
// можно создавать массивы в объектах и объекты в массивах

let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  "1": "США"
}; //если нужны именно цифры но в порядке создания, можно задавать "+1", "+49" etc
for (let code in codes) {
  code; // 1, 41, 44, 49
}//свойства упорядочены особым образом: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let summy = 0;
for (let person in salaries) {
  person; // john Ann Pete КЛЮЧИ
  salaries[person]; //100 160 130 ЗНАЧЕНИЯ
}


let iterable11 = [10, 20, 30];

for (let value of iterable11) {
  value += 1;
  value; //11 21 31
} //of
let iterableM = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let entry of iterableM) {
  entry; // ['a', 1] ['b', 2] ['c', 3]
}
for (let [key, value] of iterableM) {
  value; // 1 2 3
}
// Не использует итератор. Берет только значение в массиве и больше никаких свойств
// ДЛЯ Array, Map, Set, объект аргументов и подобных

for (let roller in arr3) {
  let rolly = roller;
}; //in
//проходит по свойствам в ПРОИЗВОЛЬНОМ порядке
//берет все ключи и значения. key str[key]
//проходит только по перечисляемым свойствам. Объекты, созданные встроенными конструкторами, такими как Array и Object имеют неперечисляемые свойства от Object.prototype и String.prototype, например, от String-это indexOf(), а от Object - метод toString(). Цикл пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа)


//switch использует