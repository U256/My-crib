'use strict'
let bom = 'Browser Object Model';
let googLink = 'http://google.com/';
let indexWindow = "найди способ присовить другую страницу сюда"
let elem1 = document.getElementById("elemToChangeHTML");

function getWindowOf(element) {
    return element.ownerDocument.defaultView || element.ownerDocument.parentWindow;
}

// 1 BOM WINDOW - всё окно браузера. Каждая новая вкладка
function openWindow() {
    window.open(googLink, '_blank');
    // также во второй параметр можно поместить ИМЯ окна
    // _self (сюда же открыть) 
    //третий параметр задает размеры окна и прокрутку / ресайз
    // если это задать переменной, то с ней можно работать, как c другим document!
}
//Если мы работаем с текущим окном, то "window." можно опускать
function closeWindow() { window.close() } // просто закроет 
function printThisPage() { window.print() } //все не имеют параметров
window.opener; // окно, откуда перешли с помощью метода open()
window.closed; // ? - false
window.name = 'bomWindow'; //то, что будет указано в гиперссылке в атрибуте taget='bomWindow' По умолч имени нет

window.scroll({ //не передаётся, просто крутит сама
    top: 10,
    behavior: "smooth"
})
let scroll20 = () => window.scrollTo(0, 20); // перемещает на координаты x y
let scroll30 = () => window.scrollBy(0, 30); // перемещает относительно текущ
// elem.scrollIntoView
document.body.style.overflow = 'hidden' // запретить скролл!!!!

window.onresize = function () {
    if (window.matchMedia('(min-width: 767px)').matches) {
        ///
    }
};

document.body.style.overflow = ''
//окно:
innerWidth;  // и height - включает полоску прокрутки. Лучше использовать cloentWidth
outerHeight; // и width - внешняя. Включает панель инструментов и полоску прокрутки
document.documentElement.clientWidth // и Height - ТОПЧЕК
pageYOffset; //насколько прокручено. При загрузке конечно 0 (window.свойство подразумевается)
scrollY; // - эквивалентно

//элементы:
elem1.offsetWidth // и height - полный размер включая рамки
elem1.scrollWidth // включает скролл элемента
elem1.clientWidth // и Height - включает паддинги и без прокрутки. Применима к элементу
elem1.scrollTop; // на сколько пикселей пролистано от начала элемента до видимой области

// для работы с фреймами есть свои методы

// любой alert prompt confirm на самом деле тоже widnow.alert()
// setTimeout(), setInterval() тоже относятся к window



// 2 BOM WINDOW.LOCATION - адресная строка
window.location; // объект со всеми данными, в т.ч. что будут ниже
window.location.origin // возвращает протокол, имя хоста и номер порта URL 
//  >>> "https://www.google.com"
location.protocol // set or return URL protocol 
//  >>> "https:"
location.hostname // set or return name of URL host 
//  >>> "itchief.ru"
location.host // set or return name of URL host & URL port number 
//  >>> "itchief.ru"
location.hash // set or return URL 
//  >>> "#inbox"(в гугл почте)
location.href // set or return URL containings 
//  >>> "https://vk.com/feed"
location.pathname // set or return part of URL with path 
//  >>> "/feed"(новости вк)
location.port // set or return URL port 
//  >>> ""
function goToSite() { location.assign("https://www.google.com") }
function reloadPageHard() { location.reload(true) } //если передать true, принудительно обновится полностью с сервера, а не просто с кэша
function goToAnotherPage(page) { document.location.href = `"${page}"`; }
function redirectTo(page) {
    document.location.replace(`"${page}"`) //в истории браузера не осталась запись о текущей странице
}

// 3 BOM WINDOW.HISTORY - история переходов
window.history // объект со всеми данными, в т.ч. что будут ниже
history.length // длинна сесси в этой вкладке
const currentState = history.state
function moveInTabHistory(n) { history.go(n) } // на сколько вкладок назад/вперёд
function moveBack() { history.back() } // как нажать кнопку "назад" аналог forward()



// 4 BOM WINDOW.SCREEN - об экране инфа
window.screen; // объект со всеми данными, в т.ч. что будут ниже
screen.height // и width 
screen.availHeight // и availWidth - сколько впринципе может занять браузер
screen.orientation // ScreenOrientation { angle: 90, type: "landscape-primary", onchange: null }



//5 BOM WINDOW.NAVIGATOR - информатор
navigator.platform //операционка



// 6 BOM WINDOW.FRAMES
// все доступные фреймы на странице



// 7 BOM WINDOW.DOCUMENT - корневой элемент DOM
document.documentElement // HTML не запакованный
document.characterSet //вернёт кодировку >>> "UTF-8"
document.readyState // при загрузке меняются состояния
// uninitialized > loading > loaded > interactive (загружен достаточно для взаимодействия) > complete
document.referrer // адрес, откуда пришёл пользователь
document.URL
document.URI // можно не только получить, но и задать расположение URL 
document.domain // >>> "www.youtube.com"



// DOM модель, которую браузер создаёт в памяти компьютера на основании HTML-кода с сервера
let domModel = 'Document Object Model'
// node - узел - элемент DOM дерева
// 1	ELEMENT_NODE	Узел элемента
// 3	TEXT_NODE	Текстовый узел(#text)
// 7	PROCESSING_INSTRUCTION_NODE	Узел инструкции обработки
// 8	COMMENT_NODE	Узел комментария(#comment)
// 9	DOCUMENT_NODE	Узел документа(#document)
// 10	DOCUMENT_TYPE_NODE	Узел типа документа
// 11	DOCUMENT_FRAGMENT_NODE	Узел фрагмента документа
document.nodeType // - для определения номера типа
//nodeValue // для текстового узла. Возвращает значение

let nodeP = document.getElementById('strongLove')

if (nodeP != null) {

    // C:\Users\Admin\Desktop\OpenServer\domains\My-crib\images\javascript-dom-relations.png
    // наведи на картинку выше и получишь план-капкан
    nodeP.childNodes[0]; //1 дочерний узел (ребёнок) #text "I "  +можно обратиться firstChild
    nodeP.childNodes[1]; //2 дочерний узел (ребёнок) strong остальные ему сиблинги
    nodeP.childNodes[2]; //3 дочерний узел( ребёнок) #text " JAVASCRIPT" +можно обратиться lastChild
    nodeP.parentNode; // весь html родителя
    nodeP.parentElement // - родительский узел-элемент
    nodeP.children // - возвращает коллекцию дочерних элементов(детей). Не включая текст
    nodeP.firstElementChild // +lastElementChild возвращает первый дочерний узел-элемент 
    nodeP.nextSibling // +previousSibling следующ элемент  
    nodeP.nextElementSibling // +previouslementSibling следующий соседний узел - элемент  В данном случае это фрейм бутстрапа
    var doesMatch = nodeP.matches('#strongLove'); //true!
    nodeP.textContent //текстовый контент узла и всех его потомков любой вложенности. Или поменять
    // >>> I LOVE JS
    nodeP.innerHTML // >>> I <strong>LOVE</strong> JS
    nodeP.outerHTML // c внешними тегами! >>> "<p id="strongLove"> I <strong>LOVE</strong> JS  </p>"
}

let elemToChange = document.getElementById("elemToChangeHTML"); //img
let elemToChangeToo = document.querySelector("#elemToChangeHTML");
let qSel = document.querySelectorAll(".nav-li") // возвращает массив Nodeist
console.log(qSel);
var anchors = document.querySelectorAll('ul li a'); // можно искать так
var firstAnchor = document.querySelectorAll('ul li a'); // только первый
// getElementsByTagName, getElementsByClassName и getElementsByName = возвращают живую коллекцию элементов. Т.е. коллекцию содержимое которой может изменяться при изменении DOM.
// Это позволяет перезаписать коллекцию в переменную если она была изменена. Просто вызываем getElementsBy* после изменений и присваиваем куда надо

//querySelector, querySelectorAll, getElementsByTagName, getElementsByClassName позволяют
//искать не только в document, но и в конкр элементе

// При создании страницы браузер получает HTML и стоит DOM. При этом атрибуты элементов переводятся в соответствующие DOM-свойства. Не всегда интерпретируя идентично тому, что дали
// например, атрибут href и DOM-свойство href содержат разные значения. При выставлении чекбокса атрибут не проставится, а свойство - да
elemToChange.attributes;

elemToChange.getAttribute('src'); //значение. Атрибут - всегда строка
elemToChange.hasAttribute('src'); //true Также есть setAttribute и removeAttribute НЕЖЕЛАТЕЛЬНО!
// 'class' и 'className' синхронизируется, так что можно даже так его менять:
elemToChange.setAttribute('class', 'alert-warning'); //Изменили 1 раз

elemToChange.id; // свойство - не обязательно строка!
elemToChange.className = 'imgSh dobavil2class'; // можно получить или изменить. Изменили 2 раз
elemToChange.newProperty = "useles property"
//Изменив атрибут, дом переделает свойтсво, а изменив DOM-свойство, не всегда изменяется HTML-атрибут
//Поэтому лучше работать со свойствами объекта
elemToChange.classList; // массив DOMTokenList с классами. К нему применяется ADD TOGGLE REMOVE
elemToChange.style // возвращает CSSStyleDeclaration, а уже в style можно получать и изменять CSS

//создание, изменение, удаление и вставка элементов
let newBtn = document.createElement("button")
document.createTextNode('blabla')
// к ним применяются appendChild(), removeChild(), node.replaceChild(newnode,oldnode), cloneNode()
elemToChange.after(newBtn) // кнопка вставится после шрека


//EVENTS EVENTS EVENTS EVENTS:
let mouseEvents = ['mousedown', 'mouseup', 'click', 'dblclick', 'mouseout -> выход из области', 'mouseenter -> вход', 'mouseleave -> как out но не всплывает'];

let keyboardEvents = ['keydown', 'keyup', 'keypress -> down+up'];

let frameEvents = ['error -> не грузит фрейм', 'load', 'pageshow -> как load но сработает даже при загр из кэша', 'scroll -> если фрейм крутится'];

let elementEvents = ['focus', 'blur', 'focusin -> не всплывает', 'search -> (input type="search")', 'submit -> перед отправкой формы на сервер'];

let dragEvents = ['dragstart ', 'drag', 'dragend', 'dragenter -> в области drop target', 'dragleave', 'drop'];

let animEvents = ['animationstart', 'animationend', 'animationiteration -> повторная анимация'];

let bufferEvents = ['сopy', 'cut', 'paste'];

let printEvents = ['beforeprint', 'afterprint'];

let serverEvents = ['error', 'open -> соединение открыто', 'message'];
//Объект event события message:
// data - содержит сообщение.
// origin - URL документа, который вызвал событие.
// lastEventId - идентификатор (id) последнего полученного сообщения.

let mediaEvents = ['abort -> остановка загрузки', 'loadstart', 'loadedmetadata -> мета, после загрузки', 'loadeddata -> 1 кадр загружен', 'ended -> воспроизведено', 'pause', 'play', 'playing', 'seeked -> новая временная позиция', 'volumechange']

// Передать событие способы:
// 1 onklick = 'function1()' - атрибут в html // НЕ РЕКОМЕНДУЕТСЯ т.к. непонятно где, не даёт this и event 
// 2 elem.onclick = function1 // НЕ РАБОТАЕТ до объявления!
// 3 elem.addEventListener('eventName', function1, true) // РЕКОМЕНДУЕТСЯ
// третий параметр говорит где сработать, на погружении (true) или всплытии события. По умолч false

function focusOnElem() { elem1.focus() }
function blurFocus() { elem1.blur() } // устанавливают/снимают фокус
// elem1.onblur = function() {} // при наведении и onblur при потере фокуса

// BUBBLE - ВСПЛЫТИЕ 
// Фазы события: События погружаются до нужного элемента, а потом возвращаются (всплывают) до браузера
// Это значит, что клик по кнопке означает одновременный клик по всем родителям вплоть до HTML
elemToChange.addEventListener("click", function (event) { // Тыкни на шрека

    event.preventDefault() // отмена стандартного действия
    // аналог - return false

    //EVENT EVENT EVENT -  элемент, который вызвал обработчик события
    console.log('event:');
    console.log(event);// MouseEvent {свойства}
    event.type // "click"
    event.bubbles; // может ли всплывать
    event.screenX // screenY положение элемента
    // altKey, ctrlKey, metaKey, shiftKey - была ли нажата эта кнопка
    console.log('event.target:');
    console.log(event.target);
    console.log('this:');
    console.log(this); // объект, на ктором произошло событие. 
});

let block = document.querySelector('.block1')
block.onclick = function (event) {
    console.log('тыкнул по:');
    console.log(event.target); // покажет конкретно, куда нажал

    if (event.target.className == "p2") {
        alert("Слушали блок, а работа с параграфом! Чудеса")
    }
    // this - конкретный объект, даже если выбран весь класс
    // благодаря концепции всплытия можно слушать целый блок, а взаимодействовать с его элементом!

    // если на внешний блок тоже навешено какое-то действие и оно критическое (наприм, скрыть блок вместе с детьми), а при клике на внутренний элем мы "зацепить" это действие не хотим, то можно остановить всплытие event.stopPropagation()
}


//Правильно работать с событиями надо когда вся страница загрузилась. Вызываем нашу функцию pageInit
document.addEventListener("DOMContentLoaded", function () {
    //подписываемся на события
});
// Событие DOMContentLoaded – DOM готов, так что обработчик может искать DOM-узлы и инициализировать интерфейс.
// Событие beforeunload – пользователь покидает страницу. Мы можем проверить, сохранил ли он изменения и спросить, на самом ли деле он хочет уйти.

let isHeroClassStay = elemToChange.classList.toggle('hero'); //add, remove and toggle (switcher)
//toggle returns true if class was added and false if removed
elemToChange.classList.remove('hero');
//isHeroClassStay не изменится!


//чтобы получить доступ к глобальной переменной при наличии локальной - window.myVar
//чтобы получить доступ к глобальному контексту при наличии локального - myFunk.bind(window)
